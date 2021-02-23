"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const someDb_1 = require("./data.sources/someDb");
const comment_1 = require("./services/comment");
const email_1 = require("./rpc/email");
const emailService = new email_1.EmailRpc();
const commentService = new comment_1.CommentService(someDb_1.connection, emailService);
// TODO: we got an express call
commentService.insert('a baby boi');
