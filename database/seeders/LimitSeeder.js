import { Seeder } from '@athenna/database'
import { Limit } from '#app/Models/Limit'

export class LimitSeeder extends Seeder {
  /**
   * Run the database seeders.
   *
   * @return {Promise<void>}
   */
  async run() {
    await Limit.factory().count(3).create()
  }
}
