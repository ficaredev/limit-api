import { LimitResource } from '#app/Resources/LimitResource'

export class LimitController {
  /** @type {import('#app/Services/LimitService').LimitService} */
  #limitService

  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor(limitService) {
    this.#limitService = limitService
  }

  /**
   * Index method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async index({ response, data }) {
    const limits = await this.#limitService.index(data)

    return response.status(200).send(LimitResource.toArray(limits))
  }

  /**
   * Store method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async store({ request, response }) {
    const limit = await this.#limitService.store(request.body)

    return response.status(201).send(LimitResource.toJson(limit))
  }

  /**
   * Show method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async show({ response, params }) {
    const limit = await this.#limitService.show(params.id)

    return response.status(200).send(LimitResource.toJson(limit))
  }

  /**
   * Update method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async update({ request, response, params }) {
    const limit = await this.#limitService.show(params.id, request.body)

    return response.status(200).send(LimitResource.toJson(limit))
  }

  /**
   * Delete method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async delete({ response, params }) {
    await this.#limitService.delete(params.id)

    return response.status(204)
  }
}
