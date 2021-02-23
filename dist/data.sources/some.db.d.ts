declare class SomeDb {
    constructor();
    insert(document: any): void;
    connect(): Promise<unknown>;
}
export declare const someDb: SomeDb;
export {};
