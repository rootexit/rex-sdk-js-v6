import { SDKConfig } from '../types';
import { AKCApi } from './akc';
import { SKCApi } from './skc';

export class KMSApi {
  public akc: AKCApi;
  public skc: SKCApi;

  constructor(config: SDKConfig) {
    this.akc = new AKCApi(config);
    this.skc = new SKCApi(config);
  }
}
