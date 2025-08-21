import type {SDKConfig} from '../types';
import {BaseApiResult} from '../types';
import {signRequest} from '../signer';
import {CodesReq, CodesResp, ZonesReq, ZonesResp} from './types';

export class BaseApi {
    private config: SDKConfig;
    private service: string;

    constructor(config: SDKConfig) {
        this.config = config;
        this.service = 'base';
    }

    async codes(params: CodesReq): Promise<BaseApiResult & CodesResp> {
        let url = '/base/codes';

        const signed = await signRequest(this.config, this.service, {
            path: url,
            method: 'GET',
            headers: {},
            query: params
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

    async zones(params: ZonesReq): Promise<BaseApiResult & ZonesResp> {
        let url = '/base/zones';
        const signed = await signRequest(this.config, this.service, {
            path: url,
            method: 'GET',
            headers: {},
            query: params
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
