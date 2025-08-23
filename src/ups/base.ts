import type {SDKConfig, BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {
    AllowCreateModelObject, AllowUpdateModelObject, AllowUpdateStatusModelObject, ModelObject,
    ObjectApiCreateResp,
    ObjectApiFormIdReq,
    ObjectApiJsonIdsReq,
    ObjectApiOKResp, ObjectApiQueryWhreObjectIdReq, ObjectCommonQueryListResp, ObjectCommonSearchParams
} from './types';
import {convertNumbersToStrings} from "../utils";

export class BaseApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'ups';
    }

    /* 创建 虚拟对象服务 */
    async Create(params: AllowCreateModelObject): Promise<BaseApiResult & ObjectApiCreateResp> {
        let url = '/ups/object/create';

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

    /* 删除单个 虚拟对象服务 */
    async Delete(params: ObjectApiFormIdReq): Promise<BaseApiResult & ObjectApiOKResp> {
        let url = '/ups/object/delete';

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

    /* 批量删除 虚拟对象服务 */
    async DeleteMany(params: ObjectApiJsonIdsReq): Promise<BaseApiResult & ObjectApiOKResp> {
        let url = '/ups/object/deleteMany';

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

    /* 更新基础信息 虚拟对象服务 */
    async Update(params: AllowUpdateModelObject): Promise<BaseApiResult & ObjectApiOKResp> {
        let url = '/ups/object/update';

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

    /* 更新状态 虚拟对象服务 */
    async UpdateStatus(params: AllowUpdateStatusModelObject): Promise<BaseApiResult & ObjectApiOKResp> {
        let url = '/ups/object/updateStatus';

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

    /* 批量查询 虚拟对象服务 */
    async QueryList(params?: ObjectCommonSearchParams): Promise<BaseApiResult & ObjectCommonQueryListResp> {
        let url = '/ups/object/queryList';

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

    /* 批量查询根据ids 虚拟对象服务 */
    async QueryListWhereIds(params: ObjectApiJsonIdsReq): Promise<BaseApiResult & ObjectCommonQueryListResp> {
        let url = '/ups/object/queryListWhereIds';

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

    /* 查询单个 虚拟对象服务 */
    async Query(params: ObjectApiFormIdReq): Promise<BaseApiResult & ModelObject> {
        let url = '/ups/object/query';

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

    /* 查询单个根据对象id 虚拟对象服务 */
    async QueryWhereObjectId(params: ObjectApiQueryWhreObjectIdReq): Promise<BaseApiResult & ModelObject> {
        let url = '/ups/object/queryWhereObjectId';

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
