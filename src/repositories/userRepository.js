import BaseRepository from "./baseRepository.js";
import UserModel from "../models/User.js";

export default class UserRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(UserModel);
  }
}
