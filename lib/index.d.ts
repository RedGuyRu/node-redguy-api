export class RedGuyApi {
    constructor(token: string, options?: {});

    Minecraft(): Minecraft;

    Users(): Users;

    Hashes(): Hashes;

    Links(): Links;

    Quotes(): Quotes;

    Logs(): Logs;
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
    static issue(appId: number, secret: string, scopes: string[], options?: {}): Promise<{ id: number, token: string }>
}

export class Users {
    get(): Promise<{ id: number, login: string }>;
}

export class Hashes {
    getMD5(hash:string): Promise<string>;
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
    get(id?: number): Promise<[{
        id: number, quote_text: string, author: { id: number, name: string|null, first_name: string|null, last_name: string|null}
    }]>;
}

export class Logs {
    write(service: number, level: string, message: string, category?: string, payload?: {}): Promise<void>;
}