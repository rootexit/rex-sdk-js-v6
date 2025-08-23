# rex-sdk-js-v6

### 新增和编辑中的必填项以新增为主(不能为空) 编辑中的必填项是为了在调用接口时 携带这些字段(可以为空)

``` javascript
pnpm install rex-sdk-js-v6
```

## 使用说明

``` javascript
import { RExSdk } from 'rex-sdk-js-v6';

const sdk = new RExSdk({
    accessKeyId: 'YOUR_API_KEY',
    secretAccessKey: 'YOUR_API_ACCESSKEY',
    ...options
  });
```

## options 类型

| 参数名        | 类型       | 必填 | 默认值              | 可选值                           | 说明   |
|:-----------|:---------|:---|:-----------------|:------------------------------|:-----|
| `env`      | `string` | 否  | `prod`           | `dev` \| `pre-prod` \| `prod` | 环境   |
| `region`   | `string` | 否  | `cn-shanghai`    |                               | 地区   |
| `version`  | `string` | 否  | `v5`             |                               | 版本   |
| `protocol` | `string` | 否  | `https`          | `https` \| `http`             | 协议   |
| `host`     | `string` | 否  | `根据env使用不同的主机地址` |                               | 主机地址 |

## 基础服务(base)

``` javascript
/**
 * 获取琼霄错误码
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码
 * @param {string} params.svc - 服务标识符
 * @returns {Promise<BaseApiResult & CodesResp>} 返回基础API结果和代码表数据的联合类型
 */
sdk.base.codes().then((res: BaseApiResult & CodesResp) => {
  console.log('codes Result:', res);
});

/**
 * 获取琼霄zones
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码-默认中文
 * @returns {Promise<BaseApiResult & ZonesResp>} 返回基础API结果和代码表数据的联合类型
 */
sdk.base.zones().then((res: BaseApiResult & ZonesResp) => {
  console.log('zones Result:', res);
});
```

## 消息聚合服务(mas)

``` javascript
/**
 * 人机验证【验证码初始化】
 * @param {Object} params - 请求参数对象
 * @param {string} params.service - 服务-域名
 * @param {string} params.type - 类型-login/loginSms/security/register
 * @param {string} params.key - default
 * @returns {Promise<BehavioralVerificationInitResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.mas.base
    .BehavioralVerificationInit({
        service: '',
        type: '',
        key: ''
    })
    .then((res: BehavioralVerificationInitResp & BaseApiResult) => {
        console.log('BehavioralVerificationInitResp Result:', res);
    });

/**
 * 人机验证【验证码校验】
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - 配置key
 * @param {string} params.service - 服务
 * @param {string} params.type - 类型-login/loginSms/security/register
 * @param {string} params.verify_code - 验证码
 * @returns {Promise<BehavioralVerificationVerifyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.mas.base.BehavioralVerificationVerify({
    id: '',
    service: '',
    type: '',
    verify_code: '',
}).then(res => {
    console.log(res)
})

/**
 * 通用短信【初始化】 有接口频率限制
 * @param {Object} params - 请求参数对象
 * @param {string} params.key -
 * @param {string} params.service - 服务
 * @param {string} params.type - 类型-login/loginSms/security/register
 * @param {string} params.zone - 区号
 * @param {string} params.phone - 手机号
 * @returns {Promise<SmsInitResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.mas.base.SmsVerificationInit({
    key: "",
    service: "",
    type: "",
    zone: "",
    phone: "",
}).then(res => {
    console.log(res)
})

/**
 * 通用短信【初始化】 有接口频率限制
 * @param {Object} params - 请求参数对象
 * @param {string} params.verify_code - 验证码
 * @param {string} params.service - 服务
 * @param {string} params.type - 类型-login/loginSms/security/register
 * @param {string} params.zone - 区号
 * @param {string} params.phone - 手机号
 * @returns {Promise<SmsVerifyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.mas.base.SmsVerificationVerify({
    service: '',
    type: '',
    zone: '',
    phone: '',
    verify_code: '',
}).then(res => {
    console.log(res)
})

/**
 * 通用短信【初始化】 有接口频率限制
 * @param {Object} params - （可选） 请求参数对象
 * @param {string} params.key - （可选）
 * @param {number} params.dot_count - （可选） 杂质点数
 * @param {number} params.max_skew - （可选） 最大倾斜度
 * @param {number} params.key_long - （可选） 验证码长度
 * @param {number} params.img_width - （可选） 图片宽度
 * @param {number} params.img_height - （可选） 图片高度
 * @returns {Promise<ApiCaptchaGenerateResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.mas.base.CaptchaGenerate({
    key: "default",
    dot_count: 2,
    max_skew: 3,
    key_long: 4,
    img_width: 120,
    img_height: 40
}).then(res => {
    console.log(res)
})

/**
 * 通用短信【初始化】 有接口频率限制
 * @param {Object} params - 请求参数对象
 * @param {string} params.key - （可选）
 * @param {string} params.mobile - 手机号
 * @param {Array<string>} params.params - （可选）
 * @returns {Promise<ApiSmsSendResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.mas.base.SmsSend({
    mobile: '',
}).then(res => {
    console.log(res)
})
```

