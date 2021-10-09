export class RedGuyApi {
    constructor(token: string, options?: { v?: string });

    Minecraft(): Minecraft;
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