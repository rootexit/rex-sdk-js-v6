import type {SDKConfig, BaseApiResult} from '../../types';
import {signRequest} from '../../signer';
import {
    KmsSkcBatchDecryptReq, KmsSkcBatchDecryptResp,
    KmsSkcBatchEncryptReq, KmsSkcBatchEncryptResp, KmsSkcCompareReq, KmsSkcCompareResp,
    KmsSkcCreateKeychainReq, KmsSkcCreateKeychainResp, KmsSkcDecryptReq, KmsSkcDecryptResp,
    KmsSkcEncryptReq, KmsSkcEncryptResp,
} from './types';

export class SKCApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'kms';
    }

    /* 创建密钥串 */
    async KmsSkcCreateKeychain(params: KmsSkcCreateKeychainReq): Promise<BaseApiResult & KmsSkcCreateKeychainResp> {
        let url = '/kms/skc/createKeychain';

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

    /* 加密 */
    async KmsSkcEncrypt(params: KmsSkcEncryptReq): Promise<BaseApiResult & KmsSkcEncryptResp> {
        let url = '/kms/skc/encrypt';

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

    /* 批量加密 */
    async KmsSkcBatchEncrypt(params: KmsSkcBatchEncryptReq): Promise<BaseApiResult & KmsSkcBatchEncryptResp> {
        let url = '/kms/skc/batchEncrypt';

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

    /* 解密 */
    async KmsSkcDecrypt(params: KmsSkcDecryptReq): Promise<BaseApiResult & KmsSkcDecryptResp> {
        let url = '/kms/skc/decrypt';

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

    /* 批量解密 */
    async KmsSkcBatchDecrypt(params: KmsSkcBatchDecryptReq): Promise<BaseApiResult & KmsSkcBatchDecryptResp> {
        let url = '/kms/skc/batchDecrypt';

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

    /* 对比 */
    async KmsSkcCompare(params: Array<KmsSkcCompareReq>): Promise<BaseApiResult & KmsSkcCompareResp> {
        let url = '/kms/skc/compare';

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
