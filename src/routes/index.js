import express from "express";

class Router {
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router.use("/details", (req, res) => {
      res.status(200).json({
        version: process.env.npm_package_version,
        author: process.env.npm_package_author_name,
        email: process.env.npm_package_author_email,
        repository_url: process.env.npm_package_repository_url,
      });
    });
  }
}

export default new Router().router;
