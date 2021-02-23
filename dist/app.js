"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.Events = void 0;
const some_db_1 = require("./data.sources/some.db");
const services_1 = require("./services");
const email_1 = require("./rpc/email");
const Application_1 = require("./Application");
var Events;
(function (Events) {
    Events["DocumentInserted"] = "DocumentInserted";
})(Events = exports.Events || (exports.Events = {}));
exports.app = new Application_1.Application(some_db_1.someDb);
exports.app.emitter.on(Events.DocumentInserted, (args) => {
    const [document, context] = args;
    new services_1.EmailService().send('someSubject', document);
});
exports.app.connect().then(() => {
    const emailService = new email_1.EmailRpc();
    const commentService = new services_1.CommentService(some_db_1.someDb, emailService);
    // TODO: we got an express call
    commentService.insert('a baby boi');
});
