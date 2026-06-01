import type { SDKConfig } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'
import {
  CreateEmsConfigReq,
  CreateEmsConfigResp,
  DeleteEmsConfigReq,
  DeleteEmsConfigResp,
  DeleteManyEmsConfigReq,
  DeleteManyEmsConfigResp,
  UpdateEmsConfigReq,
  UpdateEmsConfigResp,
  UpdateDefaultEmsConfigReq,
  UpdateDefaultEmsConfigResp,
  UpdateStatusEmsConfigReq,
  UpdateStatusEmsConfigResp,
  QueryListEmsConfigReq,
  QueryListEmsConfigResp,
  QueryListWhereIdsEmsConfigReq,
  QueryListWhereIdsEmsConfigResp,
  QueryEmsConfigReq,
  QueryEmsConfigResp
} from './types'

export class EmsConfigApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'mas'
  }

  async createEmsConfig(params?: CreateEmsConfigReq): Promise<BaseApiResult & CreateEmsConfigResp> {
    let url = '/mas/emsConfig/create'
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

  async deleteEmsConfig(params?: DeleteEmsConfigReq): Promise<BaseApiResult & DeleteEmsConfigResp> {
    let url = '/mas/emsConfig/delete'
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

  async deleteManyEmsConfig(params?: DeleteManyEmsConfigReq): Promise<BaseApiResult & DeleteManyEmsConfigResp> {
    let url = '/mas/emsConfig/deleteMany'
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

  async updateEmsConfig(params?: UpdateEmsConfigReq): Promise<BaseApiResult & UpdateEmsConfigResp> {
    let url = '/mas/emsConfig/update'
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

  async updateDefaultEmsConfig(params?: UpdateDefaultEmsConfigReq): Promise<BaseApiResult & UpdateDefaultEmsConfigResp> {
    let url = '/mas/emsConfig/updateDefault'
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

  async updateStatusEmsConfig(params?: UpdateStatusEmsConfigReq): Promise<BaseApiResult & UpdateStatusEmsConfigResp> {
    let url = '/mas/emsConfig/updateStatus'
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

  async queryListEmsConfig(params?: QueryListEmsConfigReq): Promise<BaseApiResult & QueryListEmsConfigResp> {
    let url = '/mas/emsConfig/queryList'
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

  async queryListWhereIdsEmsConfig(params?: QueryListWhereIdsEmsConfigReq): Promise<BaseApiResult & QueryListWhereIdsEmsConfigResp> {
    let url = '/mas/emsConfig/queryListWhereIds'
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

  async queryEmsConfig(params?: QueryEmsConfigReq): Promise<BaseApiResult & QueryEmsConfigResp> {
    let url = '/mas/emsConfig/query'
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
