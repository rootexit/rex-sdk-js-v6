import type { SDKConfig } from '../types';
import { BaseApiResult } from '../types';
import { signRequest } from '../signer';
import { CodesReq, CodesResp, ZonesReq, ZonesResp } from './types';

export class BaseApi {
  private config: SDKConfig;
  private service: string;
  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'base';
  }

  async codes(params: CodesReq): Promise<BaseApiResult & CodesResp> {
    let url = '/base/codes';
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'GET',
      headers: {}
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  async zones(params: ZonesReq): Promise<BaseApiResult & ZonesResp> {
    let url = '/base/zones';
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'GET',
      headers: {}
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }
}
