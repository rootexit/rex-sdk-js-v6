import { type QueryParameterBag } from '@smithy/types'

export type List<T> = {
  list: T
  total: number
  page: number
  page_size: number
}

export type BaseApiResult<T = any> = {
  code: number
  msg: string
  request_id: string
  path: string
  data: T
}

export interface SDKConfigBase {
  region?: string
  host?: string
  env?: string
  version?: string
  protocol?: string
}

export interface SDKConfig extends SDKConfigBase {
  accessKeyId: string
  secretAccessKey: string
}

export interface SDKRequestParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  headers?: Record<string, string>
  body?: object
  query?: QueryParameterBag
}
