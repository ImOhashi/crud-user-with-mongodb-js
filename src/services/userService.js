import BaseService from "./baseService.js";
import UserRepository from "./../repositories/userRepository.js";

class UserService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(UserRepository);
  }
}

export default new UserService();
