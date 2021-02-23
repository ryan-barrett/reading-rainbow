import { EventEmitter } from 'events';

export class Application {
  private database;
  public emitter = new EventEmitter();

  constructor(database) {
    this.database = database;
  }

  public async connect() {
    return this.database.connect();
  }
}
