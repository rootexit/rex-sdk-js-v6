import { SDKConfig } from '../types';
import { PeriodicJobAPI } from './periodicJob';

export class CTASApi {
  public periodicJob: PeriodicJobAPI;

  constructor(config: SDKConfig) {
    this.periodicJob = new PeriodicJobAPI(config);
  }
}
