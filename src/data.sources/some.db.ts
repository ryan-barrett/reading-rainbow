class SomeDb {
  constructor() {
    console.log('connecting');
  }

  public insert(document: any) {
    // TODO: use couchbase to put document
    console.log(`inserting ${document} into the db`);
  }

  public async connect() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('connected');
        resolve(true);
      }, 3000);
    });
  }
}

export const someDb = new SomeDb();
