import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    BehavioralVerificationInitReq,
    BehavioralVerificationInitResp,
    BehavioralVerificationVerifyReq,
    BehavioralVerificationVerifyResp,
    SmsInitReq, SmsInitResp, SmsVerifyReq, SmsVerifyResp,
} from './types';

export class MASApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'mas';
    }

    /* 人机验证【验证码初始化】 */
    async KmsSkcCreateKeychain(params: BehavioralVerificationInitReq): Promise<BaseApiResult & BehavioralVerificationInitResp> {
        let url = '/mas/bv/init';

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

    /* 人机验证【验证码校验】 */
    async KmsSkcEncrypt(params: BehavioralVerificationVerifyReq): Promise<BaseApiResult & BehavioralVerificationVerifyResp> {
        let url = '/mas/bv/verify';

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

    /* 通用短信【初始化】 */
    async KmsSkcBatchEncrypt(params: SmsInitReq): Promise<BaseApiResult & SmsInitResp> {
        let url = '/mas/sms/init';

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

    /* 通用短信【短信校验】 */
    async KmsSkcDecrypt(params: SmsVerifyReq): Promise<BaseApiResult & SmsVerifyResp> {
        let url = '/mas/sms/verify';

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