## 密钥管理服务(kms)

### 1. 非对称密钥模块(akc)

``` javascript
/**
 * 创建密钥串
 * @param {Object} params - 请求参数对象
 * @param {string} params.cert_type - 算法类型-RSA-2048|RSA-3072|RSA-4096|EC-P224|EC-P256|EC-P384|EC-P521
 * @param {string} params.name - 名称
 * @returns {Promise<KmsAkcCreateKeychainResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.akc.KmsAkcCreateKeychain({
    cert_type: 'RSA-3072',
    name: 'default',
}).then(res => {
    console.log(res)
})

/**
 * 获取公钥
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @returns {Promise<KmsAkcGetKeychainPublicKeyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.akc.KmsAkcGetKeychainPublicKey({
    name: 'default',
}).then(res => {
    console.log(res)
})

/**
 * 签名
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.sign_content - 加密内容
 * @returns {Promise<KmsAkcSignResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.akc.KmsAkcSign({
    name: 'default',
    sign_content: 'strawberry',
}).then(res => {
    console.log(res)
})

/**
 * 校验
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.sign_content - 内容
 * @param {string} params.sign - 加密内容
 * @returns {Promise<KmsAkcVerifyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.akc.KmsAkcVerify({
    name: "default",
    sign_content: "strawberry",
    sign: "eNYoN__CseChBOeKaOltT8UeJXyTPaZUsxOrpXIaL5UXKBZqQIYI_h5GyWWNk11T4YNW7IORygxWv5_Gzg-eAqnPLa_VPSpOGEtiR2mBdJmwyPBJhM0UpLrzcOKemfjDqUR1EYrjYVb3ddkOqcEeZdwoOZFLlgZNrkLUXjZZflWbJ_1Ac54xySkD-xesA4Edeo1nmG2JXCawIqfSL0ec9CpTqqFgpFGGSmrjqIJ6lcbpqPjc46_rmfKwCw-lEzwWBDUMMCPaf5awnicSYPW34MH5Vetwi7nwhe0JCG7H4T7oB3x7RD3SCeIAanLle0Q1xtQxmp1hrd7WXQiWBQTWVz57nE_Hvu2Zn2hJ6XxREF04xM7IQaulbVs4yIxUA6lwzFbv4AM6f4W6TS3S7JeIiPMDCMWE5Vp3Wbsr-4syLRP4061yOWfgWGvTYDQtV4iN62Rgtqb_RhZAsXQW6YCMRSFcpFCMSSbHos1RZ4DU8IrMc4oBjyP2uYP01qtcIIqM",
}).then(res => {
    console.log(res)
})
```

### 2. 对称密钥模块(skc)

