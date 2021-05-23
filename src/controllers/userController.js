import userService from "../services/userService.js";

class UserController {
  async get(req, res) {
    try {
      const result = await userService.get(req.params.id);
      return res.status(200).json(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getMany(req, res) {
    try {
      const result = await userService.getMany();
      return res.status(200).json(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(req, res) {
    try {
      const result = await userService.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(req, res) {
    try {
      const result = await userService.update(req.params.id, req.body);
      return res.status(202).json(result);
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(req, res) {
    try {
      const result = await userService.delete(req.params.id);
      return res.status(202).json(result);
    } catch(err) {
      throw new Error(err)
    }
  }
}

export default new UserController();
