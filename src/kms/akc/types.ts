export type KmsAkcCreateKeychainResp = {
    data: {
        id: number,
        jwk: {
            alg: string,
            crv: string,
            kid: string,
            kty: string,
            use: string,
            x: string
        },
        public_key: string
    }
};

export type KmsAkcCreateKeychainReq = {
    key_type: string; // RSA|EC|OKP
    name: string;
    alg: string; // ES256|ES256K|ES384|ES512|EdDSA|PS256|PS384|PS512|RS256|RS384|RS512
    rsa_bits?: number; // 必须是1024的倍数 (这个参数只有RSxxx系列或者PSxxx系列才有用 PS256|PS384|PS512|RS256|RS384|RS512)
};

export type KmsAkcGetKeychainPublicKeyResp = {
    data: {
        public_key: string;
        jwk: string;
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
    sign: string;
};
