"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someDb = void 0;
class SomeDb {
    constructor() {
        console.log('connecting');
    }
    insert(document) {
        // TODO: use couchbase to put document
        console.log(`inserting ${document} into the db`);
    }
    async connect() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('connected');
                resolve(true);
            }, 3000);
        });
    }
}
exports.someDb = new SomeDb();
