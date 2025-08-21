export type BehavioralVerificationInitReq = {
    key: string;
    service: string;
    type: string;
};

export type BehavioralVerificationInitResp = {
    data: {
        id: string;
        content: string;
        answer: string;
        img: string;
    };
};

export type BehavioralVerificationVerifyReq = {
    id: string;
    service: string;
    type: string;
    verify_code: string;
};

export type BehavioralVerificationVerifyResp = {
    data: {
        result: boolean;
    };
};

export type SmsInitReq = {
    key: string;
    service: string;
    type: string;
    zone: string;
    phone: string;
};

export type SmsInitResp = {
    data: {
        status: string;
    };
};

export type SmsVerifyReq = {
    service: string;
    type: string;
    zone: string;
    phone: string;
    verify_code: string;
};

export type SmsVerifyResp = {
    data: {
        result: boolean;
    };
};

export type ApiCaptchaGenerateReq = {
    key?: string;
    dot_count?: number;
    max_skew?: number;
    key_long?: number;
    img_width?: number;
    img_height?: number;
};

export type ApiCaptchaGenerateResp = {
    data: {
        key: string;
        id: string;
        content: string;
        answer: string;
        img: string;
    };
};

export type ApiSmsSendReq = {
    key?: string;
    mobile: string;
    params?: Array<string>;
};

export type ApiSmsSendResp = {
    data: {
        requestId: string;
    };
};