``` javascript
/**
 * 创建密钥串
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.algorithm - 密钥串加密算法-AES-128-GCM|AES-192-GCM|AES-256-GCM|AES-128-CBC|AES-192-CBC|AES-256-CBC|AES-128-CCM|AES-192-CCM|AES-256-CCM|AES-128-CTR|AES-192-CTR|AES-256-CTR
 * @returns {Promise<KmsSkcCreateKeychainResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.skc.KmsSkcCreateKeychain({
    algorithm: 'AES-192-GCM',
    name: 'default',
}).then(res => {
    console.log(res)
})

/**
 * 加密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcEncryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.skc.KmsSkcEncrypt({
    name: 'default',
    base_data: 'uWv0O5luUDd1QitSHDirnq04vC6gD0xQDgvU',
}).then(res => {
    console.log(res)
})

/**
 * 批量加密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 内容
 * @returns {Promise<KmsSkcBatchEncryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.skc.KmsSkcBatchEncrypt({
    name: 'default',
    base_data: 'strawberry',
}).then(res => {
    console.log(res)
})

/**
 * 解密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcDecryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.skc.KmsSkcDecrypt({
    name: 'default',
    base_data: 'VYs/2XMG7yMK4fkknAo3g/IUetQl7v58pHniB1syV65h8WulhEhnbxRksQ==',
}).then(res => {
    console.log(res)
})

/**
 * 批量解密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcBatchDecryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.skc.KmsSkcBatchDecrypt({
    name: 'default',
    base_data: 'VYs/2XMG7yMK4fkknAo3g/IUetQl7v58pHniB1syV65h8WulhEhnbxRksQ==',
}).then(res => {
    console.log(res)
})

/**
 * 对比
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcBatchDecryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.kms.skc.KmsSkcCompare(
    [
        {
            name: 'default',
            base_data: 'uWv0O5luUDd1QitSHDirnq04vC6gD0xQDgvU',
        }
    ]
).then(res => {
    console.log(res)
})
```

## 存储管理服务(sas)

``` javascript
/**
 * 查询bucket信息
 * @param {Object} params - 请求参数对象
 * @param {string} params.bucket_key - （可选） 桶名称
 * @returns {Promise<SasQueryBucketResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.sas.base.QueryBucket({
    bucket_key: ''
}).then(res => {
    console.log(res)
})

/**
 * 预签名获取headObject
 * @param {Object} params - 请求参数对象
 * @param {string} params.bucket_key - （可选） 桶名称
 * @param {string} params.path - 地址
 * @returns {Promise<SasPresignerHeadObjectResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.sas.base.PresignerHeadObject({
    bucket_key: '',
    path: ''
}).then(res => {
    console.log(res)
})

/**
 * 预签名获取headObject
 * @param {Object} params - 请求参数对象
 * @param {string} params.bucket_key - （可选） 桶名称
 * @param {string} params.path - 地址
 * @returns {Promise<SasPresignerUploadResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.sas.base.PresignerUpload({
    bucket_key: '',
    path: ''
}).then(res => {
    console.log(res)
})

/**
 * 创建云端已经存在的bucket和配置 例如阿里云的配置项 填写在下面即可
 * @param {Object} params - 请求参数对象
 * @param {string} params.config_key - （可选） 凭证
 * @param {string} params.storage_type - 对象存储的类型-oss|cos|s3
 * @param {string} params.app_id - （可选） cos独有字段
 * @param {string} params.access_key - 访问凭证的key
 * @param {string} params.access_secret - 访问凭证的密钥
 * @param {string} params.bucket_key - （可选） 配置名称
 * @param {string} params.name - 存储桶的名字
 * @param {string} params.region - 存储桶的地区
 * @param {number} params.is_accelerate - 是否开启传输加速-1->否,2-是
 * @returns {Promise<CreateExistBucketAndConfigResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.sas.base.CreateBucketAndConfig({
    config_key: '',
    storage_type: '',
    app_id: '',
    access_key: '',
    access_secret: '',
    bucket_key: '',
    name: '',
    region: '',
    is_accelerate: 0,
    prefix: '',
    static_domain: '',
    cdn_domain: '',
}).then(res => {
    console.log(res)
})

/**
 * 预签名获取headObject
 * @param {Object} params - 请求参数对象
 * @param {string} params.config_key - （可选） 凭证
 * @param {string} params.bucket_key - （可选） 配置
 * @param {string} params.name - 存储桶的名字
 * @param {string} params.region - 存储桶的地区
 * @param {string} params.is_accelerate - 是否开启传输加速-1->否,2-是
 * @param {string} params.prefix - 存储文件夹
 * @param {string} params.static_domain - 静态域名
 * @param {string} params.cdn_domain - cdn加速域名
 * @returns {Promise<CreateExistBucketNoConfigResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.sas.base.CreateBucketNoConfig({
    config_key: '',
    bucket_key: '',
    name: '',
    region: '',
    is_accelerate: 1,
    prefix: '',
    static_domain: '',
    cdn_domain: '',
}).then(res => {
    console.log(res)
})

/**
 * 预签名获取headObject
 * @param {Object} params - 请求参数对象
 * @param {string} params.bucket_key - （可选） 桶名称
 * @param {string} params.path - 地址
 * @returns {Promise<SasPresignerGetObjectResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.sas.base.PresignerGet({
    bucket_key: '',
    path: '',
}).then(res => {
    console.log(res)
})
```

