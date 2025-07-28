import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    AllowCreateModelIndustry,
    AllowUpdateModelIndustry, AllowUpdateStatusModelIndustry,
    IndustryApiCreateResp,
    IndustryApiFormIdReq,
    IndustryApiJsonIdsReq,
    IndustryApiOKResp, IndustryCommonQueryListResp, IndustryCommonSearchParams, ModelIndustry
} from './types';

export class IndustryApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'ups';
    }

    /* 创建 */
    async Create(params: AllowCreateModelIndustry): Promise<BaseApiResult & IndustryApiCreateResp> {
        let url = '/ups/industry/create';

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
    async Delete(params: IndustryApiFormIdReq): Promise<BaseApiResult & IndustryApiOKResp> {
        let url = '/ups/industry/delete';

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
    async DeleteMany(params: IndustryApiJsonIdsReq): Promise<BaseApiResult & IndustryApiOKResp> {
        let url = '/ups/industry/deleteMany';

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
    async Update(params: AllowUpdateModelIndustry): Promise<BaseApiResult & IndustryApiOKResp> {
        let url = '/ups/industry/update';

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
    async UpdateStatus(params: AllowUpdateStatusModelIndustry): Promise<BaseApiResult & IndustryApiOKResp> {
        let url = '/ups/industry/updateStatus';

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
    async QueryList(params: IndustryCommonSearchParams): Promise<BaseApiResult & IndustryCommonQueryListResp> {
        let url = '/ups/industry/queryList';

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
    async QueryListWhereIds(params: IndustryApiJsonIdsReq): Promise<BaseApiResult & IndustryCommonQueryListResp> {
        let url = '/ups/industry/queryListWhereIds';

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
    async Query(params: IndustryApiFormIdReq): Promise<BaseApiResult & ModelIndustry> {
        let url = '/ups/industry/query';

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
