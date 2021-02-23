import { app, Events } from '../app';

export class CommentService {
  private connection;
  protected emailService;

  constructor(dbConnection, emailService) {
    this.connection = dbConnection;
    this.emailService = emailService;
  }

  public async insert(document: any) {
    await this.connection.insert(document);
    app.emitter.emit(Events.DocumentInserted, [document, this]);
  }
}
