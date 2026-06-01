import type { SDKConfig } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'
import {
  CreateSmsConfigReq,
  CreateSmsConfigResp,
  DeleteSmsConfigReq,
  DeleteSmsConfigResp,
  DeleteManySmsConfigReq,
  DeleteManySmsConfigResp,
  UpdateSmsConfigReq,
  UpdateSmsConfigResp,
  UpdateDefaultSmsConfigReq,
  UpdateDefaultSmsConfigResp,
  UpdateStatusSmsConfigReq,
  UpdateStatusSmsConfigResp,
  QueryListSmsConfigReq,
  QueryListSmsConfigResp,
  QueryListWhereIdsSmsConfigReq,
  QueryListWhereIdsSmsConfigResp,
  QuerySmsConfigReq,
  QuerySmsConfigResp
} from './types'

export class SmsConfigApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'mas'
  }

  async createSmsConfig(params?: CreateSmsConfigReq): Promise<BaseApiResult & CreateSmsConfigResp> {
    let url = '/mas/smsConfig/create'
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

  async deleteSmsConfig(params?: DeleteSmsConfigReq): Promise<BaseApiResult & DeleteSmsConfigResp> {
    let url = '/mas/smsConfig/delete'
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

  async deleteManySmsConfig(params?: DeleteManySmsConfigReq): Promise<BaseApiResult & DeleteManySmsConfigResp> {
    let url = '/mas/smsConfig/deleteMany'
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

  async updateSmsConfig(params?: UpdateSmsConfigReq): Promise<BaseApiResult & UpdateSmsConfigResp> {
    let url = '/mas/smsConfig/update'
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

  async updateDefaultSmsConfig(params?: UpdateDefaultSmsConfigReq): Promise<BaseApiResult & UpdateDefaultSmsConfigResp> {
    let url = '/mas/smsConfig/updateDefault'
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

  async updateStatusSmsConfig(params?: UpdateStatusSmsConfigReq): Promise<BaseApiResult & UpdateStatusSmsConfigResp> {
    let url = '/mas/smsConfig/updateStatus'
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

  async queryListSmsConfig(params?: QueryListSmsConfigReq): Promise<BaseApiResult & QueryListSmsConfigResp> {
    let url = '/mas/smsConfig/queryList'
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

  async queryListWhereIdsSmsConfig(params?: QueryListWhereIdsSmsConfigReq): Promise<BaseApiResult & QueryListWhereIdsSmsConfigResp> {
    let url = '/mas/smsConfig/queryListWhereIds'
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

  async querySmsConfig(params?: QuerySmsConfigReq): Promise<BaseApiResult & QuerySmsConfigResp> {
    let url = '/mas/smsConfig/query'
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
