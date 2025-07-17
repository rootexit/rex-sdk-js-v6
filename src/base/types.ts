export type CodesReq = {
    lang?: string;
    svc?: string
}

export type ModelCode ={
    code: string;
    num: number;
    msg: string
}

export type CodesResp = {
    data: {
        list?: ModelCode[];
        total?: number;
        page?: number;
        page_size?: number;
    }
}

export type ZonesReq = {
    lang?:string;
}

export type ZonesResp = {
    data: {
        list?: ModelZone[];
        total?: number;
        page?: number;
        page_size?: number;
    }
}

type ModelZone = {
    label: string;
    code: string;
    area: string;
}