## 第三方聚合服务(tpas)

### 1. 微信公众号

``` javascript

```

## 延迟任务服务

### 1. 周期性任务

``` javascript
/**
 * 添加周期性任务
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 任务名称
 * @param {string} params.spec - cron表达式
 * @param {string} params.webhook - 回调地址
 * @param {string} params.params - 回调参数
 * @param {string} params.secret - 回调密钥
 * @returns {Promise<CtasPeriodicJobAddResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ctas.periodicJob.BehavioralVerificationInit({
    name: '',
    spec: '',
    webhook: '',
    params: '',
    secret: '',
}).then(res => {
    console.log(res)
})

/**
 * 移除周期性任务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - 任务id
 * @returns {Promise<CtasPeriodicJobRemoveResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ctas.periodicJob.BehavioralVerificationVerify({
    id: 9
}).then(res => {
    console.log(res)
})
```

## 用户画像大数据服务(ups)

### 1. 虚拟对象服务

``` javascript
/**
 * 创建 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.object_type - 对象类型
 * @param {string} params.properties - （可选） 静态属性
 * @returns {Promise<ObjectApiCreateResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.Create({
    object_type: "string",
    properties: {
        "age": "string"
    }
}).then(result => {
    console.log(result)
})

/**
 * 删除单个 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @returns {Promise<ObjectApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.Delete({
    id: 111,
}).then(result => {
    console.log(result)
})

/**
 * 批量删除 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.ids - ids
 * @returns {Promise<ObjectApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.DeleteMany({
    ids: [100, 101, 102, 103],
}).then(result => {
    console.log(result)
})

/**
 * 查询单个 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @returns {Promise<ModelObject & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.Query({
    id: 107,
}).then(result => {
    console.log(result)
})

/**
 * 批量查询根据ids 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.ids - ids
 * @returns {Promise<ObjectCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.QueryListWhereIds({
    ids: [107, 108],
}).then(result => {
    console.log(result)
})

/**
 * 批量查询 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {number} params.page - （可选）
 * @param {number} params.page_size - （可选）
 * @param {number} params.start_created_at - （可选）
 * @param {number} params.end_created_at - （可选）
 * @param {string} params.keyword - （可选）
 * @param {number} params.status - （可选）
 * @returns {Promise<ObjectCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.QueryList().then(result => {
    console.log(result)
})

/**
 * 更新基础信息 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @param {string} params.object_type - 对象类型
 * @param {string} params.properties - （可选） 静态属性
 * @returns {Promise<ObjectApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.Update({
    id: 107,
    object_type: 'string',
    properties: {age: 'object'}
}).then(result => {
    console.log(result)
})

/**
 * 查询单个根据对象id 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.object_id - 对象id
 * @returns {Promise<ModelObject & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.QueryWhereObjectId({
    object_id: '1958930840322854912',
}).then(result => {
    console.log(result)
})

/**
 * 更新状态 虚拟对象服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id -
 * @param {string} params.status -
 * @returns {Promise<ObjectApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.base.UpdateStatus({
    id: 107,
    status: 1
}).then(result => {
    console.log(result)
})
```

