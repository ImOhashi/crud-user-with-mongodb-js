class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async getUser(userId) {
    return this._userRepository.get(userId);
  }

  async getUsers(userIds) {
    return this._userRepository.getMany(userIds);
  }

  async createUser(user) {
    return this._userRepository.create(user);
  }

  async updateUser(userId, user) {
    return this._userRepository.update(userId, user);
  }

  async deleteUser(userId) {
    return this._userRepository.delete(userId);
  }
}
