import mongoose from "mongoose";

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
  async get(_id) {
    return this.repository.get({_id: mongoose.Types.ObjectId(_id)});
  }

  /**
   * Get an array of documents
   *
   * @memberof BaseRepository
   * @param {[string]} ids
   * @returns {[object]}
   */
  async getMany() {
    return this.repository.getMany();
  }

  /**
   * Create document
   *
   * @memberof BaseRepository
   * @param {object} model
   * @returns {object}
   */
  async create(model) {
    return this.repository.create(model);
  }

  /**
   * Update document
   *
   * @memberof BaseRepository
   * @param {string} id
   * @param {object} model
   * @returns {object}
   */
  async update(id, model) {
    return this.repository.update(id, model);
  }

  /**
   * Delete document
   *
   * @memberof BaseRepository
   * @param {string} id
   * @returns {object}
   */
  async delete(id) {
    return this.repository.delete(id);
  }
}
