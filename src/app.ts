import { someDb }                       from './data.sources/some.db';
import { CommentService, EmailService } from './services';
import { EmailRpc }                     from './rpc/email';
import { Application }                  from './Application';

export enum Events {
  DocumentInserted = 'DocumentInserted'
}

export const app = new Application(someDb);

app.emitter.on(Events.DocumentInserted, (args) => {
  const [document, context] = args;
  new EmailService().send('someSubject', document);
});


app.connect().then(() => {
  const emailService = new EmailRpc();
  const commentService = new CommentService(someDb, emailService);

  // TODO: we got an express call
  commentService.insert('a baby boi');
});
