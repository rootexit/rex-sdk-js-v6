import { SDKConfig } from '../types';
import { BaseApi } from './base';

export class SASApi {
  public base: BaseApi;

  constructor(config: SDKConfig) {
    this.base = new BaseApi(config);
  }
}
