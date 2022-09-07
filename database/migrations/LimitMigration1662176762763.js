import { Table } from 'typeorm'

import LimitTypeEnum from '#app/Enums/LimitTypeEnum'
import OwnerEnum from '#app/Enums/OwnerEnum'

export class LimitMigration1662176762763 {
  /**
   * Return the table name.
   *
   * @return {string}
   */
  get tableName() {
    return 'limits'
  }

  /**
   * Run migration.
   *
   * @param queryRunner {import('typeorm').QueryRunner}
   * @return {Promise<void>}
   */
  async up(queryRunner) {
    const table = new Table({ name: this.tableName })

    table.addColumn({
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    })

    table.addColumn({
      name: 'days',
      type: 'int',
    })

    table.addColumn({
      name: 'amount',
      type: 'decimal',
      precision: 22,
      scale: 8,
      default: 0.0,
    })

    table.addColumn({
      name: 'type',
      type: 'enum',
      enum: LimitTypeEnum.values(),
    })

    table.addColumn({
      name: 'currency_id',
      type: 'int',
    })

    table.addColumn({
      name: 'owner',
      type: 'enum',
      enum: OwnerEnum.values(),
    })

    table.addColumn({
      name: 'owner_id',
      type: 'int',
    })

    table.addColumn({
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    })

    table.addColumn({
      name: 'updated_at',
      type: 'timestamp',
      default: 'now()',
    })

    table.addColumn({
      name: 'deleted_at',
      type: 'timestamp',
      default: null,
      isNullable: true,
    })

    await queryRunner.createTable(table)
  }

  /**
   * Rollback migration.
   *
   * @param queryRunner {import('typeorm').QueryRunner}
   * @return {Promise<void>}
   */
  async down(queryRunner) {
    await queryRunner.dropTable(this.tableName)
  }
}
