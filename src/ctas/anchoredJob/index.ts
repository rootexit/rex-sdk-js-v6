import type { SDKConfig, BaseApiResult } from '../../types';
import { signRequest } from '../../signer';
import { AddAnchoringTasksReq, AddAnchoringTasksResp, RemoveAnchoringTasksReq, RemoveAnchoringTasksResp } from './types';

export class AnchoredJobAPI {
  private config: SDKConfig;
  private service: string;

  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'taskQueue';
  }

  /* 添加锚定性任务 */
  async addAnchoringTasks(params: AddAnchoringTasksReq): Promise<BaseApiResult & AddAnchoringTasksResp> {
    let url = '/taskQueue/anchoredJob/add';

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

  /* 移除锚定性任务 */
  async removeAnchoringTasks(params: RemoveAnchoringTasksReq): Promise<BaseApiResult & RemoveAnchoringTasksResp> {
    let url = '/taskQueue/anchoredJob/remove';

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
