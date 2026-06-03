type CreateCaptchaConfigReq = {
  /**
   * 杂质点数
   */
  dot_count: number
  /**
   * 图片高度
   */
  img_height: number
  /**
   * 图片宽度
   */
  img_width: number
  /**
   * 验证码长度
   */
  key_long: number
  /**
   * 最大倾斜度
   */
  max_skew: number
  /**
   * 配置索引
   */
  name: string
}
type CreateCaptchaConfigResp = {
  data: { id: number }
}

type DeleteCaptchaConfigReq = {
  id: number
}
type DeleteCaptchaConfigResp = {}

type DeleteManyCaptchaConfigReq = {}
type DeleteManyCaptchaConfigResp = {}

type UpdateCaptchaConfigReq = {
  /**
   * 杂质点数
   */
  dot_count?: number
  /**
   * id
   */
  id: number
  /**
   * 图片高度
   */
  img_height?: number
  /**
   * 图片宽度
   */
  img_width?: number
  /**
   * 验证码长度
   */
  key_long?: number
  /**
   * 最大倾斜度
   */
  max_skew?: number
  /**
   * 配置索引
   */
  name: string
}
type UpdateCaptchaConfigResp = {}

type UpdateDefaultCaptchaConfigReq = {
  id: number
}
type UpdateDefaultCaptchaConfigResp = {}

type UpdateStatusCaptchaConfigReq = {
  id: number
  status: number
}
type UpdateStatusCaptchaConfigResp = {}

type QueryListCaptchaConfigReq = {
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
type QueryListCaptchaConfigResp = Array<QueryCaptchaConfigResp>

type QueryListWhereIdsCaptchaConfigReq = {
  ids: Array<number>
}
type QueryListWhereIdsCaptchaConfigResp = Array<QueryCaptchaConfigResp>

type QueryCaptchaConfigReq = {
  id: number
}
type QueryCaptchaConfigResp = {
  id: number
  created_at_unix: number
  updated_at_unix: number
  is_default: boolean
  status: number
  name: string
  dot_count: number
  max_skew: number
  key_long: number
  img_width: number
  img_height: number
}

export {
  CreateCaptchaConfigReq,
  CreateCaptchaConfigResp,
  DeleteCaptchaConfigReq,
  DeleteCaptchaConfigResp,
  DeleteManyCaptchaConfigReq,
  DeleteManyCaptchaConfigResp,
  UpdateCaptchaConfigReq,
  UpdateCaptchaConfigResp,
  UpdateDefaultCaptchaConfigReq,
  UpdateDefaultCaptchaConfigResp,
  UpdateStatusCaptchaConfigReq,
  UpdateStatusCaptchaConfigResp,
  QueryListCaptchaConfigReq,
  QueryListCaptchaConfigResp,
  QueryListWhereIdsCaptchaConfigReq,
  QueryListWhereIdsCaptchaConfigResp,
  QueryCaptchaConfigReq,
  QueryCaptchaConfigResp
}
