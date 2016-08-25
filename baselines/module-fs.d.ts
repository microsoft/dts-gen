export class FileReadStream {
    constructor(path: any, options: any);
    close(cb: any): any;
    destroy(): void;
    open(): void;
}
export class FileWriteStream {
    constructor(path: any, options: any);
    close(cb: any): any;
    destroy(): void;
    destroySoon(chunk: any, encoding: any, cb: any): void;
    open(): void;
}
export class ReadStream {
    constructor(path: any, options: any);
    close(cb: any): any;
    destroy(): void;
    open(): void;
}
export class Stats {
    constructor(dev: any, mode: any, nlink: any, uid: any, gid: any, rdev: any, blksize: any, ino: any, size: any, blocks: any, atim_msec: any, mtim_msec: any, ctim_msec: any, birthtim_msec: any);
    isBlockDevice(): any;
    isCharacterDevice(): any;
    isDirectory(): any;
    isFIFO(): any;
    isFile(): any;
    isSocket(): any;
    isSymbolicLink(): any;
}
export class SyncWriteStream {
    constructor(fd: any, options: any);
    destroy(): any;
    destroySoon(): any;
    end(data: any, arg1: any, arg2: any): void;
    write(data: any, arg1: any, arg2: any): any;
}
export class WriteStream {
    constructor(path: any, options: any);
    close(cb: any): any;
    destroy(): void;
    destroySoon(chunk: any, encoding: any, cb: any): void;
    open(): void;
}
export const F_OK: number;
export const R_OK: number;
export const W_OK: number;
export const X_OK: number;
export function access(path: any, mode: any, callback: any): void;
export function accessSync(path: any, mode: any): void;
export function appendFile(path: any, data: any, options: any, callback_: any, ...args: any[]): void;
export function appendFileSync(path: any, data: any, options: any): void;
export function chmod(path: any, mode: any, callback: any): void;
export function chmodSync(path: any, mode: any): any;
export function chown(path: any, uid: any, gid: any, callback: any): void;
export function chownSync(path: any, uid: any, gid: any): any;
export function close(fd: any, callback: any): void;
export function closeSync(fd: any): any;
export function createReadStream(path: any, options: any): any;
export function createWriteStream(path: any, options: any): any;
export function exists(path: any, callback: any): void;
export function existsSync(path: any): any;
export function fchmod(fd: any, mode: any, callback: any): void;
export function fchmodSync(fd: any, mode: any): any;
export function fchown(fd: any, uid: any, gid: any, callback: any): void;
export function fchownSync(fd: any, uid: any, gid: any): any;
export function fdatasync(fd: any, callback: any): void;
export function fdatasyncSync(fd: any): any;
export function fstat(fd: any, callback: any): void;
export function fstatSync(fd: any): any;
export function fsync(fd: any, callback: any): void;
export function fsyncSync(fd: any): any;
export function ftruncate(fd: any, len: any, callback: any): void;
export function ftruncateSync(fd: any, len: any): any;
export function futimes(fd: any, atime: any, mtime: any, callback: any): void;
export function futimesSync(fd: any, atime: any, mtime: any): void;
export function link(srcpath: any, dstpath: any, callback: any): void;
export function linkSync(srcpath: any, dstpath: any): any;
export function lstat(path: any, callback: any): void;
export function lstatSync(path: any): any;
export function mkdir(path: any, mode: any, callback: any): void;
export function mkdirSync(path: any, mode: any): any;
export function open(path: any, flags: any, mode: any, callback_: any, ...args: any[]): void;
export function openSync(path: any, flags: any, mode: any): any;
export function read(fd: any, buffer: any, offset: any, length: any, position: any, callback: any, ...args: any[]): any;
export function readFile(path: any, options: any, callback_: any, ...args: any[]): void;
export function readFileSync(path: any, options: any): any;
export function readSync(fd: any, buffer: any, offset: any, length: any, position: any, ...args: any[]): any;
export function readdir(path: any, callback: any): void;
export function readdirSync(path: any): any;
export function readlink(path: any, callback: any): void;
export function readlinkSync(path: any): any;
export function realpath(p: any, cache: any, cb: any): any;
export function realpathSync(p: any, cache: any): any;
export function rename(oldPath: any, newPath: any, callback: any): void;
export function renameSync(oldPath: any, newPath: any): any;
export function rmdir(path: any, callback: any): void;
export function rmdirSync(path: any): any;
export function stat(path: any, callback: any): void;
export function statSync(path: any): any;
export function symlink(target: any, path: any, type_: any, callback_: any, ...args: any[]): void;
export function symlinkSync(target: any, path: any, type: any): any;
export function truncate(path: any, len: any, callback: any): any;
export function truncateSync(path: any, len: any): any;
export function unlink(path: any, callback: any): void;
export function unlinkSync(path: any): any;
export function unwatchFile(filename: any, listener: any): void;
export function utimes(path: any, atime: any, mtime: any, callback: any): void;
export function utimesSync(path: any, atime: any, mtime: any): void;
export function watch(filename: any, ...args: any[]): any;
export function watchFile(filename: any, options: any, listener: any): any;
export function write(fd: any, buffer: any, offset: any, length: any, position: any, callback: any): any;
export function writeFile(path: any, data: any, options: any, callback_: any, ...args: any[]): void;
export function writeFileSync(path: any, data: any, options: any): void;
export function writeSync(fd: any, buffer: any, offset: any, length: any, position: any): any;
