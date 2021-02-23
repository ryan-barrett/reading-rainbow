"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const services_1 = require("./services");
console.log(app_1.Events);
app_1.app.emitter.on(app_1.Events.DocumentInserted, (...args) => {
    console.log('made it');
    new services_1.EmailService().send('someSubject', document);
});
