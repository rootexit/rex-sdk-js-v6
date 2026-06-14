import type { SDKConfig, BaseApiResult } from '../../types';
import { signRequest } from '../../signer';
import { addDelayedJobTasksReq, addDelayedJobTasksResp, removeDelayedJobTasksReq, removeDelayedJobTasksResp } from './types';

export class DelayedJobAPI {
  private config: SDKConfig;
  private service: string;

  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'taskQueue';
  }

  /* 添加延时性任务 */
  async addDelayedJobTasks(params: addDelayedJobTasksReq): Promise<BaseApiResult & addDelayedJobTasksResp> {
    let url = '/taskQueue/delayedJob/add';

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

  /* 移除延时性任务 */
  async removeDelayedJobTasks(params: removeDelayedJobTasksReq): Promise<BaseApiResult & removeDelayedJobTasksResp> {
    let url = '/taskQueue/delayedJob/cancel';

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
