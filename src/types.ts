export type BaseApiResult = {
  code: number;
  msg: string;
  request_id: string;
  path: string;
};

export interface SDKConfigBase {
  region?: string
  host?: string
  env?: string
  version?: string
  protocol?: string
}

export interface SDKConfig extends SDKConfigBase {
  accessKeyId: string
  secretAccessKey: string
}

export interface SDKRequestParams {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  headers?: Record<string, string>;
  body?: object;
}