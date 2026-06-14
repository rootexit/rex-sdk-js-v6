export type addDelayedJobTasksReq = {
  /**
   * 约定时间，2026-06-11 20:00:01
   */
  execute_at: string;
  max_retry_count: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 参数
   */
  params: string;
  /**
   * 验证签名的密钥
   */
  secret: string;
  /**
   * 回调地址
   */
  webhook: string;
};

export type addDelayedJobTasksResp = {
  data: {
    id: number;
  };
};

export type removeDelayedJobTasksReq = {
  id: number;
};

export type removeDelayedJobTasksResp = {};
