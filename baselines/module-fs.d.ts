export class Dirent {
    constructor(...args: any[]);

    isBlockDevice(...args: any[]): void;

    isCharacterDevice(...args: any[]): void;

    isDirectory(...args: any[]): void;

    isFIFO(...args: any[]): void;

    isFile(...args: any[]): void;

    isSocket(...args: any[]): void;

    isSymbolicLink(...args: any[]): void;

}

export class FileReadStream {
    constructor(path: any, options: any);

    close(cb: any): void;

    open(): void;

}

export class FileWriteStream {
    constructor(path: any, options: any);

    close(cb: any): void;

    destroySoon(chunk: any, encoding: any, cb: any): any;

    open(): void;

}

export class ReadStream {
    constructor(path: any, options: any);

    close(cb: any): void;

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

export class WriteStream {
    constructor(path: any, options: any);

    close(cb: any): void;

    destroySoon(chunk: any, encoding: any, cb: any): any;

    open(): void;

}

export const F_OK: number;

export const R_OK: number;

export const W_OK: number;

export const X_OK: number;

export const constants: {
    COPYFILE_EXCL: number;
    COPYFILE_FICLONE: number;
    COPYFILE_FICLONE_FORCE: number;
    F_OK: number;
    O_APPEND: number;
    O_CREAT: number;
    O_DIRECT: number;
    O_DIRECTORY: number;
    O_DSYNC: number;
    O_EXCL: number;
    O_NOATIME: number;
    O_NOCTTY: number;
    O_NOFOLLOW: number;
    O_NONBLOCK: number;
    O_RDONLY: number;
    O_RDWR: number;
    O_SYNC: number;
    O_TRUNC: number;
    O_WRONLY: number;
    R_OK: number;
    S_IFBLK: number;
    S_IFCHR: number;
    S_IFDIR: number;
    S_IFIFO: number;
    S_IFLNK: number;
    S_IFMT: number;
    S_IFREG: number;
    S_IFSOCK: number;
    S_IRGRP: number;
    S_IROTH: number;
    S_IRUSR: number;
    S_IRWXG: number;
    S_IRWXO: number;
    S_IRWXU: number;
    S_IWGRP: number;
    S_IWOTH: number;
    S_IWUSR: number;
    S_IXGRP: number;
    S_IXOTH: number;
    S_IXUSR: number;
    UV_DIRENT_BLOCK: number;
    UV_DIRENT_CHAR: number;
    UV_DIRENT_DIR: number;
    UV_DIRENT_FIFO: number;
    UV_DIRENT_FILE: number;
    UV_DIRENT_LINK: number;
    UV_DIRENT_SOCKET: number;
    UV_DIRENT_UNKNOWN: number;
    UV_FS_COPYFILE_EXCL: number;
    UV_FS_COPYFILE_FICLONE: number;
    UV_FS_COPYFILE_FICLONE_FORCE: number;
    UV_FS_SYMLINK_DIR: number;
    UV_FS_SYMLINK_JUNCTION: number;
    W_OK: number;
    X_OK: number;
};

export const lchmod: any;

export const lchmodSync: any;

export function access(path: any, mode: any, callback: any): void;

export function accessSync(path: any, mode: any): void;

export function appendFile(path: any, data: any, options: any, callback: any): void;

export function appendFileSync(path: any, data: any, options: any): void;

export function chmod(path: any, mode: any, callback: any): void;

export function chmodSync(path: any, mode: any): void;

export function chown(path: any, uid: any, gid: any, callback: any): void;

export function chownSync(path: any, uid: any, gid: any): void;

export function close(fd: any, callback: any): void;

export function closeSync(fd: any): void;

export function copyFile(src: any, dest: any, flags: any, callback: any): void;

export function copyFileSync(src: any, dest: any, flags: any): void;

export function createReadStream(path: any, options: any): any;

export function createWriteStream(path: any, options: any): any;

export function exists(path: any, callback: any): any;

export function existsSync(path: any): any;

export function fchmod(fd: any, mode: any, callback: any): void;

export function fchmodSync(fd: any, mode: any): void;

export function fchown(fd: any, uid: any, gid: any, callback: any): void;

export function fchownSync(fd: any, uid: any, gid: any): void;

export function fdatasync(fd: any, callback: any): void;

export function fdatasyncSync(fd: any): void;

export function fstat(fd: any, options: any, callback: any): void;

export function fstatSync(fd: any, options: any): any;

export function fsync(fd: any, callback: any): void;

export function fsyncSync(fd: any): void;

export function ftruncate(fd: any, len: any, callback: any): void;

export function ftruncateSync(fd: any, len: any): void;

export function futimes(fd: any, atime: any, mtime: any, callback: any): void;

export function futimesSync(fd: any, atime: any, mtime: any): void;

export function lchown(path: any, uid: any, gid: any, callback: any): void;

export function lchownSync(path: any, uid: any, gid: any): void;

export function link(existingPath: any, newPath: any, callback: any): void;

export function linkSync(existingPath: any, newPath: any): any;

export function lstat(path: any, options: any, callback: any): void;

export function lstatSync(path: any, options: any): any;

export function mkdir(path: any, options: any, callback: any): void;

export function mkdirSync(path: any, options: any): void;

export function mkdtemp(prefix: any, options: any, callback: any): void;

export function mkdtempSync(prefix: any, options: any): any;

export function open(path: any, flags: any, mode: any, callback: any, ...args: any[]): void;

export function openSync(path: any, flags: any, mode: any): any;

export function read(fd: any, buffer: any, offset: any, length: any, position: any, callback: any): any;

export function readFile(path: any, options: any, callback: any): void;

export function readFileSync(path: any, options: any): any;

export function readSync(fd: any, buffer: any, offset: any, length: any, position: any): any;

export function readdir(path: any, options: any, callback: any): void;

export function readdirSync(path: any, options: any): any;

export function readlink(path: any, options: any, callback: any): void;

export function readlinkSync(path: any, options: any): any;

export function realpath(p: any, options: any, callback: any): any;

export function realpathSync(p: any, options: any): any;

export function rename(oldPath: any, newPath: any, callback: any): void;

export function renameSync(oldPath: any, newPath: any): void;

export function rmdir(path: any, callback: any): void;

export function rmdirSync(path: any): void;

export function stat(path: any, options: any, callback: any): void;

export function statSync(path: any, options: any): any;

export function symlink(target: any, path: any, type_: any, callback_: any, ...args: any[]): void;

export function symlinkSync(target: any, path: any, type: any): void;

export function truncate(path: any, len: any, callback: any): any;

export function truncateSync(path: any, len: any): any;

export function unlink(path: any, callback: any): void;

export function unlinkSync(path: any): void;

export function unwatchFile(filename: any, listener: any): void;

export function utimes(path: any, atime: any, mtime: any, callback: any): void;

export function utimesSync(path: any, atime: any, mtime: any): void;

export function watch(filename: any, options: any, listener: any): any;

export function watchFile(filename: any, options: any, listener: any): any;

export function write(fd: any, buffer: any, offset: any, length: any, position: any, callback: any): any;

export function writeFile(path: any, data: any, options: any, callback: any): void;

export function writeFileSync(path: any, data: any, options: any): void;

export function writeSync(fd: any, buffer: any, offset: any, length: any, position: any): any;

export namespace promises {
    function access(path: any, mode: any): any;

    function appendFile(path: any, data: any, options: any): any;

    function chmod(path: any, mode: any): any;

    function chown(path: any, uid: any, gid: any): any;

    function copyFile(src: any, dest: any, flags: any): any;

    function lchmod(path: any, mode: any): any;

    function lchown(path: any, uid: any, gid: any): any;

    function link(existingPath: any, newPath: any): any;

    function lstat(path: any, options: any): any;

    function mkdir(path: any, options: any): any;

    function mkdtemp(prefix: any, options: any): any;

    function open(path: any, flags: any, mode: any, ...args: any[]): any;

    function readFile(path: any, options: any): any;

    function readdir(path: any, options: any): any;

    function readlink(path: any, options: any): any;

    function realpath(path: any, options: any): any;

    function rename(oldPath: any, newPath: any): any;

    function rmdir(path: any): any;

    function stat(path: any, options: any): any;

    function symlink(target: any, path: any, type_: any): any;

    function truncate(path: any, len: any): any;

    function unlink(path: any): any;

    function utimes(path: any, atime: any, mtime: any): any;

    function writeFile(path: any, data: any, options: any): any;

}

