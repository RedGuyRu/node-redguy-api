export class RedGuyApi {
    constructor(token: string, options?: {v?:string});

    Math(): Math;
    Store(): Store;
    Users(): Users;
    Event(): Event;
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


export class Event {
    constructor(options: {token: string, v: string});

    getStats(nick: string): Promise<{coins: number, wins: number, tokens: number, kills: number}>
    Coins(): Coins;
    Tokens(): Tokens;
    Wins(): Wins;
    Kills(): Kills;
}

export class Coins {
    constructor(options: {token: string, v: string});

    get(nick: string): Promise<number>;

    add(nick: string, coins: number): Promise<{oldCoins: number, newCoins: number}>

    set(nick: string, coins: number): Promise<{oldCoins: number, newCoins: number}>
}

export class Tokens {
    constructor(options: {token: string, v: string});

    get(nick: string): Promise<number>;

    add(nick: string, tokens: number): Promise<{oldTokens: number, newTokens: number}>

    set(nick: string, tokens: number): Promise<{oldTokens: number, newTokens: number}>
}

export class Wins {
    constructor(options: {token: string, v: string});

    get(nick: string): Promise<number>;

    add(nick: string, wins: number): Promise<{oldWins: number, newWins: number}>

    set(nick: string, wins: number): Promise<{oldWins: number, newWins: number}>
}

export class Kills {
    constructor(options: {token: string, v: string});

    get(nick: string): Promise<number>;

    add(nick: string, kills: number): Promise<{oldKills: number, newKills: number}>

    set(nick: string, kills: number): Promise<{oldKills: number, newKills: number}>
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