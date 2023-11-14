import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { STATUS_CODES } from 'http';
import { get } from "https";
import { homedir } from 'os';
import parseGitConfig = require('parse-git-config');
import { join as joinPaths } from "path";
import { parse as parseUrl } from 'url';
import { getDTName } from './names';

export default function writeDefinitelyTypedPackage(
        indexDtsContent: string, packageName: string, overwrite: boolean): void {
    const dtName = getDTName(packageName);
    const packageDir = joinPaths("types", dtName);

    // Check for overwrite
    if (!overwrite) {
        if (existsSync(packageDir)) {
            console.log(`Directory ${packageDir} already exists and --overwrite was not specified; exiting.`);
            process.exit(2);
        }
    }

    if (!existsSync(packageDir)) {
        mkdirSync(packageDir);
    }

    run(indexDtsContent, packageName, dtName, packageDir).catch(e => {
        console.error(e);
        process.exit(1);
    });
}

async function run(indexDtsContent: string, packageName: string, dtName: string, packageDir: string): Promise<void> {
    const files: Array<[string, string]> = [
        ["index.d.ts", indexDtsContent],
        [`${dtName}-tests.ts`, ""],
        ["tsconfig.json", `${JSON.stringify(getTSConfig(dtName), undefined, 4)}\n`],
        ["package.json", `${JSON.stringify(await getPackageJson(dtName, packageName), undefined, 4)}\n`],
        ["tslint.json", '{ "extends": "@definitelytyped/dtslint/dt.json" }\n'],
        [".npmignore", ["*", "!**/*.d.ts", "!**/*.d.cts", "!**/*.d.mts", "!**/*.d.*.ts"].join('\n') + '\n'],
    ];

    for (const [name, text] of files) {
        writeFileSync(joinPaths(packageDir, name), text, "utf-8");
    }
}

function getTSConfig(dtName: string): {} {
    return {
        compilerOptions: {
            module: "commonjs",
            lib: ["es6"],
            noImplicitAny: true,
            noImplicitThis: true,
            strictFunctionTypes: true,
            strictNullChecks: true,
            types: [],
            noEmit: true,
            forceConsistentCasingInFileNames: true,
        },
        files: [
            "index.d.ts",
            `${dtName}-tests.ts`,
        ],
    };
}

async function getPackageJson(dtName: string, packageName: string): Promise<{}> {
    let version = "x.x";
    let project = "https://github.com/baz/foo " +
        "(Does not have to be to GitHub, " +
        "but prefer linking to a source code repository rather than to a project website.)";
    try {
        const reg: Registry = JSON.parse(await loadString(`https://registry.npmjs.org/${packageName}`));
        const { latest } = reg["dist-tags"];
        const { homepage } = reg.versions[latest];

        version = latest.split(".").slice(0, 2).join("."); // Just major.minor
        if (homepage !== undefined) project = homepage;
    } catch (e) {
        console.warn(`Warning: Could not retrieve version/homepage information: ${e.message}`);
    }

    let authorName = 'My Self';
    try {
        const globalGitConfig = parseGitConfig.sync({ cwd: homedir(), path: '.gitconfig' });
        if (globalGitConfig.user && globalGitConfig.user.name) {
            authorName = globalGitConfig.user.name;
        }
    } catch (e) {
        console.warn(`Warning: Could not retrieve author name: ${e.message}`);
    }

    let authorUserName = 'me';
    try {
        const repoGitConfig = parseGitConfig.sync({ path: joinPaths('.git', 'config') });
        if (repoGitConfig['remote "origin"'] && repoGitConfig['remote "origin"'].url) {
            const url = parseUrl(repoGitConfig['remote "origin"'].url);
            if (url.hostname === 'github.com' && url.pathname) {
                authorUserName = url.pathname.split('/')[1] || authorUserName;
            } else if (url.pathname?.startsWith('git@github.com')) {
                authorUserName = url.pathname.split(':')?.[1].split('/')?.[0] || authorUserName;
            }
        }
    } catch (e) {
        console.warn(`Warning: Could not retrieve author's user name: ${e.message}`);
    }

    return {
        private: true,
        name: `@types/${dtName}`,
        version: `${version}.0.9999`,
        projects: [project],
        devDependencies: {
            [`@types/${dtName}`]: "workspace:."
        },
        owners: [
            {
                name: authorName,
                githubUsername: authorUserName
            }
        ]
    };
}

interface Registry {
    name: string;
    description: string;
    "dist-tags": { latest: string };
    versions: { [version: string]: Package };
}

interface Package {
    name: string;
    description: string;
    version: string;
    homepage?: string;
}

function loadString(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        get(url, res => {
            if (res.statusCode !== 200) {
                return reject(
                    new Error(`HTTP Error ${res.statusCode}: ${STATUS_CODES[res.statusCode || 500]} for ${url}`));
            }
            let rawData = "";
            res.on("data", (chunk: any) => rawData += chunk);
            res.on("end", () => resolve(rawData));
        }).on("error", (e: Error) => reject(e));
    });
}
