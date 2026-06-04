export type ApiSmsSendReq = {
  /**
   * 手机号
   */
  mobile: string
  /**
   * 配置别名
   */
  name?: string
  /**
   * 参数
   */
  params?: string[]
  /**
   * 使用场景
   */
  scene?: string
  /**
   * 所属服务
   */
  service?: string
  /**
   * 区号
   */
  zone?: string
}
export type ApiSmsSendResp = {
  data: {
    request_id: string
  }
}

export type ApiSmsCheckReq = {
  request_id: string
}
export type ApiSmsCheckResp = {
  data: {
    request_id: string
    status: number
    code: string
    message: string
  }
}

export type ApiSmsSendSyncReq = {
  /**
   * 手机号
   */
  mobile: string
  /**
   * 配置别名
   */
  name?: string
  /**
   * 参数
   */
  params?: string[]
  /**
   * 使用场景
   */
  scene?: string
  /**
   * 所属服务
   */
  service?: string
  /**
   * 区号
   */
  zone?: string
}
export type ApiSmsSendSyncResp = {
  data: {
    code: string
    message: string
    request_id: string
  }
}
