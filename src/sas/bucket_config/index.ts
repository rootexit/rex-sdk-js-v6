import type { SDKConfig, List } from '../../types'
import { BaseApiResult } from '../../types'
import { signRequest } from '../../signer'
import { Conversion, Merge } from '../../utils/common'

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

  async deleteBucketConfig(params: DeleteBucketConfigReq): Promise<BaseApiResult & DeleteBucketConfigResp> {
    let url = '/sas/bucketConfig/delete'
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

  async queryListBucketConfig(params?: QueryListBucketConfigReq): Promise<BaseApiResult<List<QueryListBucketConfigResp>>> {
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

  async queryListWhereIdsBucketConfig(params?: QueryListWhereIdsBucketConfigReq): Promise<BaseApiResult<List<QueryListWhereIdsBucketConfigResp>>> {
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

  async queryBucketConfig(params: QueryBucketConfigReq): Promise<BaseApiResult<QueryBucketConfigResp>> {
    let url = '/sas/bucketConfig/query'
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
