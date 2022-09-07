import { Resource } from '@athenna/database'

export class LimitResource extends Resource {
  /**
   * Set your object blueprint to execute in resources.
   *
   * @param object
   * @return {any}
   */
  static blueprint(object) {
    return object
  }
}
