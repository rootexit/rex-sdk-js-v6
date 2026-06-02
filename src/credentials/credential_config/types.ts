type CreateCredentialConfigReq = {
  /**
   * 访问密钥
   */
  access_key_id: string
  /**
   * 腾讯云访问密钥兼容性字段，腾讯云访问密钥兼容性字段
   */
  app_id: string
  /**
   * 凭证类型
   */
  credential_type: string
  /**
   * 访问密钥默认访问区域
   */
  default_region: string
  /**
   * 访问密钥默认接入点
   */
  endpoint: string
  /**
   * 凭证的别名
   */
  name: string
  /**
   * 备注
   */
  remark: string
  /**
   * 访问密钥的密码
   */
  secret_access_key: string
}
type CreateCredentialConfigResp = {
  data: { id: number }
}

type DeleteCredentialConfigReq = {
  id: number
}
type DeleteCredentialConfigResp = {}

type DeleteManyCredentialConfigReq = {
  ids: Array<number>
}
type DeleteManyCredentialConfigResp = {}

type UpdateCredentialConfigReq = {
  /**
   * 访问密钥
   */
  access_key_id?: string
  /**
   * 腾讯云访问密钥兼容性字段，腾讯云访问密钥兼容性字段
   */
  app_id: string
  /**
   * 凭证类型
   */
  credential_type: string
  /**
   * 访问密钥默认访问区域
   */
  default_region: string
  /**
   * 访问密钥默认接入点
   */
  endpoint: string
  /**
   * id
   */
  id: number
  /**
   * 凭证的别名
   */
  name?: string
  /**
   * 备注
   */
  remark: string
  /**
   * 访问密钥的密码
   */
  secret_access_key?: string
}
type UpdateCredentialConfigResp = {}

type UpdateDefaultCredentialConfigReq = {
  id: number
}
type UpdateDefaultCredentialConfigResp = {}

type UpdateStatusCredentialConfigReq = {
  /**
   * id
   */
  id: number
  /**
   * 对应状态
   */
  status: number
}
type UpdateStatusCredentialConfigResp = {}

type QueryListCredentialConfigReq = {
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
type QueryListCredentialConfigResp = Array<QueryCredentialConfigResp>

type QueryListWhereIdsCredentialConfigReq = {
  ids: Array<number>
}
type QueryListWhereIdsCredentialConfigResp = Array<QueryCredentialConfigResp>

type QueryCredentialConfigReq = {
  id: number
}
type QueryCredentialConfigResp = {
  id: number
  created_at_unix: number
  updated_at_unix: number
  is_default: boolean
  status: number
  name: string
  credential_type: string
  access_key_id: string
  secret_access_key: string
  remark: string
  default_region: string
  app_id: string
  endpoint: string
}

export {
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
}
