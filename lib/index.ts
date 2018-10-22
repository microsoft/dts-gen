import * as ts from 'typescript';

export function generateModuleDeclarationFile(nameHint: string, root: any): string {
	return ts.generateTypesForModule(nameHint, root, ts.getDefaultFormatCodeSettings("\r\n"));
}

export function generateIdentifierDeclarationFile(name: string, value: any): string {
	return ts.generateTypesForGlobal(name, value, ts.getDefaultFormatCodeSettings("\r\n"));
}
