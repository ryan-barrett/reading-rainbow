/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class Application {
    private database;
    emitter: EventEmitter;
    constructor(database: any);
    connect(): Promise<any>;
}
