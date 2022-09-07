import { Limit } from '#app/Models/Limit'

export class LimitRepository {
  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor() {}

  /**
   * Index method
   *
   */
  async index() {
    return Limit.findMany()
  }

  /**
   * Store method
   *
   */
  async store(data) {
    return Limit.createOrUpdate(
      {
        days: data.days,
        type: data.type,
        currency_id: data.currency_id,
        owner: data.owner,
        owner_id: data.owner_id,
      },
      data,
    )
  }

  /**
   * Show method
   *
   */
  async show(id) {
    return Limit.findOrFail({ id })
  }

  /**
   * Update method
   *
   */
  async update(id, data) {
    return Limit.update({ id }, data)
  }

  /**
   * Delete method
   *
   */
  async delete(id, force = false) {
    return Limit.delete({ id }, force)
  }
}
