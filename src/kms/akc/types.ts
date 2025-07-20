export type KmsAkcCreateKeychainResult = {
  data: {};
};

export type KmsAkcCreateKeychainParams = {
  cert_type: string;
  name: string;
};

export type KmsAkcGetKeychainPublicKeyResult = {
  data: {};
};

export type KmsAkcGetKeychainPublicKeyParams = {
  name: string;
};

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

export type KmsAkcVerifyResult = {
  data: {};
};

export type KmsAkcVerifyParams = {
  name: '';
  sign_content: '';
  sign: '';
};
