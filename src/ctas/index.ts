import { SDKConfig } from '../types'

import { AnchoredJobAPI } from './anchoredJob';
import { DelayedJobAPI } from './delayedJob'
import { PeriodicJobAPI } from './periodicJob'

export class CTASApi {
  public anchoredJob: AnchoredJobAPI;
  public delayedJob: DelayedJobAPI;
  public periodicJob: PeriodicJobAPI;

  constructor(config: SDKConfig) {
    this.anchoredJob = new AnchoredJobAPI(config);
    this.delayedJob = new DelayedJobAPI(config);
    this.periodicJob = new PeriodicJobAPI(config);
  }
}
