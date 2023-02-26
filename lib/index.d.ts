export class RedGuyApi {
    constructor(token: string, options?: {});

    Minecraft(): Minecraft;

    Users(): Users;

    Hashes(): Hashes;

    Links(): Links;

    Quotes(): Quotes;

    Logs(): Logs;

    Texts(): Texts;
}

export class Minecraft {
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

export class Token {
    static issue(appId: number, secret: string, scopes: string[], options?: { name?: string }): Promise<{ id: number, token: string }>
}

export class Users {
    get(): Promise<{ id: number, login: string }>;
}

export class Hashes {
    getMD5(hash: string): Promise<string>;
}

export class News {
    static get(tag?: string): Promise<[{
        id: number,
        name: string,
        content: string,
        author: number,
        tags: string[],
        published: string
    }]>;
}

export class Links {
    isSafe(link: string): Promise<[{
        domain: string, safe: boolean, source: string
    }]>;
}

export class Quotes {
    get(id?: number): Promise<{
        id: number, quote_text: string, source: { id: number, name: string | null, author: { id: number, name: string | null, first_name: string | null, last_name: string | null } | null }[]
    }>;
}

export class Logs {
    write(service: number, level: string, message: string, category?: string, payload?: {}): Promise<void>;
}

export class Texts {
    parse(text: string, lang?: string): Promise<[{
        body: string, start: number, end: number, latent: boolean
        dim: "email" | "phone-number",
        value: { value: string, type: string }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "amount-of-money" | "distance" | "temperature" | "volume",
        value: { value: number, type: string, unit: string }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "credit-card-number",
        value: { value: string, issuer: string }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "duration",
        value: {
            value: number, type: string, unit: string, normalized: { value: number, unit: string }
            year?: number, month?: number, week?: number, day?: number, hour?: number, minute?: number, second?: number
        }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "numeral" | "ordinal",
        value: { value: number, type: string }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "quantity",
        value: { value: number, type: string, product: string, unit: string }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "time",
        value: {
            value: string, type: string, grain: string,
            values: [{
                value: string, type: string, grain: string,
            }]
        }
    } | {
        body: string, start: number, end: number, latent: boolean
        dim: "url",
        value: {
            value: string, type: string, domain: string
        }
    }]>;
}