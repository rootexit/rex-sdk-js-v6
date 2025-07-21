import type { SDKConfig, BaseApiResult } from '../types';
import { signRequest } from '../signer';
import { CtasPeriodicJobAddReq, CtasPeriodicJobAddResp, CtasPeriodicJobRemoveReq, CtasPeriodicJobRemoveResp } from './types';

export class PeriodicJobAPI {
  private config: SDKConfig;
  private service: string;

  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'ctas';
  }

  /* 添加周期性任务 */
  async BehavioralVerificationInit(params: CtasPeriodicJobAddReq): Promise<BaseApiResult & CtasPeriodicJobAddResp> {
    let url = '/ctas/periodicJob/add';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 移除周期性任务 */
  async BehavioralVerificationVerify(params: CtasPeriodicJobRemoveReq): Promise<BaseApiResult & CtasPeriodicJobRemoveResp> {
    let url = '/ctas/periodicJob/remove';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }
}
