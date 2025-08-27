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

/**
 * 创建密钥串
 *
 * RSA -> PS256|PS384|PS512|RS256|RS384|RS512
 *
 * EC -> ES256|ES256K|ES384|ES512
 *
 * OKP -> EdDSA
 *
 * @param {Object} params - 请求参数对象
 * @param {string} params.key_type - RSA|EC|OKP
 * @param {string} params.name - 名称
 * @param {string} params.alg - ES256|ES256K|ES384|ES512|EdDSA|PS256|PS384|PS512|RS256|RS384|RS512
 * @param {string} params.rsa_bits - （可选） 必须是1024的倍数
 * @returns {Promise<KmsAkcCreateKeychainResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
export type KmsAkcCreateKeychainReq = {
    key_type: string; // RSA|EC|OKP
    name: string;
    alg: string; // ES256|ES256K|ES384|ES512|EdDSA|PS256|PS384|PS512|RS256|RS384|RS512
    rsa_bits?: number; // 必须是1024的倍数 (这个参数只有RSxxx系列或者PSxxx系列才有用 PS256|PS384|PS512|RS256|RS384|RS512)
};

export type KmsAkcGetKeychainPublicKeyResp = {
    data: {
        public_key: string;
        jwk: {
            kty:string
            alg:string
            use:string
            kid:string
            n?:string
            e?:string
            x?:string
            crv?:string
            y?:string
        };
    };
};

export type KmsAkcGetKeychainPublicKeyReq = {
    name?: string;
    kid?: string;
};

export type KmsAkcSignResp = {
    data: {
        name: string;
        sign: string;
    };
};

export type KmsAkcSignReq = {
    name?: string;
    sign_content: string;
    kid?: string;
};

export type KmsAkcVerifyResp = {
    data: {
        name: string;
        verify: boolean;
    };
};

export type KmsAkcVerifyReq = {
    name?: string;
    sign: string;
    kid?: string;
};
