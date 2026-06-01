import type { SDKConfig } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'
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

  async deleteCaptchaConfig(params?: DeleteCaptchaConfigReq): Promise<BaseApiResult & DeleteCaptchaConfigResp> {
    let url = '/mas/captchaConfig/delete'
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

  async queryListCaptchaConfig(params?: QueryListCaptchaConfigReq): Promise<BaseApiResult & QueryListCaptchaConfigResp> {
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

  async queryListWhereIdsCaptchaConfig(params?: QueryListWhereIdsCaptchaConfigReq): Promise<BaseApiResult & QueryListWhereIdsCaptchaConfigResp> {
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

  async queryCaptchaConfig(params?: QueryCaptchaConfigReq): Promise<BaseApiResult & QueryCaptchaConfigResp> {
    let url = '/mas/captchaConfig/query'
    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'GET',
      headers: {},
      query: params
    })

    const reqUrl = new URL(`${signed.protocol}/${signed.hostname}${signed.path}`)
    Object.entries(signed.query).forEach(([k, v]) => {
      if (v === null || v === undefined) return
      if (Array.isArray(v)) {
        v.forEach(item => reqUrl.searchParams.append(k, item))
      } else {
        reqUrl.searchParams.append(k, v)
      }
    })

    const res = await fetch(reqUrl, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    })
    return res.json()
  }
}
