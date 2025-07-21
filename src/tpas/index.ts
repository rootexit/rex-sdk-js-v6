import type { SDKConfig, BaseApiResult } from '../types';
import { signRequest } from '../signer';
import {
  WechatForceRefreshOffiaccountAccessTokenReq,
  WechatForceRefreshOffiaccountAccessTokenResp,
  WechatOffiaccountCode2TokenReq,
  WechatOffiaccountCode2TokenResp,
  WechatOffiaccountGenRedirectUrlReq,
  WechatOffiaccountGenRedirectUrlResp,
  WechatOffiaccountGenShareConfigReq,
  WechatOffiaccountGenShareConfigResp,
  WechatOffiaccountGetAccessTokenReq,
  WechatOffiaccountGetAccessTokenResp,
  WechatOffiaccountGetJsApiTicketReq,
  WechatOffiaccountGetJsApiTicketResp
} from './types';

export class TPASApi {
  private config: SDKConfig;
  private service: string;

  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'tpas';
  }

  /* 强制刷新某个公众号的凭证 */
  async ForceRefreshOffiaccountAccessToken(
    params: WechatForceRefreshOffiaccountAccessTokenReq
  ): Promise<BaseApiResult & WechatForceRefreshOffiaccountAccessTokenResp> {
    let url = '/tpas/wechatOffiaccount/forceRefreshOffiaccountAccessToken';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 获取公众号普通AccessToken */
  async GetAccessToken(params: WechatOffiaccountGetAccessTokenReq): Promise<BaseApiResult & WechatOffiaccountGetAccessTokenResp> {
    let url = '/tpas/wechatOffiaccount/getAccessToken';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 获取公众号JsApiTicket */
  async GetJsApiTicket(params: WechatOffiaccountGetJsApiTicketReq): Promise<BaseApiResult & WechatOffiaccountGetJsApiTicketResp> {
    let url = '/tpas/wechatOffiaccount/getJsApiTicket';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });

    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 生成重定向授权链接 */
  async GenRedirectUrl(params: WechatOffiaccountGenRedirectUrlReq): Promise<BaseApiResult & WechatOffiaccountGenRedirectUrlResp> {
    let url = '/tpas/wechatOffiaccount/genRedirectUrl';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 生成分享配置注入 */
  async GenShareConfig(params: WechatOffiaccountGenShareConfigReq): Promise<BaseApiResult & WechatOffiaccountGenShareConfigResp> {
    let url = '/tpas/wechatOffiaccount/genShareConfig';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 微信公众号code换token */
  async Code2Token(params: WechatOffiaccountCode2TokenReq): Promise<BaseApiResult & WechatOffiaccountCode2TokenResp> {
    let url = '/tpas/wechatOffiaccount/code2token';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }
}
