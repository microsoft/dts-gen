[![npm version](https://badge.fury.io/js/dts-gen.svg)](https://badge.fury.io/js/dts-gen)

# dts-gen: A TypeScript Definition File Generator

`dts-gen` is a tool that generates TypeScript definition files (.d.ts) from *any* JavaScript object.

`dts-gen` works differently from TypeScript, Flowtype, Tern, etc. because it simply examines the objects as they appear at runtime, rather than needing the source code that creates the object.
This means no matter how the object was written, anything, including native objects, can be given an inferred shape.

This trade-off comes with a price -- you'll see a lot of `any`s in function parameters and return types.
You may also see properties that are not intended for public use.
`dts-gen` is meant to be a *starting point* for writing a high-quality definition file.

# How do I use it?

`dts-gen` can operate on NPM modules, arbitrary identifiers, or arbitrary expressions.
If you are generating a .d.ts file for a node module, the best way is to use the `dts-gen` commandline tool.

Some libraries only load in browsers; for this you can use the console-launched pop-up window.

# Command-line

Let's generate a .d.ts file for the `yargs` NPM module.
This already has a handwritten definition file, but let's pretend that doesn't exist yet.
You'll need to first install `dts-gen` if you haven't already, then globally install the module you're generating for.

```sh
> npm install -g dts-gen
> npm install -g yargs
> dts-gen -m yargs
```
This will generate a file `yargs.d.ts`.
Here's what it looks like
```ts
export = yargs;
declare function yargs(processArgs: any, cwd: any): any;
declare namespace yargs {
    const $0: string;
    const argv: {
        $0: string;
// ... more
```
As you can see, `dts-gen` produced the correct module shape for the node module.
The function arguments got their correct names and arity, though it didn't detect that `cwd` is optional.
The parameter types are `any`, which is fine, and we can read the `yargs` documentation to find out what types it actually accepts.

## Command-line options

Here's the commandline help you'll see when running `dts-gen`:
```
Usage: dts-gen input [settings] [output]

Input Options:
  -m[odule] fs            The "fs" node module (must be installed)
  -i[dentifier] Math      The global variable "Math"
  -e[xpression] "new C()" The expression "new C()"
  -t[emplate] module      Name of a template. Templates are:
                          global-modifying-module, global-plugin, global, module-class, module-function, module-plugin, module

Settings:
  -n[ame] n               The name to emit when generating for an expression

Output Options:
  -f[ile] [filename.d.ts]  Write to a file (default)
  -d[t] [dirName]          Create a folder suitable for DefinitelyTyped
  -s[tdout]                Write to stdout
  -o[verwrite]             Allow overwriting files

Example: dts-gen -m fs
```

### Input Options

Only one of the following inputs may be specified.

#### `--module` (`-m`)

Example: `--module express`

The name of the node module to generate a file for.
This string will be `require`'d at runtime, so the normal nodejs rules about the module needing to be installed still apply.

#### `--identifier` (`-i`)

Example: `--identifier Math`

A bare identifier to generate a file for.
Certain dotted names will work here.
This string will be `eval`'d to get the value.

#### `--expression` (`-e`)

Example: `--expression "new Date()"`

An arbitrary expression to generate a file for.
By default, this will be assigned to the name `dts_gen_expr` and generated as `dts_gen_expr.d.ts`.
You can use the `-name` parameter to change this.

#### `--expression-file`

Example: `--expression-file "expressions.js"`
##### expressions.js
```js
var fs = require('fs');
fs.lstatSync('.');
```

A file containing arbitrary expression to generate a file for.
The file will be named `${basename}.d.ts`, i.e. `expressions.d.ts`.
The contents of the file will be `eval`'d, and the last statement in the file will be the value used.

#### `--name` (`-n`)

Example: `--name MyVar`

When using `--expression`, the `--name` parameter changes the global name given to the inferred result.

### Output Options

At most one output option may be specified.
If no output option is given, the default is `--file`.

#### `--file` (`-f`) 

Example: `--file my.d.ts`

Sets the filename to write to.
If no filename is specified, the name will be inferred from the module or identifier name.

#### `--stdout` (`-s`)

Writes the output to `stdout`

#### `--dt` (`-d`)

Example: `--dt` or `--dt myFolder`

Creates a folder suitable for submitting to DefinitelyTyped.
Before submitting, you'll need to write some tests and fill in the header comments in `index.d.ts`.
You may change the name of the folder by specifing an argument, otherwise the folder name will be inferred.

#### `--overwrite` (`-o`)

By default, `dts-gen` will not overwrite existing files on disk.
Specify `-o` to allow overwriting of files.

# Browser

# Note: Browser support in progress! This is not quite ready yet

To generate a definition file for a browser-only module, we'll use the in-browser popup window.
This works by injecting the `dts-gen` script into the current page by adding it as a `script` tag.

Run this in your browser's developer console:
```js
var s = document.createElement('script'); s.src = 'https://unpkg.com/dts-gen/bin/browser-bundle.js'; document.body.appendChild(s);
```
If this script is blocked by the same-origin content policy of the page, go to http://microsoft.githubs.io/dts-gen/manual.html
and copy the script text shown on the page.
Paste this into the browser console.

When the window appears, enter an identifier or expression in the textbox and click "Generate".

TODO: Screenshot

You can then copy and paste the contents of the textarea into a definition file.
