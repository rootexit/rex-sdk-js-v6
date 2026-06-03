type CreateEmsConfigReq = {
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
   * 端口
   */
  port: number
  /**
   * 协议
   */
  protocol: string
  remark?: string
  /**
   * 发件人的名称
   */
  sender_name: string
}
type CreateEmsConfigResp = {}

type DeleteEmsConfigReq = {
  id: number
}
type DeleteEmsConfigResp = {}

type DeleteManyEmsConfigReq = {
  ids: Array<number>
}
type DeleteManyEmsConfigResp = {}

type UpdateEmsConfigReq = {
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
   * 端口
   */
  port?: number
  /**
   * 协议
   */
  protocol?: string
  remark: string
  /**
   * 发件人的名称
   */
  sender_name?: string
}
type UpdateEmsConfigResp = {}

type UpdateDefaultEmsConfigReq = {
  id: number
}
type UpdateDefaultEmsConfigResp = {}

type UpdateStatusEmsConfigReq = {
  id: number
  status: number
}
type UpdateStatusEmsConfigResp = {}

type QueryListEmsConfigReq = {
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
type QueryListEmsConfigResp = Array<QueryEmsConfigResp>

type QueryListWhereIdsEmsConfigReq = {
  ids: Array<number>
}
type QueryListWhereIdsEmsConfigResp = Array<QueryEmsConfigResp>

type QueryEmsConfigReq = {
  id: number
}
type QueryEmsConfigResp = {
  id: number
  created_at_unix: number
  updated_at_unix: number
  is_default: boolean
  status: number
  name: string
  credential_id: number
  sender_name: string
  endpoint: string
  port: number
  protocol: string
  remark: string
}

export {
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
}
