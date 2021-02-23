"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const events_1 = require("events");
class Application {
    constructor(database) {
        this.emitter = new events_1.EventEmitter();
        this.database = database;
    }
    async connect() {
        return this.database.connect();
    }
}
exports.Application = Application;
