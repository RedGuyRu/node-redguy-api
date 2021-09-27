export class RedGuyApi {
    constructor(token: string, options?: { v?: string });

    Math(): Math;

    Minecraft(): Minecraft;
}


export class Math {
    constructor(options: { token: string, v: string });

    get(level: string, number: number): Promise<BigInteger>;

    max(level: string): Promise<number>;
}

export class NumberLevels {
    static get factorial(): string;

    static get superFactorial(): string;

    static get hyperFactorial(): string;

    static get megaFactorial(): string;

    static get gigaFactorial(): string;

    static get sixFactorial(): string;

    static get sevenFactorial(): string;

    static get eighthFactorial(): string;

    static get nineFactorial(): string;

    static get tenFactorial(): string;
}

export class Minecraft {
    constructor(options: { token: string, v: string })

    serverinfo(host: string): Promise<{
        host: string,
        description: string,
        mods: [{ name: string, version: string }],
        players: {
            max: number,
            online: number
        }
    }>
}