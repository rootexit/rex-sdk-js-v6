import { SDKConfig } from '../types';
import { CredentialConfigApi } from './credential_config';

export class CredentialsApi {
  public credentialConfig: CredentialConfigApi;

  constructor(config: SDKConfig) {
    this.credentialConfig = new CredentialConfigApi(config);
  }
}
