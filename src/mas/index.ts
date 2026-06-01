import { SDKConfig } from '../types'
import { BaseApi } from './captcha/base'
import { CaptchaConfigApi } from './captcha_config'
import { SmsConfigApi } from './sms_config'

export class MASApi {
  public base: BaseApi
  public captchaConfig: CaptchaConfigApi
  public smsConfig: SmsConfigApi

  constructor(config: SDKConfig) {
    this.base = new BaseApi(config)
    this.captchaConfig = new CaptchaConfigApi(config)
    this.smsConfig = new SmsConfigApi(config)
  }
}
