export type CtasPeriodicJobAddReq = {
  name: string;
  spec: string;
  webhook: string;
  params: string;
  secret: string;
};

export type CtasPeriodicJobAddResp = {
  data: {
    id: number;
  };
};

export type CtasPeriodicJobRemoveReq = {
  id: number;
};

export type CtasPeriodicJobRemoveResp = {};
