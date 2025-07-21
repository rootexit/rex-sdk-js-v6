import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    CreateExistBucketAndConfigReq,
    CreateExistBucketAndConfigResp,
    CreateExistBucketNoConfigReq, CreateExistBucketNoConfigResp, SasPresignerGetObjectReq, SasPresignerGetObjectResp,
    SasPresignerHeadObjectReq,
    SasPresignerHeadObjectResp,
    SasPresignerUploadReq,
    SasPresignerUploadResp,
    SasQueryBucketReq,
    SasQueryBucketResp,
} from './types';

export class SASApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'sas';
    }

    /* 查询bucket信息 */
    async QueryBucket(params: SasQueryBucketReq): Promise<BaseApiResult & SasQueryBucketResp> {
        let url = '/sas/queryBucket';

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

    /* 预签名获取headObject */
    async PresignerHeadObject(params: SasPresignerHeadObjectReq): Promise<BaseApiResult & SasPresignerHeadObjectResp> {
        let url = '/sas/presignerHeadObject';

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

    /* 预签名上传 */
    async PresignerUpload(params: SasPresignerUploadReq): Promise<BaseApiResult & SasPresignerUploadResp> {
        let url = '/sas/presignerUpload';

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

    /* 创建云端已经存在的bucket和配置 */
    async CreateBucketAndConfig(params: CreateExistBucketAndConfigReq): Promise<BaseApiResult & CreateExistBucketAndConfigResp> {
        let url = '/sas/createExistBucketAndConfig';

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

    /* 创建云端已经存在的bucket(使用已经存在的配置) */
    async CreateBucketNoConfig(params: CreateExistBucketNoConfigReq): Promise<BaseApiResult & CreateExistBucketNoConfigResp> {
        let url = '/sas/createExistBucketNoConfig';

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

    /* 预签名下载 */
    async PresignerGet(params: SasPresignerGetObjectReq): Promise<BaseApiResult & SasPresignerGetObjectResp> {
        let url = '/sas/presignerGetObject';

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
