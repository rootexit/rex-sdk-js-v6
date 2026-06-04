type CreateWechatConfigReq = {
  /**
   * App名称
   */
  app_name: string
  /**
   * App的类型
   */
  app_type: string
  /**
   * 凭证配置的id
   */
  credential_id: number
  /**
   * 原始id
   */
  gh_id: string
  /**
   * 配置索引
   */
  name: string
  /**
   * 备注
   */
  remark?: string
}
type CreateWechatConfigResp = {
  data: { id: number }
}

type DeleteWechatConfigReq = {
  id: number
}
type DeleteWechatConfigResp = {}

type DeleteManyWechatConfigReq = {
  ids: Array<number>
}
type DeleteManyWechatConfigResp = {}

type UpdateWechatConfigReq = {
  /**
   * App名称
   */
  app_name: string
  /**
   * App的类型
   */
  app_type: string
  /**
   * 凭证配置的id
   */
  credential_id: number
  /**
   * 原始id
   */
  gh_id: string
  /**
   * id
   */
  id: number
  /**
   * 配置索引
   */
  name: string
  /**
   * 备注
   */
  remark?: string
}
type UpdateWechatConfigResp = {}

type UpdateDefaultWechatConfigReq = {
  id: number
}
type UpdateDefaultWechatConfigResp = {}

type UpdateStatusWechatConfigReq = {
  id: number
  status: number
}
type UpdateStatusWechatConfigResp = {}

type QueryListWechatConfigReq = {
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
type QueryListWechatConfigResp = Array<QueryWechatConfigResp>

type QueryListWhereIdsWechatConfigReq = {
  ids: Array<number>
}
type QueryListWhereIdsWechatConfigResp = Array<QueryWechatConfigResp>

type QueryWechatConfigReq = {
  id: number
}
type QueryWechatConfigResp = {
  id: number
  created_at_unix: number
  updated_at_unix: number
  is_default: boolean
  status: number
  name: string
  app_type: string
  credential_id: number
  gh_id: string
  app_name: string
  remark: string
}

export {
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
}
