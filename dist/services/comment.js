"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const app_1 = require("../app");
console.log(app_1.Events);
class CommentService {
    constructor(dbConnection, emailService) {
        this.connection = dbConnection;
        this.emailService = emailService;
    }
    async insert(document) {
        await this.connection.insert(document);
        app_1.app.emitter.emit(app_1.Events.DocumentInserted, [document, this]);
        // this.emailService.send('inserted', document);
    }
}
exports.CommentService = CommentService;
