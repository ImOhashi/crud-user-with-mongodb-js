import express from "express";

import userController from "../controllers/userController.js";

class UserRouter {
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router.post("/", userController.create);
  }
}

export default new UserRouter().router;
