import * as guess from './';
import * as yargs from 'yargs';
import * as fs from 'fs';
import * as path from 'path';

interface Options {
	module?: string;
	expression?: string;
	identifier?: string;

	name?: string;

	file?: string | boolean;
	dt?: string | boolean;
	stdout?: boolean;
	overwrite?: boolean;
}

const args: Options = yargs
	.alias('m', 'module')
	.alias('i', 'identifier')
	.alias('e', 'expression')
	.alias('n', 'name')
	.alias('f', 'file')
	.alias('d', 'dt')
	.alias('s', 'stdout')
	.alias('o', 'overwrite')
	.argv;

class ArgsError extends Error {
	constructor(public argsError: string) {
		super();
	}
}

const opts: Options = yargs.argv;

let result: string | undefined;
let name: string = 'dts_gen_expr';
try {
	if (+!!args.dt + +!!args.file + +!!args.stdout > 1) {
		throw new ArgsError('Cannot specify more than one output mode');
	}
	if (+!!args.identifier + +!!args.expression + +!!args.module !== 1) {
		throw new ArgsError('Must specify exactly one input');
	}
	if (typeof args.name === 'boolean') throw new ArgsError('Must specify a value for "-name"');
	if (typeof args.identifier === 'boolean') throw new ArgsError('Must specify a value for "-identifier"');
	if (typeof args.module === 'boolean') throw new ArgsError('Must specify a value for "-module"');
	if (args.overwrite !== undefined && args.overwrite !== true) throw new ArgsError('-overwrite does not accept an argument');

	if (args.module) {
		if (args.name) throw new ArgsError('Cannot use -name with -module');
		name = args.module;
		result = guess.generateModuleDeclarationFile(args.module, require(args.module));
	} else if (args.expression) {
		if (args.name) throw new ArgsError('Cannot use -name with -expression');
		name = args.name || name;
		result = guess.generateIdentifierDeclarationFile(name, eval(args.expression));
	} else if (args.identifier) {
		if (args.module || args.expression) throw new ArgsError('Cannot specify more than one input');
		name = args.identifier;
		result = guess.generateIdentifierDeclarationFile(args.identifier, eval(args.identifier));
	} else {
		throw new Error('Internal error, please log a bug with the commandline you specified')
	}

	if (args.dt) {
		writeDefinitelyTyped(result, name);
	} else if (args.stdout) {
		console.log(result);
	} else {
		let filename: string;
		if (typeof args.file === 'boolean' || args.file === undefined) {
			filename = name + '.d.ts';
		} else {
			filename = args.file;
		}
		if (!filename.endsWith('.d.ts')) {
			filename = filename + '.d.ts';
		}

		if (!args.overwrite && fs.existsSync(filename)) {
			console.error(`File ${filename} already exists and -overwrite was not specified; exiting.`);
			process.exit(2);
		}
		fs.writeFileSync(filename, prependOurHeader(result), 'utf-8');
		console.log(`Wrote ${result.split(/\r\n|\r|\n/).length} lines to ${filename}.`);
	}
} catch (e) {
	if (e instanceof ArgsError) {
		console.error('Invalid arguments: ' + e.argsError);
		console.log('');
		printHelp();
		process.exit(1);
	} else {
		console.log('Unexpected crash! Please log a bug with the commandline you specified.');
		throw e;
	}
}

function printHelp() {
	console.log('Usage: tsguess input [settings] [output]');
	console.log('');
	console.log('Input Options:');
	console.log('  -m[odule] fs            The "fs" node module (must be installed)');
	console.log('  -i[dentifier] Math      The global variable "Math"');
	console.log('  -e[xpression] "new C()" The expression "new C()"');
	console.log('');
	console.log('Settings:');
	console.log('  -n[ame] n               The name to emit when generating for an expression');
	console.log('');
	console.log('Output Options:');
	console.log('  -f[ile] [foo.d.ts]       Write to foo.d.ts (the default)');
	console.log('  -d[t] [dirName]          Create a folder suitable for DefinitelyTyped');
	console.log('  -s[tdout]                Write to stdout');
	console.log('  -o[verwrite]             Allow overwriting files');
	console.log('');
	console.log('Example: tsguess -m fs');
}

function writeDefinitelyTyped(result: string, folderName: string) {
	const testName = `${folderName}-tests.ts`;

	// Check for overwrite
	const filesToCheck = ['tsconfig.json', 'index.d.ts', testName].map(f => path.join(folderName, f));;
	if (!args.overwrite) {
		if (fs.existsSync(folderName)) {
			console.log(`Folder ${folderName} already exists and -overwrite was not specified; exiting.`);
			process.exit(2);
		}
		for (const f of filesToCheck) {
			if (fs.existsSync(f)) {
				console.log(`File ${f} already exists and -overwrite was not specified; exiting.`);
				process.exit(2);
			}
		}
	}

	if (!fs.existsSync(folderName)) {
		fs.mkdirSync(folderName);
	}

	fs.writeFileSync(path.join(folderName, 'tsconfig.json'), getTsConfigForDefinitelyTyped(testName), 'utf-8');
	fs.writeFileSync(path.join(folderName, 'index.d.ts'), prependDefinitelyTypedHeader(result), 'utf-8');
	fs.writeFileSync(path.join(folderName, testName), '/* Add tests for your definition file here */', 'utf-8');
}

function getTsConfigForDefinitelyTyped(testName: string) {
	return (
		`{
    "files": [
        "index.d.ts",
        "${testName}"
    ],
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": true,
        "strictNullChecks": false,
        "baseUrl": "../",
        "typeRoots": [
            "../"
        ],
        "types": [],
        "noEmit": true,
        "forceConsistentCasingInFileNames": true
    }
}`
	);
}

function prependOurHeader(result: string) {
	return `/** Declaration file generated by dts-gen */\r\n\r\n` + result;
}

function prependDefinitelyTypedHeader(name: string): string {
	return [
		`// Type definitions for INSERT PROJECT NAME HERE`,
		`// Project: http://example.com/THE_PROJECT_WEBSITE`,
		`// Definitions by: Your Name <YOUR_GITHUB_PROFILE_OR_EMAIL>`,
		`// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`,
		``,
		`// Definition file started by dts-gen`,
		``,
		result
	].join('\r\n');
}
