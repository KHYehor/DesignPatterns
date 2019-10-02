'use strict';

abstract class Builder {
  public abstract async build(be: string, db: string, fe: string): Promise<any>;
  public abstract async start_backend(name: string): Promise<any>;
  public abstract async connect_database(name: string): Promise<any>;
  public abstract async share_frontend(name: string): Promise<any>;
  public abstract reset(): void;
}

class App {
  private _backend: string = '';
  get backend(): string { return this._backend; }
  set backend(name: string) { this._backend = name };

  private _database: string = '';
  get database(): string { return this._database; }
  set database(name: string) { this._database = name };

  private _frontend: string = '';
  get frontend(): string { return this._frontend; }
  set frontend(name: string) { this._frontend = name };

  public constructor() { };
}

class AppBuilder implements Builder {
  private instance: App;
  
  public constructor() { 
    this.instance = new App();
  };

  public async build(be: string, db: string, fe: string): Promise<any> {
    return Promise.all([
      this.start_backend(be),
      this.connect_database(db),
      this.share_frontend(fe)
    ]);
  }

  public async start_backend(name: string): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.instance.backend = name;
        console.log('Backend started...');
        res();
      }, 1000);
    });
  }

  public async connect_database(name: string): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.instance.database = name;
        console.log('Database started...');
        res();
      }, 2000);
    });
  }
  public async share_frontend(name: string): Promise<any> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.instance.frontend = name;
        console.log('Frontend started...');
        res();
      }, 1500);
    });
  }

  public reset(): void { this.instance = new App(); }

  public info(): void {
    console.log(`Current Backend: ${this.instance.backend};`);
    console.log(`Current FrontEnd: ${this.instance.frontend};`);
    console.log(`Current DataBase: ${this.instance.database};`);
  }
}

class Director {
  public constructor() { };

  public async build(builder: AppBuilder) {
    return builder.build('Node.js', 'Mongo.db', 'React.js')
  };
}

const Dir = new Director();
const AppB = new AppBuilder();
Dir.build(AppB)
  .then(() => AppB.info())
  .catch(console.error);
