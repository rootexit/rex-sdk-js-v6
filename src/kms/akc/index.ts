import type { SDKConfig, BaseApiResult } from '../../types';
import { signRequest } from '../../signer';
import { KmsAkcCreateKeychainParams, KmsAkcCreateKeychainResult, KmsAkcSignParams, KmsAkcSignResult, KmsAkcVerifyParams, KmsAkcVerifyResult } from './types';

export class AKCApi {
  private config: SDKConfig;
  private service: string;
  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'base';
  }

  async KmsAkcCreateKeychain(params: KmsAkcCreateKeychainParams): Promise<BaseApiResult & KmsAkcCreateKeychainResult> {
    let url = '/kms/akc/createKeychain';
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'GET',
      headers: {}
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  async KmsAkcSign(params: KmsAkcSignParams): Promise<BaseApiResult & KmsAkcSignResult> {
    let url = '/kms/akc/sign';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    });

    const res = await fetch(`${signed.protocol}//${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  async KmsAkcVerify(params: KmsAkcVerifyParams): Promise<BaseApiResult & KmsAkcVerifyResult> {
    let url = '/kms/akc/verify';
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'GET',
      headers: {}
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }
}
