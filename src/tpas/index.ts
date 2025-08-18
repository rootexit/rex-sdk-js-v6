import { SDKConfig } from '../types';
import { WechatOffiaccountApi } from './wechatOffiaccount';

export class TPASApi {
  public wechatOffiaccount: WechatOffiaccountApi;

  constructor(config: SDKConfig) {
    this.wechatOffiaccount = new WechatOffiaccountApi(config);
  }
}
