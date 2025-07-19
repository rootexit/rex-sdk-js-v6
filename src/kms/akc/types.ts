export type KmsAkcCreateKeychainResult = {};

export type KmsAkcCreateKeychainParams = {};

export type KmsAkcSignResult = {
  data: {
    name: string;
    sign: string;
  };
};

export type KmsAkcSignParams = {
  name: string;
  sign_content: string;
};

export type KmsAkcVerifyResult = {};

export type KmsAkcVerifyParams = {};
