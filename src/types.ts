export interface SDKConfig {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  host: string;
  env: string; // e.g., "dev", "prod", "pre-prod"
  version: string; // e.g., "v6"
  protocol: string; // e.g., "https", "http"
}

// service: string;

export interface SDKRequestParams {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  headers?: Record<string, string>;
  body?: string | Uint8Array;
}

export interface SignedRequest {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string | Uint8Array;
}