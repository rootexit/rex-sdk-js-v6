import { SDKConfig } from '../types'
import { WechatOffiaccountApi } from './wechatOffiaccount'
import { WechatConfigApi } from './wechat_config'

export class TPASApi {
  public wechatOffiaccount: WechatOffiaccountApi
  public WechatConfig: WechatConfigApi

  constructor(config: SDKConfig) {
    this.wechatOffiaccount = new WechatOffiaccountApi(config)
    this.WechatConfig = new WechatConfigApi(config)
  }
}
