export type WechatForceRefreshOffiaccountAccessTokenReq = {
    key: string;
};

export type WechatForceRefreshOffiaccountAccessTokenResp = {};

export type WechatOffiaccountGetAccessTokenReq = {
    key?: string;
};

export type WechatOffiaccountGetAccessTokenResp = {
    data: {
        access_token: string;
        expires_in: number;
    };
};

export type WechatOffiaccountGetJsApiTicketReq = {
    key?: string;
};

export type WechatOffiaccountGetJsApiTicketResp = {
    data: {
        access_token: string;
        expires_in: number;
    };
};

export type WechatOffiaccountGenRedirectUrlReq = {
    key?: string;
    // scope: 'snsapi_base' | 'snsapi_userinfo'
    scope: string;
    redirect_uri: string;
    state: string;
};

export type WechatOffiaccountGenRedirectUrlResp = {
    data: {
        scope: string;
        url: string;
        state: string;
    };
};

export type WechatOffiaccountGenShareConfigReq = {
    key?: string;
    debug: boolean;
    share_link: string;
    js_api_list: Array<string>;
};

export type WechatOffiaccountGenShareConfigResp = {
    data: {
        debug: boolean;
        app_id: string;
        timestamp: number;
        nonce_str: string;
        signature: string;
        js_api_list: Array<string>;
    };
};

export type WechatOffiaccountCode2TokenReq = {
    key?: string;
    code: string;
};

export type WechatOffiaccountCode2TokenResp = {
    data: {
        access_token: string;
        expires_in: number;
        refresh_token: string;
        openid: string;
        scope: string;
        is_snapshotuser: number;
        unionid: string;
        errcode: number;
        errmsg: string;
    };
};
