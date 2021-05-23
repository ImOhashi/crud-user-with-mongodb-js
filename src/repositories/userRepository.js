import BaseRepository from "./baseRepository.js";
import UserModel from "../models/User.js";

class UserRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(UserModel);
  }
}

export default new UserRepository();
