export class RedGuyApi {
    constructor(token: string, options?: {v?:string});

    Math(): Math;
    Store(): Store;
    Users(): Users;
    Teams(): Teams;
    Minecraft(): Minecraft;
}


export class Math {
    constructor(options: {token: string, v: string});

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


export class Store {
    constructor(options: {token: string, v: string});

    Json(): Json;
}

export class Json {
    constructor(options: {token: string, v: string});

    get(bukkit: string): Promise<object>;
    set(bukkit: string, data: object): Promise<{bukkitName: string, length: number}>;
}


export class Users {
    constructor(options: {token: string, v: string});

    get(id: number, additional: Additional): Promise<{id: number, first_name?: string, last_name?: string, mine_nick?: string, avatar_url?: string, background_url?: string}>;
    Balance(): Balance;
}

export class Additional {
    constructor();

    mine_nick(): Additional
    avatar(): Additional
    background(): Additional
    getResult(): Additional
}

export class Balance {
    constructor(options: {token: string, v: string});

    get(id: number): Promise<number>;
}

export class Teams {
    constructor(options: {token: string, v: string});

    get(id: string ,socNet: string): Promise<[{id: number, companyId: number, companyName: string, nick: string, position: string}]>
}


export class Minecraft {
    constructor(options: {token: string, v: string})

    serverinfo(ip: string,port?: number, type?: string): Promise<{
        description?: {
            extra: [{
                color: string,
                text: string
            }],
            text: string
        },
        modinfo?: {
            modList: [],
            type: string
        },
        players?: {
            max: number,
            online: number
        },
        version?: {
            name: string,
            protocol: string
        }
    }>
}