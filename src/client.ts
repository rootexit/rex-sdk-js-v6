import { signRequest } from './signer';
import type { SDKConfig, SDKRequestParams } from './types';
import { BaseApi } from './base/base';
import { AKCApi } from './kms/akc';
import { SKCApi } from './kms/skc';
import { MASApi } from './mas';
import { SASApi } from './sas';
import { TPASApi } from './tpas';
import { PeriodicJobAPI } from './ctas/periodicJob';
import { TagApi } from './ups/tag';
import { IndustryApi } from './ups/industry';
import { ShortLinkApi } from './ups/shortLink';

export class RExSdk {
  private config: SDKConfig;
  public base: BaseApi;
  public akc: AKCApi;
  public skc: SKCApi;
  public mas: MASApi;
  public sas: SASApi;
  public tpas: TPASApi;
  public periodicJob: PeriodicJobAPI;
  public tag: TagApi;
  public industry: IndustryApi;
  public shortLink: ShortLinkApi;

  constructor(config: SDKConfig) {
    if (config.env == undefined || config.env == null || config.env == '' || config.env.length <= 0) {
      config.env = 'prod'; // Default environment
    }
    if (config.region == undefined || config.region == null || config.region == '' || config.region.length <= 0) {
      config.region = 'cn-shanghai'; // Default region
    }
    if (config.version == undefined || config.version == null || config.version == '' || config.version.length <= 0) {
      config.version = 'v5'; // Default region
    }
    if (config.protocol == undefined || config.protocol == null || config.protocol == '' || config.protocol.length <= 0) {
      config.protocol = 'https'; // Default region
    }
    if (config.host == undefined || config.host == null || config.host == '' || config.host.length <= 0) {
      if (config.env == 'dev') {
        config.host = 'dev-api.rootexit.com'; // Default host for dev environment
      } else if (config.env == 'pre-prod') {
        config.host = 'pre-prod-api.rootexit.com'; // Default host for pre-prod environment
      } else {
        config.host = 'api.rootexit.com'; // Default host for prod environment
      }
    }
    this.config = config;
    this.base = new BaseApi(this.config);
    this.akc = new AKCApi(this.config);
    this.skc = new SKCApi(this.config);
    this.mas = new MASApi(this.config);
    this.sas = new SASApi(this.config);
    this.tpas = new TPASApi(this.config);
    this.periodicJob = new PeriodicJobAPI(this.config);
    this.tag = new TagApi(this.config);
    this.industry = new IndustryApi(this.config);
    this.shortLink = new ShortLinkApi(this.config);
  }

  async request(service: string, params: SDKRequestParams): Promise<any> {
    const signed = await signRequest(this.config, service, params);
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }
}
