import type { SDKConfig } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'
import {
  CreateBucketConfigReq,
  CreateBucketConfigResp,
  DeleteBucketConfigReq,
  DeleteBucketConfigResp,
  DeleteManyBucketConfigReq,
  DeleteManyBucketConfigResp,
  UpdateBucketConfigReq,
  UpdateBucketConfigResp,
  UpdateDefaultBucketConfigReq,
  UpdateDefaultBucketConfigResp,
  UpdateStatusBucketConfigReq,
  UpdateStatusBucketConfigResp,
  QueryListBucketConfigReq,
  QueryListBucketConfigResp,
  QueryListWhereIdsBucketConfigReq,
  QueryListWhereIdsBucketConfigResp,
  QueryBucketConfigReq,
  QueryBucketConfigResp
} from './types'

export class BucketConfigApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'sas'
  }

  async createBucketConfig(params?: CreateBucketConfigReq): Promise<BaseApiResult & CreateBucketConfigResp> {
    let url = '/sas/bucketConfig/create'
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

  async deleteBucketConfig(params?: DeleteBucketConfigReq): Promise<BaseApiResult & DeleteBucketConfigResp> {
    let url = '/sas/bucketConfig/delete'
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

  async deleteManyBucketConfig(params?: DeleteManyBucketConfigReq): Promise<BaseApiResult & DeleteManyBucketConfigResp> {
    let url = '/sas/bucketConfig/deleteMany'
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

  async updateBucketConfig(params?: UpdateBucketConfigReq): Promise<BaseApiResult & UpdateBucketConfigResp> {
    let url = '/sas/bucketConfig/update'
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

  async updateDefaultBucketConfig(params?: UpdateDefaultBucketConfigReq): Promise<BaseApiResult & UpdateDefaultBucketConfigResp> {
    let url = '/sas/bucketConfig/updateDefault'
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

  async updateStatusBucketConfig(params?: UpdateStatusBucketConfigReq): Promise<BaseApiResult & UpdateStatusBucketConfigResp> {
    let url = '/sas/bucketConfig/updateStatus'
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

  async queryListBucketConfig(params?: QueryListBucketConfigReq): Promise<BaseApiResult & QueryListBucketConfigResp> {
    let url = '/sas/bucketConfig/queryList'
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

  async queryListWhereIdsBucketConfig(params?: QueryListWhereIdsBucketConfigReq): Promise<BaseApiResult & QueryListWhereIdsBucketConfigResp> {
    let url = '/sas/bucketConfig/queryListWhereIds'
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

  async queryBucketConfig(params?: QueryBucketConfigReq): Promise<BaseApiResult & QueryBucketConfigResp> {
    let url = '/sas/bucketConfig/query'
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