### 2. 标签服务

``` javascript
/**
 * 创建 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 标签名称
 * @param {string} params.sort - 排序
 * @returns {Promise<TagApiCreateResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.Create({
    name: 'cigarette',
    sort: 10
}).then(result => {
    console.log(result)
})

/**
 * 更新基础信息 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @param {string} params.name - 标签名称
 * @param {string} params.sort - 排序
 * @returns {Promise<TagApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.Update({
    id: 13,
    name: 'strawberry',
    sort: 11
}).then(result => {
    console.log(result)
})

/**
 * 查询单个 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @returns {Promise<ModelTag & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.Query({
    id: 14
}).then(result => {
    console.log(result)
})

/**
 * 批量查询 标签服务
 * @param {Object} params - 请求参数对象
 * @param {number} params.page - （可选）
 * @param {number} params.page_size - （可选）
 * @param {number} params.start_created_at - （可选）
 * @param {number} params.end_created_at - （可选）
 * @param {string} params.keyword - （可选）
 * @param {number} params.status - （可选）
 * @returns {Promise<TagCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.QueryList().then(result => {
    console.log(result)
})

/**
 * 批量查询根据ids 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.ids - ids
 * @returns {Promise<TagCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.QueryListWhereIds({
    ids: [13]
}).then(result => {
    console.log(result)
})

/**
 * 删除单个 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @returns {Promise<TagApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.Delete({
    id: 10
}).then(result => {
    console.log(result)
})

/**
 * 批量删除 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.ids - ids
 * @returns {Promise<TagApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.DeleteMany({
    ids: [12, 11]
}).then(result => {
    console.log(result)
})

/**
 * 更新状态 标签服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @param {string} params.status - status
 * @returns {Promise<TagApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.tag.UpdateStatus({
    id: 14,
    status: 1
}).then(result => {
    console.log(result)
})
```

### 3. 行业服务

``` javascript
/**
 * 创建 行业服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.qualification - 资质文件
 * @param {string} params.qualification_link - （可选） 资质文件的相关link
 * @param {string} params.category_scope - 包含范围
 * @param {string} params.remark - （可选） 备注
 * @param {number} params.parent_id - （可选） 父id
 * @param {number} params.sort - （可选） 排序
 * @returns {Promise<IndustryApiCreateResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.Create({
    name: '建筑企业',
    qualification: 'cigarette',
    category_scope: '建筑',
}).then(result => {
    console.log(result)
})

/**
 * 更新基础信息 行业服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @param {string} params.name - 名称
 * @param {string} params.qualification - 资质文件
 * @param {string} params.qualification_link - 资质文件的相关link
 * @param {string} params.category_scope - 包含范围
 * @param {string} params.remark - 备注
 * @param {number} params.parent_id - 父id
 * @param {number} params.sort - （可选） 排序
 * @returns {Promise<IndustryApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.Update({
    id: 10,
    parent_id: 0,
    qualification_link: "",
    remark: "",
    name: '建筑企业',
    qualification: 'strawberry',
    category_scope: 'all建筑'
}).then(result => {
    console.log(result)
})

/**
 * 更新状态 行业服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @param {string} params.status - status
 * @returns {Promise<IndustryApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.UpdateStatus({
    id: 10,
    status: 1
}).then(result => {
    console.log(result)
})

/**
 * 删除单个 行业服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @returns {Promise<IndustryApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.Delete({
    id: 9
}).then(result => {
    console.log(result)
})

/**
 * 批量删除 行业服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.ids - ids
 * @returns {Promise<IndustryApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.DeleteMany({
    ids: [7, 8]
}).then(result => {
    console.log(result)
})

/**
 * 查询单个 行业服务
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - id
 * @returns {Promise<ModelIndustry & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.Query({
    id: 10
}).then(result => {
    console.log(result)
})

/**
 * 批量查询 行业服务
 * @param {Object} params - 请求参数对象
 * @param {number} params.page - （可选）
 * @param {number} params.page_size - （可选）
 * @param {number} params.start_created_at - （可选）
 * @param {number} params.end_created_at - （可选）
 * @param {string} params.keyword - （可选）
 * @param {number} params.status - （可选）
 * @param {number} params.parent_id - （可选）
 * @param {string} params.only_parent - （可选）
 * @returns {Promise<IndustryCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.QueryList().then(result => {
    console.log(result)
})

/**
 * 批量查询根据ids 行业服务
 * @param {Object} params - 请求参数对象
 * @param {number} params.ids - ids
 * @returns {Promise<IndustryCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.industry.QueryListWhereIds({
    ids: [10]
}).then(result => {
    console.log(result)
})
```

