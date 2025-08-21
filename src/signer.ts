import {SignatureV4} from '@smithy/signature-v4';
import {HttpRequest} from '@smithy/protocol-http';
import {Sha256} from '@aws-crypto/sha256-js';
import type {SDKConfig, SDKRequestParams} from './types';

export async function signRequest(config: SDKConfig, service: string, params: SDKRequestParams): Promise<HttpRequest> {
    const signer = new SignatureV4({
        credentials: {
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey
        },
        service: service, // or "s3", etc.
        region: config.region!,
        sha256: Sha256
    });

    const request = new HttpRequest({
        method: params.method,
        protocol: config.protocol,
        hostname: config.host,
        path: `/rex/${config.version}/apis${params.path}`,
        headers: {
            host: config.host!,
            ...params.headers
        },
    });


    if (params.query) {
        request.query = params.query
    }

    if (params.body) {
        request.body = JSON.stringify(params.body)
    }


    const signed = await signer.sign(request);

    return signed as HttpRequest;
}
