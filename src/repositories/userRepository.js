import BaseRepository from "./base.js";
import UserModel from "../models/User";

export default class UserRepository extends BaseRepository {
  /**
   * @constructor
   */
  constructor() {
    super(UserModel);
  }
}
