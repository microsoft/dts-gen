export class Curve {
    constructor(p: any, a: any, b: any, Gx: any, Gy: any, n: any, h: any);

    isInfinity(Q: any): any;

    isOnCurve(Q: any): any;

    pointFromX(isOdd: any, x: any): any;

    validate(Q: any): any;

}

export class Point {
    constructor(curve: any, x: any, y: any, z: any);

    add(b: any): any;

    equals(other: any): any;

    getEncoded(compressed: any): any;

    multiply(k: any): any;

    multiplyTwo(j: any, x: any, k: any): any;

    negate(): any;

    toString(): any;

    twice(): any;

    static decodeFrom(curve: any, buffer: any): any;

    static fromAffine(curve: any, x: any, y: any): any;

}

export function getCurveByName(name: any): any;

