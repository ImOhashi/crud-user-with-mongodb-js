import express from "express";

import userRouter from "./userRouter.js";

class Router {
  /**
   * @constructor
   */
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  /**
   * Set all routes
   *
   * @memberof Router
   * @method setRoutes
   * @return {void}
   */
  setRoutes() {
    this.router
      .use("/details", (req, res) => {
        res.status(200).json({
          version: process.env.npm_package_version,
          author: process.env.npm_package_author_name,
          email: process.env.npm_package_author_email,
          repository_url: process.env.npm_package_repository_url,
        });
      })
      .use("/users", userRouter);
  }
}

export default new Router().router;
