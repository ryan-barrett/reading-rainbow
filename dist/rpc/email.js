"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRpc = void 0;
class EmailRpc {
    constructor() {
    }
    send(subject, body) {
        // TODO: make an http call to external "emailService"
        console.log('MAKING HTTP CALL', subject, body);
    }
}
exports.EmailRpc = EmailRpc;
