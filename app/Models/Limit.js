import { Model, Column } from '@athenna/database'

import LimitTypeEnum from '#app/Enums/LimitTypeEnum'
import OwnerEnum from '#app/Enums/OwnerEnum'

export class Limit extends Model {
  /**
   * The attributes that could be persisted in database.
   *
   *  @return {string[]}
   */
  static get persistOnly() {
    return ['id', 'days', 'amount', 'type', 'currency_id', 'owner', 'owner_id']
  }

  /**
   * Set the table name of this model instance.
   *
   * @return {string}
   */
  static get table() {
    return 'limits'
  }

  /**
   * The default schema for model instances.
   *
   * @return {any}
   */
  static schema() {
    return {
      id: Column.autoIncrementedInt(),
      days: Column.type('int').get(),
      amount: Column.type('decimal').get(),
      type: Column.type('varchar').get(),
      currency_id: Column.type('int').get(),
      owner: Column.type('varchar').get(),
      owner_id: Column.type('int').get(),
      created_at: Column.createdAt(),
      updated_at: Column.updatedAt(),
      deleted_at: Column.deletedAt(),
    }
  }

  /**
   * The definition method used by factories.
   *
   * @return {any}
   */
  static async definition() {
    return {
      id: this.faker.datatype.number(),
      days: this.faker.random.numeric(),
      amount: this.faker.finance.amount(),
      type: this.faker.helpers.arrayElement(LimitTypeEnum.values()),
      currency_id: this.faker.random.numeric(),
      owner: this.faker.helpers.arrayElement(OwnerEnum.values()),
      owner_id: this.faker.random.numeric(),
      created_at: this.faker.date.recent(),
      updated_at: this.faker.date.recent(),
      deleted_at: null,
    }
  }
}
