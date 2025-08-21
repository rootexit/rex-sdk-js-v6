export type KmsSkcCreateKeychainReq = {
    algorithm: string
    name: string
}

export type KmsSkcCreateKeychainResp = {
    data: {
        status: string
        name: string
    }
}

export type KmsSkcEncryptReq = {
    name: string
    base_data: string
}

export type KmsSkcEncryptResp = {
    data: {
        name: string
        base_data: string
    }
}

type KmsSkcBatchEncryptReqItem = {
    name: string;
    base_data: string;
}

export type KmsSkcBatchEncryptReq = KmsSkcBatchEncryptReqItem

type KmsSkcBatchEncryptRespItem = {
    name: string;
    base_data: string;
}

export type KmsSkcBatchEncryptResp = {
    data: {};
}

export type KmsSkcDecryptReq = {
    name: string
    base_data: string
}

export type KmsSkcDecryptResp = {
    data: {
        name: string
        base_data: string
    }
}

type KmsSkcBatchDecryptReqItem = {
    name: string
    base_data: string
}

export type KmsSkcBatchDecryptReq = KmsSkcBatchDecryptReqItem

type KmsSkcBatchDecryptRespItem = {
    name: string
    base_data: string
}

export type KmsSkcBatchDecryptResp = {
    data: {};
}

export interface KmsSkcCompareReq {
    name: string
    base_data: string
}

type KmsSkcCompareRespDataItem = {
    status: string
    name: string
    base_data: string
}

export interface KmsSkcCompareResp {
    status: string;
    compare_data: boolean;
    list: KmsSkcCompareRespDataItem[];
}
