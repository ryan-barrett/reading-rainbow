export class EmailRpc {
  constructor() {
  }

  public send(subject, body) {
    // TODO: make an http call to external "emailService"
    console.log('MAKING HTTP CALL', subject, body);
  }
}
