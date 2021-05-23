import express from "express";

import userController from "../controllers/userController.js";

class UserRouter {
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router
      .get("/", userController.getMany)
      .get("/:id", userController.get)
      .post("/", userController.create)
      .put("/:id", userController.update)
      .delete("/:id", userController.delete);
  }
}

export default new UserRouter().router;
