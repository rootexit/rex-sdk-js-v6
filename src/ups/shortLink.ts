import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    AllowCreateModelShortLink,
    AllowUpdateModelShortLink, AllowUpdateStatusModelShortLink, ModelShortLink,
    ShortLinkApiCreateResp,
    ShortLinkApiFormIdReq,
    ShortLinkApiJsonIdsReq,
    ShortLinkApiOKResp, ShortLinkCommonQueryListResp, ShortLinkCommonSearchParams
} from './types';

export class ShortLinkApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'ups';
    }

    /* 创建 */
    async Create(params: AllowCreateModelShortLink): Promise<BaseApiResult & ShortLinkApiCreateResp> {
        let url = '/ups/shortLink/create';

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

    /* 删除单个 */
    async Delete(params: ShortLinkApiFormIdReq): Promise<BaseApiResult & ShortLinkApiOKResp> {
        let url = '/ups/shortLink/delete';

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

    /* 批量删除 */
    async DeleteMany(params: ShortLinkApiJsonIdsReq): Promise<BaseApiResult & ShortLinkApiOKResp> {
        let url = '/ups/shortLink/deleteMany';

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

    /* 更新基础信息 */
    async Update(params: AllowUpdateModelShortLink): Promise<BaseApiResult & ShortLinkApiOKResp> {
        let url = '/ups/shortLink/update';

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

    /* 更新状态 */
    async UpdateStatus(params: AllowUpdateStatusModelShortLink): Promise<BaseApiResult & ShortLinkApiOKResp> {
        let url = '/ups/shortLink/updateStatus';

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

    /* 批量查询 */
    async QueryList(params: ShortLinkCommonSearchParams): Promise<BaseApiResult & ShortLinkCommonQueryListResp> {
        let url = '/ups/shortLink/queryList';

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

    /* 批量查询根据ids */
    async QueryListWhereIds(params: ShortLinkApiJsonIdsReq): Promise<BaseApiResult & ShortLinkCommonQueryListResp> {
        let url = '/ups/shortLink/queryListWhereIds';

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

    /* 查询单个 */
    async Query(params: ShortLinkApiFormIdReq): Promise<BaseApiResult & ModelShortLink> {
        let url = '/ups/shortLink/query';

        const queryString = new URLSearchParams(String(params)).toString();
        if (queryString) {
            url += `?${queryString}`;
        }

        const signed = await signRequest(this.config, this.service, {
            path: url,
            method: 'GET',
            headers: {},
        });
        const res = await fetch(`${signed.protocol}/${signed.hostname}${signed.path}`, {
            method: signed.method,
            headers: signed.headers,
            body: signed.body
        });
        return res.json();
    }
}
