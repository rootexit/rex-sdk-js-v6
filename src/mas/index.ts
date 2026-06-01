import { SDKConfig } from '../types'
import { BaseApi } from './captcha/base'
import { CaptchaConfigApi } from './captcha_config'

export class MASApi {
  public base: BaseApi
  public captchaConfig: CaptchaConfigApi

  constructor(config: SDKConfig) {
    this.base = new BaseApi(config)
    this.captchaConfig = new CaptchaConfigApi(config)
  }
}
