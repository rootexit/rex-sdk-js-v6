type CreateSmsConfigReq = {
  /**
   * 凭证配置的id
   */
  credential_id: number
  /**
   * 接入点
   */
  endpoint: string
  /**
   * 别名
   */
  name: string
  /**
   * 参数模板
   */
  params_str: string
  remark?: string
  /**
   * 签名
   */
  sign_name: string
  /**
   * 模板
   */
  template: string
}
type CreateSmsConfigResp = {}

type DeleteSmsConfigReq = {
  id: number
}
type DeleteSmsConfigResp = {}

type DeleteManySmsConfigReq = {
  ids: Array<number>
}
type DeleteManySmsConfigResp = {}

type UpdateSmsConfigReq = {
  /**
   * 凭证配置的id
   */
  credential_id?: number
  /**
   * 接入点
   */
  endpoint?: string
  /**
   * id
   */
  id: number
  /**
   * 别名
   */
  name?: string
  /**
   * 参数模板
   */
  params_str?: string
  remark: string
  /**
   * 签名
   */
  sign_name?: string
  /**
   * 模板
   */
  template?: string
}
type UpdateSmsConfigResp = {}

type UpdateDefaultSmsConfigReq = {
  id: number
}
type UpdateDefaultSmsConfigResp = {}

type UpdateStatusSmsConfigReq = {
  id: number
  status: number
}
type UpdateStatusSmsConfigResp = {}

type QueryListSmsConfigReq = {
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
type QueryListSmsConfigResp = Array<QuerySmsConfigResp>

type QueryListWhereIdsSmsConfigReq = {
  ids: Array<number>
}
type QueryListWhereIdsSmsConfigResp = Array<QuerySmsConfigResp>

type QuerySmsConfigReq = {
  id: number
}
type QuerySmsConfigResp = {
  id: number
  created_at_unix: number
  updated_at_unix: number
  is_default: boolean
  status: number
  name: string
  credential_id: number
  endpoint: string
  template: string
  sign_name: string
  params_str: string
  remark: string
}

export {
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
}
