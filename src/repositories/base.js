export default class BaseRepository {
  /**
   * @constructor
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
  async getMany(ids) {
    return this.model.find({
      _id: {
        $in: ids,
      },
    });
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
   * @returns 
   */
  async updateUser(id, model) {
    return this.model.findByIdAndUpdate(id, model);
  }

  /**
   * Delete a document
   * 
   * @memberof BaseRepository
   * @param {string} id 
   * @returns {object}
   */
  async deleteUser(id) {
    return this.model.findByIdAndDelete({ _id: id });
  }
}
