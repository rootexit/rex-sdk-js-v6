import { signRequest } from "./signer";
import type { SDKConfig, SDKRequestParams } from "./types";
// import fetch from 'cross-fetch';
import { SignatureV4 } from "@smithy/signature-v4";
import { HttpRequest } from "@smithy/protocol-http";
import { Sha256 } from "@aws-crypto/sha256-js";

export class RExSdk {
  private config: SDKConfig;

  constructor(config: SDKConfig) {
    if (config.env == undefined || config.env == null || config.env == "" || config.env.length <= 0 ) {
      config.env = "prod"; // Default environment
    }
    if (config.region == undefined || config.region == null || config.region == "" || config.region.length <= 0 ) {
      config.region = "cn-shanghai"; // Default region
    }
    if (config.version == undefined || config.version == null || config.version == "" || config.version.length <= 0 ) {
      config.version = "v5"; // Default region
    }
    if (config.protocol == undefined || config.protocol == null || config.protocol == "" || config.protocol.length <= 0 ) {
      config.protocol = "https"; // Default region
    }
    if (config.host == undefined || config.host == null || config.host == "" || config.host.length <= 0 ) {
      if (config.env == "dev") {
        config.host = "dev-api.rootexit.com"; // Default host for dev environment
      } else if (config.env == "pre-prod") {
        config.host = "pre-prod-api.rootexit.com"; // Default host for pre-prod environment
      } else {
        config.host = "api.rootexit.com"; // Default host for prod environment
      }
    }
    this.config = config;
  }

  async request(service:string, params: SDKRequestParams): Promise<any> {
    const signed = await signRequest(this.config, service, params);
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body,
    });
    return res.json();
  }
}