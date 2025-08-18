import { SDKConfig } from '../types';
import { IndustryApi } from './industry';
import { ShortLinkApi } from './shortLink';
import { TagApi } from './tag';

export class UPSApi {
  public industry: IndustryApi;
  public shortLink: ShortLinkApi;
  public tag: TagApi;

  constructor(config: SDKConfig) {
    this.tag = new TagApi(config);
    this.industry = new IndustryApi(config);
    this.shortLink = new ShortLinkApi(config);
  }
}
