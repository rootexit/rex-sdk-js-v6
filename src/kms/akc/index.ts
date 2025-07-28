import type {SDKConfig, BaseApiResult} from '../../types';
import {signRequest} from '../../signer';
import {
    KmsAkcCreateKeychainReq, KmsAkcCreateKeychainResp,
    KmsAkcGetKeychainPublicKeyReq, KmsAkcGetKeychainPublicKeyResp,
    KmsAkcSignReq, KmsAkcSignResp,
    KmsAkcVerifyReq, KmsAkcVerifyResp,
} from './types';

export class AKCApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'kms';
    }

    /* 创建密钥串 */
    async KmsAkcCreateKeychain(params: KmsAkcCreateKeychainReq): Promise<BaseApiResult & KmsAkcCreateKeychainResp> {
        let url = '/kms/akc/createKeychain';

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
    async KmsAkcGetKeychainPublicKey(params: KmsAkcGetKeychainPublicKeyReq): Promise<BaseApiResult & KmsAkcGetKeychainPublicKeyResp> {
        let url = '/kms/akc/getKeychainPublicKey';

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

    /* 签名 */
    async KmsAkcSign(params: KmsAkcSignReq): Promise<BaseApiResult & KmsAkcSignResp> {
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

    /* 校验 */
    async KmsAkcVerify(params: KmsAkcVerifyReq): Promise<BaseApiResult & KmsAkcVerifyResp> {
        let url = '/kms/akc/verify';

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