### 4. 短链服务

``` javascript
/**
 * 创建
 * @param {Object} params - 请求参数对象
 * @param {string} params.original_url - 地址
 * @param {1 | 2 | 3} params.sl_type - （可选） 类型-1 -> 一次性短链, 2 -> 有效期短链, 3 -> 永久短链
 * @param {number} params.expire_at_unix - （可选） 过期时间
 * @param {string} params.creator_user_id - （可选） 创建的用户id
 * @returns {Promise<ShortLinkApiCreateResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.Create({
    original_url: 'baidu.com',
    sl_type: 1,
}).then(res => {
    console.log(res)
})

/**
 * 删除单个
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.Delete({
    id: 5
}).then(res => {
    console.log(res)
})

/**
 * 批量删除
 * @param {Object} params - 请求参数对象
 * @param {Array<number>} params.ids - ids
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.DeleteMany({
    ids: [2, 3, 4]
}).then(res => {
    console.log(res)
})

/**
 * 更新基础信息
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @param {string} params.original_url - 地址
 * @param {1 | 2 | 3} params.sl_type - 类型-1 -> 一次性短链, 2 -> 有效期短链, 3 -> 永久短链
 * @param {number} params.expire_at_unix - 过期时间
 * @param {string} params.creator_user_id - 创建的用户id
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.Update({
    id: 8,
    original_url: 'baidu.com',
    sl_type: 1,
    expire_at_unix: 2000,
    creator_user_id: ''
}).then(res => {
    console.log(res)
})

/**
 * 更新状态
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @param {number} params.status - 状态
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.UpdateStatus({
    id: 8,
    status: 1
}).then(res => {
    console.log(res)
})

/**
 * 更新状态
 * @param {Object} params - 请求参数对象
 * @param {number} params.page - 第几页
 * @param {number} params.page_size - 一页多少条
 * @param {number} params.start_created_at - 开始时间
 * @param {number} params.end_created_at - 结束时间
 * @param {string} params.keyword - 关键字搜索
 * @param {number} params.status - 状态
 * @returns {Promise<ShortLinkCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.QueryList().then(res => {
    console.log(res)
})

/**
 * 批量查询根据ids
 * @param {Object} params - 请求参数对象
 * @param {Array<number>} params.ids - ids
 * @returns {Promise<ShortLinkCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.QueryListWhereIds({
    ids: [8]
}).then(res => {
    console.log(res)
})

/**
 * 查询单个
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @returns {Promise<ModelShortLink & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.Query({
    id: 8
}).then(res => {
    console.log(res)
})

/**
 * 根据key查找
 * @param {Object} params - 请求参数对象
 * @param {string} params.key - key
 * @returns {Promise<ModelShortLink & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.QueryWhereKey({
    key: 'hRAQ4caXIhfwbpq3'
}).then(res => {
    console.log(res)
})

/**
 * 获取重定向信息
 * @param {Object} params - 请求参数对象
 * @param {string} params.key - key
 * @returns {Promise<GetRedirectResultResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
sdk.ups.shortLink.GetRedirectResult({
    short_id: 'hRAQ4caXIhfwbpq3'
}).then(res => {
    console.log(res)
})
```
