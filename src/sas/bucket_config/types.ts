type CreateBucketConfigReq = {
  /**
   * 存储桶名称
   */
  bucket_name: string
  /**
   * 凭证配置的id
   */
  credential_id: number
  /**
   * 接入点
   */
  endpoint: string
  /**
   * 配置索引
   */
  name: string
  /**
   * 前缀
   */
  prefix: string
  /**
   * 对外域名
   */
  public_domain: string
  /**
   * 地区
   */
  region: string
  /**
   * 备注
   */
  remark?: string
}
type CreateBucketConfigResp = {
  data: { id: number }
}

type DeleteBucketConfigReq = {
  id: number
}
type DeleteBucketConfigResp = {}

type DeleteManyBucketConfigReq = {
  ids: Array<number>
}
type DeleteManyBucketConfigResp = {}

type UpdateBucketConfigReq = {
  /**
   * 存储桶名称
   */
  bucket_name: string
  /**
   * 凭证配置的id
   */
  credential_id: number
  /**
   * 接入点
   */
  endpoint: string
  /**
   * id
   */
  id: number
  /**
   * 配置索引
   */
  name: string
  /**
   * 前缀
   */
  prefix: string
  /**
   * 对外域名
   */
  public_domain: string
  /**
   * 地区
   */
  region: string
  /**
   * 备注
   */
  remark?: string
}
type UpdateBucketConfigResp = {}

type UpdateDefaultBucketConfigReq = {
  id: number
}
type UpdateDefaultBucketConfigResp = {}

type UpdateStatusBucketConfigReq = {
  id: number
  status: number
}
type UpdateStatusBucketConfigResp = {}

type QueryListBucketConfigReq = {
  /**
   * 结束时间
   */
  end_created_at?: number
  /**
   * 关键词
   */
  keyword?: string
  /**
   * 页码
   */
  page?: number
  /**
   * 一页多少数据
   */
  page_size?: number
  /**
   * 开始时间
   */
  start_created_at?: number
  /**
   * 状态
   */
  status?: number
}
type QueryListBucketConfigResp = Array<QueryBucketConfigResp>

type QueryListWhereIdsBucketConfigReq = {
  ids: Array<number>
}
type QueryListWhereIdsBucketConfigResp = Array<QueryBucketConfigResp>

type QueryBucketConfigReq = {
  id: number
}
type QueryBucketConfigResp = {
  id: number
  created_at_unix: number
  updated_at_unix: number
  is_default: boolean
  status: number
  name: string
  credential_id: number
  bucket_name: string
  region: string
  prefix: string
  endpoint: string
  public_domain: string
  remark: string
}

export {
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
}
