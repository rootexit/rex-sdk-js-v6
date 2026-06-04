import { SDKConfig } from '../types'
import { BaseApi } from './captcha/base'
import { CaptchaConfigApi } from './captcha_config'
import { SmsConfigApi } from './sms_config'
import { EmsConfigApi } from './ems_config'
import { SmsApi } from './sms'
import { EmsApi } from './ems'

export class MASApi {
  public base: BaseApi
  public captchaConfig: CaptchaConfigApi
  public smsConfig: SmsConfigApi
  public emsConfig: EmsConfigApi
  public sms: SmsApi
  public ems: EmsApi

  constructor(config: SDKConfig) {
    this.base = new BaseApi(config)
    this.captchaConfig = new CaptchaConfigApi(config)
    this.smsConfig = new SmsConfigApi(config)
    this.emsConfig = new EmsConfigApi(config)
    this.sms = new SmsApi(config)
    this.ems = new EmsApi(config)
  }
}
