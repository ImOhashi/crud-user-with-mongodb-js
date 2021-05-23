export default class BaseService {
  /**
   * @constructor
   * @param {Repository} repository 
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Get document
   * 
   * @memberof BaseRepository
   * @param {string} id
   * @returns {object}
   */
  async get(id) {
    return this.repository.get(id);
  }

  /**
   * Get an array of documents
   * 
   * @memberof BaseRepository
   * @param {[string]} ids 
   * @returns {[object]}
   */
  async getMany(ids) {
    return this.repository.getMany(ids);
  }

  /**
   * Create document
   * 
   * @memberof BaseRepository
   * @param {object} user 
   * @returns {object}
   */
  async create(user) {
    return this.repository.create(user);
  }

  /**
   * Update document
   * 
   * @memberof BaseRepository
   * @param {string} userId 
   * @param {object} user 
   * @returns {object}
   */
  async update(userId, user) {
    return this.repository.update(userId, user);
  }

  /**
   * Delete document
   * 
   * @memberof BaseRepository
   * @param {string} userId 
   * @returns {object}
   */
  async delete(userId) {
    return this.repository.delete(userId);
  }
}
