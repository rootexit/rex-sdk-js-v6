import type { SDKConfig, List } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'
import { Conversion, Merge } from '../../utils/common'

import {
  CreateWechatConfigReq,
  CreateWechatConfigResp,
  DeleteWechatConfigReq,
  DeleteWechatConfigResp,
  DeleteManyWechatConfigReq,
  DeleteManyWechatConfigResp,
  UpdateWechatConfigReq,
  UpdateWechatConfigResp,
  UpdateDefaultWechatConfigReq,
  UpdateDefaultWechatConfigResp,
  UpdateStatusWechatConfigReq,
  UpdateStatusWechatConfigResp,
  QueryListWechatConfigReq,
  QueryListWechatConfigResp,
  QueryListWhereIdsWechatConfigReq,
  QueryListWhereIdsWechatConfigResp,
  QueryWechatConfigReq,
  QueryWechatConfigResp
} from './types'

export class WechatConfigApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'tpas'
  }

  async createWechatConfig(params?: CreateWechatConfigReq): Promise<BaseApiResult & CreateWechatConfigResp> {
    let url = '/tpas/wechatConfig/create'
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

  async deleteWechatConfig(params: DeleteWechatConfigReq): Promise<BaseApiResult & DeleteWechatConfigResp> {
    let url = '/tpas/wechatConfig/delete'
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

  async deleteManyWechatConfig(params?: DeleteManyWechatConfigReq): Promise<BaseApiResult & DeleteManyWechatConfigResp> {
    let url = '/tpas/wechatConfig/deleteMany'
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

  async updateWechatConfig(params?: UpdateWechatConfigReq): Promise<BaseApiResult & UpdateWechatConfigResp> {
    let url = '/tpas/wechatConfig/update'
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

  async updateDefaultWechatConfig(params?: UpdateDefaultWechatConfigReq): Promise<BaseApiResult & UpdateDefaultWechatConfigResp> {
    let url = '/tpas/wechatConfig/updateDefault'
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

  async updateStatusWechatConfig(params?: UpdateStatusWechatConfigReq): Promise<BaseApiResult & UpdateStatusWechatConfigResp> {
    let url = '/tpas/wechatConfig/updateStatus'
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

  async queryListWechatConfig(params?: QueryListWechatConfigReq): Promise<BaseApiResult<List<QueryListWechatConfigResp>>> {
    let url = '/tpas/wechatConfig/queryList'
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

  async queryListWhereIdsWechatConfig(params?: QueryListWhereIdsWechatConfigReq): Promise<BaseApiResult<List<QueryListWhereIdsWechatConfigResp>>> {
    let url = '/tpas/wechatConfig/queryListWhereIds'
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

  async queryWechatConfig(params: QueryWechatConfigReq): Promise<BaseApiResult<QueryWechatConfigResp>> {
    let url = '/tpas/wechatConfig/query'
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
