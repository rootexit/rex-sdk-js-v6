export interface Cc {
  /**
   * 抄送人的邮箱
   */
  email: string
  /**
   * 抄送人的名称
   */
  name: string
  key: string
}

export type ApiEmsSendReq = {
  recipient_email: Array<string>
  cc: Array<Cc>
  subject: string
  send_type: 'text/plain' | 'text/html'
  send_body: string
  name?: string
  service?: string
  scene?: string
}
export type ApiEmsSendResp = {
  data: {
    request_id: string
  }
}

export type ApiEmsCheckReq = {
  request_id: string
}
export type ApiEmsCheckResp = {
  data: {
    request_id: string
    status: number
    code: string
    message: string
  }
}

export type ApiEmsSendSyncReq = {
  /**
   * 抄送人数组
   */
  cc: Cc[]
  /**
   * 使用的配置
   */
  name?: string
  /**
   * 收件人数组
   */
  recipient_email: string[]
  /**
   * 使用场景
   */
  scene?: string
  /**
   * 邮件内容
   */
  send_body: string
  /**
   * 邮件类型
   */
  send_type: 'text/plain' | 'text/html'
  /**
   * 所属服务
   */
  service?: string
  /**
   * 邮件主题
   */
  subject: string
}
export type ApiEmsSendSyncResp = {
  data: {
    code: string
    message: string
    request_id: string
  }
}
