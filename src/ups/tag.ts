import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    AllowCreateModelTag,
    TagApiCreateResp,
    TagApiFormIdReq,
    TagApiOKResp,
    TagApiJsonIdsReq,
    AllowUpdateModelTag,
    AllowUpdateStatusModelTag,
    TagCommonSearchParams,
    TagCommonQueryListResp,
    ModelTag
} from './types';
import {convertNumbersToStrings} from "../utils";

export class TagApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'ups';
    }

    /* 创建 */
    async Create(params: AllowCreateModelTag): Promise<BaseApiResult & TagApiCreateResp> {
        let url = '/ups/tag/create';

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
    async Delete(params: TagApiFormIdReq): Promise<BaseApiResult & TagApiOKResp> {
        let url = '/ups/tag/delete';

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
    async DeleteMany(params: TagApiJsonIdsReq): Promise<BaseApiResult & TagApiOKResp> {
        let url = '/ups/tag/deleteMany';

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
    async Update(params: AllowUpdateModelTag): Promise<BaseApiResult & TagApiOKResp> {
        let url = '/ups/tag/update';

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
    async UpdateStatus(params: AllowUpdateStatusModelTag): Promise<BaseApiResult & TagApiOKResp> {
        let url = '/ups/tag/updateStatus';

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
    async QueryList(params?: TagCommonSearchParams): Promise<BaseApiResult & TagCommonQueryListResp> {
        let url = '/ups/tag/queryList';

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
    async QueryListWhereIds(params: TagApiJsonIdsReq): Promise<BaseApiResult & TagCommonQueryListResp> {
        let url = '/ups/tag/queryListWhereIds';

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
    async Query(params: TagApiFormIdReq): Promise<BaseApiResult & ModelTag> {
        let url = '/ups/tag/query';

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
}
