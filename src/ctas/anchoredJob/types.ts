export enum IntervalType {
  Day = "day",
  Hour = "hour",
  Minute = "minute",
  Month = "month",
  Second = "second",
}

export type AddAnchoringTasksReq = {
  /**
     * 起始时间
     */
  anchor_time: string;
  /**
   * 延时类型
   */
  interval_type: "day" | "hour" | "minute" | "month" | "second";
  /**
   * 延时倍数
   */
  interval_value: number;
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

export type AddAnchoringTasksResp = {
  data: {
    id: number;
  };
};

export type RemoveAnchoringTasksReq = {
  id: number;
};

export type RemoveAnchoringTasksResp = {};
