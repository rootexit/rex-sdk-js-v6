import type { SDKConfig } from '../../types'
import { BaseApiResult, List } from '../../types'
import { signRequest } from '../../signer'
import { Conversion, Merge } from '../../utils/common'
import {
  CreateCaptchaConfigReq,
  CreateCaptchaConfigResp,
  DeleteCaptchaConfigReq,
  DeleteCaptchaConfigResp,
  DeleteManyCaptchaConfigReq,
  DeleteManyCaptchaConfigResp,
  UpdateCaptchaConfigReq,
  UpdateCaptchaConfigResp,
  UpdateDefaultCaptchaConfigReq,
  UpdateDefaultCaptchaConfigResp,
  UpdateStatusCaptchaConfigReq,
  UpdateStatusCaptchaConfigResp,
  QueryListCaptchaConfigReq,
  QueryListCaptchaConfigResp,
  QueryListWhereIdsCaptchaConfigReq,
  QueryListWhereIdsCaptchaConfigResp,
  QueryCaptchaConfigReq,
  QueryCaptchaConfigResp
} from './types'

export class CaptchaConfigApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'mas'
  }

  async createCaptchaConfig(params?: CreateCaptchaConfigReq): Promise<BaseApiResult & CreateCaptchaConfigResp> {
    let url = '/mas/captchaConfig/create'
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

  async deleteCaptchaConfig(params: DeleteCaptchaConfigReq): Promise<BaseApiResult & DeleteCaptchaConfigResp> {
    let url = '/mas/captchaConfig/delete'

    const result = Conversion(params)

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      query: result
    })

    const reqUrl = Merge(signed, result)

    const res = await fetch(reqUrl, {
      method: signed.method,
      headers: signed.headers
    })
    return res.json()
  }

  async deleteManyCaptchaConfig(params?: DeleteManyCaptchaConfigReq): Promise<BaseApiResult & DeleteManyCaptchaConfigResp> {
    let url = '/mas/captchaConfig/deleteMany'
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

  async updateCaptchaConfig(params?: UpdateCaptchaConfigReq): Promise<BaseApiResult & UpdateCaptchaConfigResp> {
    let url = '/mas/captchaConfig/update'
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

  async updateDefaultCaptchaConfig(params?: UpdateDefaultCaptchaConfigReq): Promise<BaseApiResult & UpdateDefaultCaptchaConfigResp> {
    let url = '/mas/captchaConfig/updateDefault'
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

  async updateStatusCaptchaConfig(params?: UpdateStatusCaptchaConfigReq): Promise<BaseApiResult & UpdateStatusCaptchaConfigResp> {
    let url = '/mas/captchaConfig/updateStatus'
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

  async queryListCaptchaConfig(params?: QueryListCaptchaConfigReq): Promise<BaseApiResult<List<QueryListCaptchaConfigResp>>> {
    let url = '/mas/captchaConfig/queryList'
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

  async queryListWhereIdsCaptchaConfig(params?: QueryListWhereIdsCaptchaConfigReq): Promise<BaseApiResult<List<QueryListWhereIdsCaptchaConfigResp>>> {
    let url = '/mas/captchaConfig/queryListWhereIds'
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

  async queryCaptchaConfig(params: QueryCaptchaConfigReq): Promise<BaseApiResult<QueryCaptchaConfigResp>> {
    let url = '/mas/captchaConfig/query'

    const result = Conversion(params)

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'GET',
      query: result
    })

    const reqUrl = Merge(signed, result)

    const res = await fetch(reqUrl, {
      method: signed.method,
      headers: signed.headers
    })
    return res.json()
  }
}
