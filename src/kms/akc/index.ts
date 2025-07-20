import type { SDKConfig, BaseApiResult } from '../../types';
import { signRequest } from '../../signer';
import {
  KmsAkcCreateKeychainParams,
  KmsAkcCreateKeychainResult,
  KmsAkcGetKeychainPublicKeyParams,
  KmsAkcGetKeychainPublicKeyResult,
  KmsAkcSignParams,
  KmsAkcSignResult,
  KmsAkcVerifyParams,
  KmsAkcVerifyResult
} from './types';

export class AKCApi {
  private config: SDKConfig;
  private service: string;
  constructor(config: SDKConfig) {
    this.config = config;
    this.service = 'kms';
  }

  /* 创建密钥串 */
  async KmsAkcCreateKeychain(params: KmsAkcCreateKeychainParams): Promise<BaseApiResult & KmsAkcCreateKeychainResult> {
    let url = '/kms/akc/createKeychain';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {}
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 获取公钥 */
  async KmsAkcGetKeychainPublicKey(params: KmsAkcGetKeychainPublicKeyParams): Promise<BaseApiResult & KmsAkcGetKeychainPublicKeyResult> {
    let url = '/kms/akc/getKeychainPublicKey';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
      headers: {}
    });
    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 签名 */
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

    const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
      method: signed.method,
      headers: signed.headers,
      body: signed.body
    });
    return res.json();
  }

  /* 获取公钥 */
  async KmsAkcVerify(params: KmsAkcVerifyParams): Promise<BaseApiResult & KmsAkcVerifyResult> {
    let url = '/kms/akc/verify';

    const signed = await signRequest(this.config, this.service, {
      path: url,
      method: 'POST',
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
