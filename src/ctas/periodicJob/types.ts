export type AddPeriodicJobTasksReq = {
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
  /**
   * cron表达式 秒级,例如 0 0 * 1 * * *
   */
  spec: string;
};

export type AddPeriodicJobTasksResp = {
  data: {
    id: number;
  };
};

export type RemovePeriodicJobTasksReq = {
  id: number;
};

export type RemovePeriodicJobTasksResp = {};
