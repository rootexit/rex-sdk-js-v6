import type { SDKConfig, BaseApiResult } from '../../types';
import { signRequest } from '../../signer';
import { AddPeriodicJobTasksReq, AddPeriodicJobTasksResp, RemovePeriodicJobTasksReq, RemovePeriodicJobTasksResp } from './types';

export class PeriodicJobAPI {
  private config: SDKConfig;
  private service: string;

  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'taskQueue';
  }

  /* 添加周期性任务 */
  async addPeriodicJobTasks(params: AddPeriodicJobTasksReq): Promise<BaseApiResult & AddPeriodicJobTasksResp> {
    let url = '/taskQueue/periodicJob/add';

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
  async removePeriodicJobTasks(params: RemovePeriodicJobTasksReq): Promise<BaseApiResult & RemovePeriodicJobTasksResp> {
    let url = '/taskQueue/periodicJob/remove';

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
