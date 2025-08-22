export type SasQueryBucketReq = {
    bucket_key?: string
}

export type SasQueryBucketResp = {
    data: {
        name: string
        prefix: string
        region: string
        bucket_internet_domain: string
        bucket_internal_domain: string
        is_accelerate: number
        bucket_accelerate_domain: string
        static_domain: string
        cdn_domain: string
    }
}

export type SasPresignerHeadObjectReq = {
    bucket_key?: string
    path: string
}

export type SasPresignerHeadObjectResp = {
    data: {
        url: string
        method: string
    }
}

export type SasPresignerUploadReq = {
    bucket_key?: string
    path: string
}

export type SasPresignerUploadResp = {
    data: {
        url: string
        fields: { [key: string]: string };
    }
}

export type CreateExistBucketAndConfigReq = {
    config_key?: string
    storage_type: string
    app_id?: string
    access_key: string
    access_secret: string
    bucket_key?: string
    name: string
    region: string
    is_accelerate: number
    prefix: string
    static_domain: string
    cdn_domain: string
}

export type CreateExistBucketAndConfigResp = {}

export type CreateExistBucketNoConfigReq = {
    config_key?: string
    bucket_key?: string
    name: string
    region: string
    is_accelerate: number
    prefix: string
    static_domain: string
    cdn_domain: string
}

export type CreateExistBucketNoConfigResp = {}

export type SasPresignerGetObjectReq = {
    bucket_key?: string
    path: string
}

export type SasPresignerGetObjectResp = {
    data: {
        url: string
        method: string
    }
}
