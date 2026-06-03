import type { SDKConfig } from '../../types'
import { BaseApiResult, List } from '../../types'
import { signRequest } from '../../signer'
import { Conversion, Merge } from '../../utils/common'
import {
  CreateCredentialConfigReq,
  CreateCredentialConfigResp,
  DeleteCredentialConfigReq,
  DeleteCredentialConfigResp,
  DeleteManyCredentialConfigReq,
  DeleteManyCredentialConfigResp,
  UpdateCredentialConfigReq,
  UpdateCredentialConfigResp,
  UpdateDefaultCredentialConfigReq,
  UpdateDefaultCredentialConfigResp,
  UpdateStatusCredentialConfigReq,
  UpdateStatusCredentialConfigResp,
  QueryListCredentialConfigReq,
  QueryListCredentialConfigResp,
  QueryListWhereIdsCredentialConfigReq,
  QueryListWhereIdsCredentialConfigResp,
  QueryCredentialConfigReq,
  QueryCredentialConfigResp
} from './types'

export class CredentialConfigApi {
  private config: SDKConfig
  private service: string

  constructor(config: SDKConfig) {
    this.config = config
    this.service = 'credentials'
  }

  async createCredentialConfig(params?: CreateCredentialConfigReq): Promise<BaseApiResult & CreateCredentialConfigResp> {
    let url = '/credentials/credentialConfig/create'
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

  async deleteCredentialConfig(params: DeleteCredentialConfigReq): Promise<BaseApiResult & DeleteCredentialConfigResp> {
    let url = `/credentials/credentialConfig/delete`

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

  async deleteManyCredentialConfig(params?: DeleteManyCredentialConfigReq): Promise<BaseApiResult & DeleteManyCredentialConfigResp> {
    let url = '/credentials/credentialConfig/deleteMany'
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

  async updateCredentialConfig(params?: UpdateCredentialConfigReq): Promise<BaseApiResult & UpdateCredentialConfigResp> {
    let url = '/credentials/credentialConfig/update'
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

  async updateDefaultCredentialConfig(params?: UpdateDefaultCredentialConfigReq): Promise<BaseApiResult & UpdateDefaultCredentialConfigResp> {
    let url = '/credentials/credentialConfig/updateDefault'
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

  async updateStatusCredentialConfig(params?: UpdateStatusCredentialConfigReq): Promise<BaseApiResult & UpdateStatusCredentialConfigResp> {
    let url = '/credentials/credentialConfig/updateStatus'
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

  async queryListCredentialConfig(params?: QueryListCredentialConfigReq): Promise<BaseApiResult<List<QueryListCredentialConfigResp>>> {
    let url = '/credentials/credentialConfig/queryList'
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

  async queryListWhereIdsCredentialConfig(params?: QueryListWhereIdsCredentialConfigReq): Promise<BaseApiResult<List<QueryListWhereIdsCredentialConfigResp>>> {
    let url = '/credentials/credentialConfig/queryListWhereIds'
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

  async queryCredentialConfig(params: QueryCredentialConfigReq): Promise<BaseApiResult<QueryCredentialConfigResp>> {
    let url = '/credentials/credentialConfig/query'

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
