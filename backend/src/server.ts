import express from 'express';
import routes from './routes';
import path from 'path';

class App {
  server: express.Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(express.static(path.join(__dirname, 'public')))
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;