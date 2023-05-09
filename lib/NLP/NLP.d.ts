export class Model {
    /**
     * Model id
     */
    id: number;
    /**
     * Hash of the model
     */
    version: string | null;
    /**
     * Training date of current version
     */
    train_date: string | null;
    /**
     * Count of intents in model
     */
    intents: number;
    /**
     * Current status of model
     */
    status: "training" | "working" | "waiting" | "empty";
    /**
     * Model name
     */
    name: string;
    /**
     * Model owner
     */
    owner: number;
}

export class Intent {
    /**
     * Intent id
     */
    id: number;
    /**
     * Model id
     */
    model: number;
    /**
     * Intent name
     */
    name: string;
    /**
     * Intent display name
     */
    displayName: string | null;
}

export class Text {
    /**
     * Text id
     */
    id: number;
    /**
     * Intent id
     */
    intent: number;
    /**
     * Text content
     */
    text: string;
}

export class TrainJob {
    /**
     * Job id
     */
    job: number;
    /**
     * Is job waiting for training
     */
    waiting: boolean;
    /**
     * Is job training
     */
    active: boolean;
    /**
     * Is job finished
     */
    ready: boolean;
}

export class Prediction {
    locale: string;
    utterance: string;
    languageGuessed: boolean;
    localeIso2: string;
    language: string;
    nluAnswer?:NluAnswer | null;
    explanation?:Explanation[] | null;
    classifications: Classification[];
    intent: string;
    score: number;
    domain: string;
    entities: any[];
    sourceEntities: any[];
    answers: any[];
    actions: any[];
    sentiment: Sentiment;
}

export class Explanation {
    token: string;
    stem: string;
    weight: number;
}

export class NluAnswer {
    classifications: Classification[];
}

export class Classification {
    intent: string;
    score: number;
}

export class Sentiment {
    score: number;
    numWords: number;
    numHits: number;
    average: number;
    type: string;
    locale: string;
    vote: string;
}