export type AllowCreateModelTag = {
    name: string;
    sort: number;
};

export type TagApiCreateResp = {
    data: {
        id: number;
    };
};

export type TagApiFormIdReq = {
    id: number;
};

export type TagApiOKResp = {};

export type TagApiJsonIdsReq = {
    ids: Array<number>;
};

export type AllowUpdateModelTag = {
    id: number;
    name?: string;
    sort?: number;
};

export type AllowUpdateStatusModelTag = {
    id: number;
    status: number;
};

export type TagCommonSearchParams = {
    page?: number;
    page_size?: number;
    start_created_at?: number;
    end_created_at?: number;
    keyword?: string;
    status?: number;
    prefix_keyword?: string;
};

export type TagCommonQueryListResp = {
    data: {
        list: Array<ModelTag>;
        total: number;
        page: number;
        page_size: number;
    };
};

export type ModelTag = {
    id: number;
    name: string;
    sort: number;
    status: number;
    created_at_unix: number;
    updated_at_unix: number;
};

export type AllowCreateModelIndustry = {
    name: string;
    qualification: string;
    qualification_link?: string;
    category_scope: string;
    remark?: string;
    parent_id?: number;
    sort?: number;
};

export type IndustryApiCreateResp = {
    data: {
        id: number;
    };
};

export type IndustryApiFormIdReq = {
    id: number;
};

export type IndustryApiOKResp = {};

export type IndustryApiJsonIdsReq = {
    ids: Array<number>;
};

export type AllowUpdateModelIndustry = {
    id: number;
    name?: string;
    qualification?: string;
    qualification_link: string;
    category_scope?: string;
    remark: string;
    parent_id: number;
    sort?: number;
};

export type AllowUpdateStatusModelIndustry = {
    id: number;
    status: number;
};

export type IndustryCommonSearchParams = {
    page?: number;
    page_size?: number;
    start_created_at?: number;
    end_created_at?: number;
    keyword?: string;
    status?: number;
    parent_id?: number;
    only_parent?: string;
};

export type IndustryCommonQueryListResp = {
    data: {
        list: Array<ModelIndustry>;
        total: number;
        page: number;
        page_size: number;
    };
};

export type ModelIndustry = {
    id: number;
    created_at_unix: number;
    updated_at_unix: number;
    status: number;
    name: string;
    qualification: string;
    qualification_link: string;
    category_scope: string;
    remark: string;
    parent_id: number;
    sort: number;
};

export type AllowCreateModelShortLink = {
    original_url: string;
    sl_type: 1 | 2 | 3;
    expire_at_unix?: number;
    creator_user_id?: string;
};

export type ShortLinkApiCreateResp = {
    data: {
        id: number;
        short_id: string;
    };
};

export type ShortLinkApiFormIdReq = {
    id: number;
};

export type ShortLinkApiOKResp = {};

export type ShortLinkApiJsonIdsReq = {
    ids: Array<number>;
};

export type AllowUpdateModelShortLink = {
    id: number;
    original_url: string;
    sl_type: 1 | 2 | 3;
    expire_at_unix: number;
    creator_user_id: string;
};

export type AllowUpdateStatusModelShortLink = {
    id: number;
    status: number;
};

export type ShortLinkCommonSearchParams = {
    page?: number;
    page_size?: number;
    start_created_at?: number;
    end_created_at?: number;
    keyword?: string;
    status?: number;
};

export type ShortLinkCommonQueryListResp = {
    data: {
        list: Array<ModelShortLink>;
        total: number;
        page: number;
        page_size: number;
    };
};

export type ModelShortLink = {
    id: number;
    created_at_unix: number;
    updated_at_unix: number;
    key: string;
    original_url: string;
    sl_type: number;
    expire_at_unix: number;
    creator_user_id: string;
};

export type ShortLinkApiFormKeyReq = {
    key: string;
};

export type GetRedirectResultReq = {
    short_id: string;
};

export type GetRedirectResultResp = {
    url: string;
};