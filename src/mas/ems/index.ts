import { SDKConfig } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'

import { ApiEmsSendReq, ApiEmsSendResp, ApiEmsCheckReq, ApiEmsCheckResp, ApiEmsSendSyncReq, ApiEmsSendSyncResp } from './types'

export class EmsApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'mas'
  }

  /* 邮件发送 */
  async EmsSend(params: ApiEmsSendReq): Promise<BaseApiResult & ApiEmsSendResp> {
    let url = '/mas/ems/send'

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
  async EmsCheck(params: ApiEmsCheckReq): Promise<BaseApiResult & ApiEmsCheckResp> {
    let url = '/mas/ems/check'

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

  /* 邮件发送(同步) */
  async EmsSendSync(params: ApiEmsSendSyncReq): Promise<BaseApiResult & ApiEmsSendSyncResp> {
    let url = '/mas/ems/sendSync'

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
