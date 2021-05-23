export default class BaseRepository {
  /**
   * @constructor
   * @param {Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * Get documents
   *
   * @memberof BaseRepository
   * @param {string} id
   * @returns {object}
   */
  async get(id) {
    return this.model.findOne({
      _id: id,
    });
  }

  /**
   * get an array of documents
   *
   * @memberof BaseRepository
   * @param {[string]} ids
   * @returns {[object]}
   */
  async getMany() {
    return this.model.find();
  }

  /**
   * Create a document
   * 
   * @memberof BaseRepository
   * @param {object} model 
   * @returns {object}
   */
  async create(model) {
    return this.model.create(model);
  }

  /**
   * Update a document
   * 
   * @memberof BaseRepository
   * @param {string} id 
   * @param {object} model 
   * @returns {object}
   */
  async update(id, model) {
    return this.model.findOneAndUpdate(id, model);
  }

  /**
   * Delete a document
   * 
   * @memberof BaseRepository
   * @param {string} id 
   * @returns {object}
   */
  async delete(id) {
    return this.model.findOneAndDelete({ _id: id });
  }
}
