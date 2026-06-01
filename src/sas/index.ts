import { SDKConfig } from '../types'
import { BaseApi } from './base'
import { BucketConfigApi } from './bucket_config'

export class SASApi {
  public base: BaseApi
  public bucketConfig: BucketConfigApi

  constructor(config: SDKConfig) {
    this.base = new BaseApi(config)
    this.bucketConfig = new BucketConfigApi(config)
  }
}
