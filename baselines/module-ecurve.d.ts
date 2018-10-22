export class Curve {
    constructor(p: any, a: any, b: any, Gx: any, Gy: any, n: any, h: any);
    p: any;
    a: any;
    b: any;
    G: any;
    n: any;
    h: any;
    infinity: any;
    pOverFour: any;
    pLength: any;
    isInfinity(Q: any): any;
    isOnCurve(Q: any): any;
    pointFromX(isOdd: any, x: any): any;
    validate(Q: any): any;
}
export class Point {
    static decodeFrom(curve: any, buffer: any): any;
    static fromAffine(curve: any, x: any, y: any): any;
    constructor(curve: any, x: any, y: any, z: any);
    curve: any;
    x: any;
    y: any;
    z: any;
    compressed: any;
    add(b: any): any;
    equals(other: any): any;
    getEncoded(compressed: any): any;
    multiply(k: any): any;
    multiplyTwo(j: any, x: any, k: any): any;
    negate(): any;
    twice(): any;
}
export function getCurveByName(name: any): any;
