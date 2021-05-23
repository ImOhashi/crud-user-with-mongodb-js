import express from "express";

import router from "./routes/index.js";
import { morganMiddleware } from "./utils/index.js";

class App {

  /**
   * @constructor
   */
  constructor() {
    this.app = express();

    this.middlewares();
  }

  /**
   * Set all middlewares of server
   * 
   * @memberof App
   * @method middlewares
   * @returns {void}
   */
  middlewares() {
    this.app.use(morganMiddleware);
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: false,
      })
    );
    this.app.use(router);
  }
}

export default new App().app;
