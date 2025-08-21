import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    AllowCreateModelShortLink,
    AllowUpdateModelShortLink,
    AllowUpdateStatusModelShortLink,
    GetRedirectResultReq,
    GetRedirectResultResp,
    ModelShortLink,
    ShortLinkApiCreateResp,
    ShortLinkApiFormIdReq,
    ShortLinkApiFormKeyReq,
    ShortLinkApiJsonIdsReq,
    ShortLinkApiOKResp,
    ShortLinkCommonQueryListResp,
    ShortLinkCommonSearchParams
} from './types';
import {convertNumbersToStrings} from "../utils";

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
            query: convertNumbersToStrings(params),
        });

        const reqUrl = new URL(`${signed.protocol}/${signed.hostname}${signed.path}`);
        Object.entries(signed.query).forEach(([k, v]) => {
            if (v === null || v === undefined) return;
            if (Array.isArray(v)) {
                v.forEach(item => reqUrl.searchParams.append(k, item));
            } else {
                reqUrl.searchParams.append(k, v);
            }
        });

        const res = await fetch(reqUrl, {
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
    async QueryList(params?: ShortLinkCommonSearchParams): Promise<BaseApiResult & ShortLinkCommonQueryListResp> {
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

        const signed = await signRequest(this.config, this.service, {
            path: url,
            method: 'GET',
            headers: {},
            query: convertNumbersToStrings(params)
        });

        const reqUrl = new URL(`${signed.protocol}/${signed.hostname}${signed.path}`);
        Object.entries(signed.query).forEach(([k, v]) => {
            if (v === null || v === undefined) return;
            if (Array.isArray(v)) {
                v.forEach(item => reqUrl.searchParams.append(k, item));
            } else {
                reqUrl.searchParams.append(k, v);
            }
        });

        const res = await fetch(reqUrl, {
            method: signed.method,
            headers: signed.headers,
            body: signed.body
        });
        return res.json();
    }

    async QueryWhereKey(params: ShortLinkApiFormKeyReq): Promise<BaseApiResult & ModelShortLink> {
        let url = '/ups/shortLink/queryWhereKey';

        const signed = await signRequest(this.config, this.service, {
            path: url,
            method: 'GET',
            headers: {},
            query: params // 这里传入查询参数对象
        });

        const reqUrl = new URL(`${signed.protocol}/${signed.hostname}${signed.path}`);
        Object.entries(signed.query).forEach(([k, v]) => {
            if (v === null || v === undefined) return;
            if (Array.isArray(v)) {
                v.forEach(item => reqUrl.searchParams.append(k, item));
            } else {
                reqUrl.searchParams.append(k, v);
            }
        });

        const res = await fetch(reqUrl, {
            method: signed.method,
            headers: signed.headers,
            body: signed.body
        });

        return res.json();
    }

    async GetRedirectResult(params: GetRedirectResultReq): Promise<BaseApiResult & GetRedirectResultResp> {
        let url = '/ups/shortLink/getRedirectResult';

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