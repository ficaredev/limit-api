export class LimitService {
  /** @type {import('#app/Repositories/LimitRepository').LimitRepository} */
  #limitRepository

  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor(limitRepository) {
    this.#limitRepository = limitRepository
  }

  /**
   * Index method
   *
   */
  async index() {
    return this.#limitRepository.index()
  }

  /**
   * Store method
   *
   */
  async store(data) {
    return this.#limitRepository.store(data)
  }

  /**
   * Show method
   *
   */
  async show(id) {
    return this.#limitRepository.show(id)
  }

  /**
   * Update method
   *
   */
  async update(id, data) {
    return this.#limitRepository.update(id, data)
  }

  /**
   * Delete method
   *
   */
  async delete(id) {
    return this.#limitRepository.delete(id)
  }
}
