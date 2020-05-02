export = yargs;

declare function yargs(processArgs: any, cwd: any): any;

declare namespace yargs {
    const $0: string;

    const argv: {
        $0: string;
        r: string;
    };

    const parsed: {
        aliases: {
            help: any[];
            version: any[];
        };
        argv: {
            $0: string;
            r: string;
        };
        configuration: {
            "boolean-negation": boolean;
            "camel-case-expansion": boolean;
            "combine-arrays": boolean;
            "dot-notation": boolean;
            "duplicate-arguments-array": boolean;
            "flatten-duplicate-arrays": boolean;
            "greedy-arrays": boolean;
            "halt-at-non-option": boolean;
            "nargs-eats-options": boolean;
            "negation-prefix": string;
            "parse-numbers": boolean;
            "populate--": boolean;
            "set-placeholder-key": boolean;
            "short-option-groups": boolean;
            "strip-aliased": boolean;
            "strip-dashed": boolean;
            "unknown-options-as-args": boolean;
        };
        defaulted: {
        };
        error: any;
        newAliases: {
        };
    };

    function addHelpOpt(p0: any, p1: any): any;

    function addShowHiddenOpt(p0: any, p1: any): any;

    function alias(p0: any, p1: any): any;

    function array(p0: any): any;

    function check(p0: any, p1: any): any;

    function choices(p0: any, p1: any): any;

    function coerce(p0: any, p1: any): any;

    function command(p0: any, p1: any, p2: any, p3: any, p4: any): any;

    function commandDir(p0: any, p1: any): any;

    function completion(p0: any, p1: any, p2: any): any;

    function config(p0: any, p1: any, p2: any): any;

    function conflicts(p0: any, p1: any): any;

    function count(p0: any): any;

    function defaults(p0: any, p1: any, p2: any): any;

    function demand(p0: any, p1: any, p2: any): any;

    function demandCommand(p0: any, p1: any, p2: any, p3: any): any;

    function demandOption(p0: any, p1: any): any;

    function deprecateOption(p0: any, p1: any): any;

    function describe(p0: any, p1: any): any;

    function detectLocale(p0: any): any;

    function env(p0: any): any;

    function epilog(p0: any): any;

    function epilogue(p0: any): any;

    function example(p0: any, p1: any): any;

    function exit(p0: any, p1: any): any;

    function exitProcess(p0: any): any;

    function fail(p0: any): any;

    function getCommandInstance(): any;

    function getCompletion(p0: any, p1: any): any;

    function getContext(): any;

    function getDemandedCommands(): any;

    function getDemandedOptions(): any;

    function getDeprecatedOptions(): any;

    function getDetectLocale(): any;

    function getExitProcess(): any;

    function getGroups(): any;

    function getHandlerFinishCommand(): any;

    function getOptions(): any;

    function getParserConfiguration(): any;

    function getStrict(): any;

    function getStrictCommands(): any;

    function getUsageInstance(): any;

    function getValidationInstance(): any;

    function global(p0: any, p1: any): any;

    function group(p0: any, p1: any): any;

    function help(p0: any, p1: any): any;

    function hide(p0: any): any;

    function implies(p0: any, p1: any): any;

    function locale(p0: any): any;

    function middleware(p0: any): any;

    function nargs(p0: any, p1: any): any;

    function normalize(p0: any): any;

    function number(p0: any): any;

    function onFinishCommand(p0: any): any;

    function option(p0: any, p1: any): any;

    function options(p0: any, p1: any): any;

    function parse(p0: any, p1: any, p2: any): any;

    function parserConfiguration(p0: any): any;

    function pkgConf(p0: any, p1: any): any;

    function positional(p0: any, p1: any): any;

    function recommendCommands(p0: any): any;

    function require(p0: any, p1: any, p2: any): any;

    function required(p0: any, p1: any, p2: any): any;

    function requiresArg(p0: any, p1: any): any;

    function reset(p0: any): any;

    function resetOptions(p0: any): any;

    function scriptName(p0: any): any;

    function showCompletionScript(p0: any, p1: any): any;

    function showHelp(p0: any): any;

    function showHelpOnFail(p0: any, p1: any): any;

    function showHidden(p0: any, p1: any): any;

    function skipValidation(p0: any): any;

    function strict(p0: any): any;

    function strictCommands(p0: any): any;

    function string(p0: any): any;

    function terminalWidth(): any;

    function updateLocale(p0: any): any;

    function updateStrings(p0: any): any;

    function usage(p0: any, p1: any, p2: any, p3: any): any;

    function version(p0: any, p1: any, p2: any): any;

    function wrap(p0: any): any;

}

