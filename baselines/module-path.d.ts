export function basename(path: any, ext: any): any;
export const delimiter: string;
export function dirname(path: any): any;
export function extname(path: any): any;
export function format(pathObject: any): any;
export function isAbsolute(path: any): any;
export function join(...args: any[]): any;
export function normalize(path: any): any;
export function parse(path: any): any;
// Circular reference from path
export const posix: any;
export function relative(from: any, to: any): any;
export function resolve(...args: any[]): any;
export const sep: string;
export function toNamespacedPath(path: any): any;
export namespace win32 {
    function basename(path: any, ext: any): any;
    const delimiter: string;
    function dirname(path: any): any;
    function extname(path: any): any;
    function format(pathObject: any): any;
    function isAbsolute(path: any): any;
    function join(...args: any[]): any;
    function normalize(path: any): any;
    function parse(path: any): any;
    // Circular reference from path.win32
    const posix: any;
    function relative(from: any, to: any): any;
    function resolve(...args: any[]): any;
    const sep: string;
    function toNamespacedPath(path: any): any;
    // Circular reference from path.win32
    const win32: any;
}
