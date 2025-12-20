export class Database {
  
  private static db: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect() {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}.`);
  }

  static getDB(host: string, user: string, password: string): Database {
    if (Database.db) return Database.db;
    Database.db = new Database(host, user, password);
    return Database.db;
  }
  
}

const connect = Database.getDB('localhost', 'Daniel', '123456');
connect.connect()

