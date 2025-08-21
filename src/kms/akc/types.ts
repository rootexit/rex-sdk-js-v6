export type KmsAkcCreateKeychainResp = {
    data: {
        status: string
        name: string
        sign_method: string
        cert_type: string
        public_key: string
    };
};

export type KmsAkcCreateKeychainReq = {
    cert_type: string;
    name: string;
};

export type KmsAkcGetKeychainPublicKeyResp = {
    data: {
        name: string;
        sign_method: string;
        cert_type: string;
        public_key: string;
    };
};

export type KmsAkcGetKeychainPublicKeyReq = {
    name: string;
};

export type KmsAkcSignResp = {
    data: {
        name: string;
        sign: string;
    };
};

export type KmsAkcSignReq = {
    name: string;
    sign_content: string;
};

export type KmsAkcVerifyResp = {
    data: {
        name: string;
        verify: boolean;
    };
};

export type KmsAkcVerifyReq = {
    name: string;
    sign_content: string;
    sign: string;
};
