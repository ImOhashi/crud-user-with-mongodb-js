import userService from "../services/userService.js";

class UserController {
  async create(req, res) {
    try {
      const result = await userService.create(req.body);
      return res.status(200).json(result);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new UserController();
