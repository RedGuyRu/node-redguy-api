import {Intent, Model, Prediction, Text, TrainJob} from "./NLP/NLP";

export class RedGuyApi {
    constructor(token: string, options?: {});

    Minecraft(): Minecraft;

    Users(): Users;

    Hashes(): Hashes;

    Links(): Links;

    Quotes(): Quotes;

    Logs(): Logs;

    Texts(): Texts;

    NLP(): NLP;
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
    getMysql(hash: string): Promise<string>;
    getNtml(hash: string): Promise<string>;
    getSha1(hash: string): Promise<string>;
    getSha256(hash: string): Promise<string>;
    getSha512(hash: string): Promise<string>;

    indexMD5(value:string): Promise<string>;
    indexMysql(value:string): Promise<string>;
    indexNtml(value:string): Promise<string>;
    indexSha1(value:string): Promise<string>;
    indexSha256(value:string): Promise<string>;
    indexSha512(value:string): Promise<string>;
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
    isSafe(link: string): Promise<{
        domain: string, safe: boolean, source: string
    }>;
}

export class Quotes {
    get(id?: number): Promise<{
        id: number, quote_text: string, source: { id: number, name: string | null, author: { id: number, name: string | null, first_name: string | null, last_name: string | null } | null }[]
    }>;
}

export class Logs {
    write(service: number, level: string, message: string, category?: string, payload?: {}): Promise<void>;
}

export class NLP {
    getModel(model:number): Promise<Model>;
    createModel(name: string): Promise<Model>;
    deleteModel(model: number): Promise<Model>;
    getModels(): Promise<Model[]>;
    createIntent(model: number, name: string): Promise<Intent>;
    deleteIntent(intent: number): Promise<Intent>;
    getIntents(model: number): Promise<Intent[]>;
    addIntentExample(intent: number, example: string): Promise<Text>;
    deleteIntentExample(exampleId: number): Promise<Text>;
    getIntentExamples(intent: number): Promise<Text[]>;
    getIntentExample(exampleId: number): Promise<Text>;
    train(model: number): Promise<TrainJob>;
    getTrainingStatus(job: number): Promise<TrainJob>;
    predict(model: number, text: string): Promise<Prediction>;
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