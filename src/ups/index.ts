import {SDKConfig} from '../types';
import {IndustryApi} from './industry';
import {ShortLinkApi} from './shortLink';
import {TagApi} from './tag';
import {BaseApi} from './base';

export class UPSApi {
    public industry: IndustryApi;
    public shortLink: ShortLinkApi;
    public tag: TagApi;
    public base: BaseApi;

    constructor(config: SDKConfig) {
        this.base = new BaseApi(config);
        this.tag = new TagApi(config);
        this.industry = new IndustryApi(config);
        this.shortLink = new ShortLinkApi(config);
    }
}
