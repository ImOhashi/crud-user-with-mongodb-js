import BaseService from "./baseService.js";
import UserRepository from "./../repositories/userRepository.js";

export default class UserService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(UserRepository);
  }
}
