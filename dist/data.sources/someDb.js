"use strict";
// import couchbase
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
class SomeDb {
    constructor() {
        console.log('connecting');
    }
    insert(document) {
        // TODO: use couchbase to put document
        console.log(`inserting ${document} into the db`);
    }
}
exports.connection = new SomeDb();
