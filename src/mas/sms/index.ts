import { SDKConfig } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'

import { ApiSmsSendReq, ApiSmsSendResp, ApiSmsCheckReq, ApiSmsCheckResp, ApiSmsSendSyncReq, ApiSmsSendSyncResp } from './types'

export class SmsApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'mas'
  }

  /* 短信发送 */
  async SmsSend(params: ApiSmsSendReq): Promise<BaseApiResult & ApiSmsSendResp> {
    let url = '/mas/sms/send'

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    })
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    })
    return res.json()
  }

  /* 检查发送结果 */
  async SmsCheck(params: ApiSmsCheckReq): Promise<BaseApiResult & ApiSmsCheckResp> {
    let url = '/mas/sms/check'

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    })
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    })
    return res.json()
  }

  /* 短信发送（同步） */
  async SmsSendSync(params: ApiSmsSendSyncReq): Promise<BaseApiResult & ApiSmsSendSyncResp> {
    let url = '/mas/sms/sendSync'

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    })
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    })
    return res.json()
  }
}
