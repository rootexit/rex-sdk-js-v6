// 加载环境变量
import {BehavioralVerificationInitResp} from '../src/mas/types';

require('dotenv').config();
import {BaseApiResult} from '../src/types';
import {CodesResp, ZonesResp} from '../src/base/types';

/**
 * CommonJS 和 ES Module 规范引入 TypeScript 类时出现类型提示差异的原因主要与模块系统的解析方式和 TypeScript 的配置有关
 * CommonJS const MyClass = require('./MyClass') 需显式处理类型 依赖 @types 或手动声明
 * ES Module import MyClass from './MyClass' 原生支持类型推断 自动识别 .d.ts 或源码类型
 */

/**
 * 获取基础代码表数据
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码，默认中文
 * @param {string} params.svc - 服务标识符
 * @returns {Promise<BaseApiResult & CodesResp>} 返回基础API结果和代码表数据的联合类型
 * @throws {Error} 当参数无效或网络请求失败时抛出错误
 */

import {RExSdk} from '../src/index';

const sdk = new RExSdk({
    accessKeyId: process.env.ACCESS_KEY_ID as string,
    secretAccessKey: process.env.ACCESS_KEY_SECRET as string,
    env: 'dev'
});

/**
 * 获取琼霄错误码
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码-默认中文
 * @param {string} params.svc - 服务标识符
 * @returns {Promise<BaseApiResult & CodesResp>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.base.codes({}).then((res: BaseApiResult & CodesResp) => {
    console.log('codes Result:', res);
});*/

/**
 * 获取琼霄zones
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码-默认中文
 * @returns {Promise<BaseApiResult & ZonesResp>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.base.zones({}).then((res: BaseApiResult & ZonesResp) => {
    console.log('zones Result:', res);
});*/

/**
 * 人机验证【验证码初始化】
 * @param {Object} params - 请求参数对象
 * @param {string} params.service - 服务-域名
 * @param {string} params.type - 类型-login/loginSms/security/register
 * @param {string} params.key - default
 * @returns {Promise<BehavioralVerificationInitResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.mas.base
    .BehavioralVerificationInit({
        service: '',
        type: '',
        key: ''
    })
    .then((res: BehavioralVerificationInitResp & BaseApiResult) => {
        console.log('BehavioralVerificationInitResp Result:', res);
    });*/

/**
 * 人机验证【验证码校验】
 * @param {Object} params - 请求参数对象
 * @param {string} params.id - 配置key
 * @param {string} params.service - 服务
 * @param {string} params.type - 类型-login/loginSms/security/register
 * @param {string} params.verify_code - 验证码
 * @returns {Promise<BehavioralVerificationVerifyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.mas.base.BehavioralVerificationVerify({
    id: '',
    service: '',
    type: '',
    verify_code: '',
}).then(res => {
    console.log(res)
})*/

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
/*sdk.mas.base.SmsVerificationInit({
    key: "cigarette",
    service: "https://dev-account.lilsite.com/",
    type: "loginSms",
    zone: "+86",
    phone: "17344880413",
}).then(res => {
    console.log(res)
})*/

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
/*sdk.mas.base.SmsVerificationVerify({
    service: '',
    type: '',
    zone: '',
    phone: '',
    verify_code: '',
}).then(res => {
    console.log(res)
})*/

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
/*sdk.mas.base.CaptchaGenerate({
    key: "cigarette",
    dot_count: 2,
    max_skew: 3,
    key_long: 4,
    img_width: 120,
    img_height: 40
}).then(res => {
    console.log(res)
})*/

/**
 * 通用短信【初始化】 有接口频率限制
 * @param {Object} params - 请求参数对象
 * @param {string} params.key - （可选）
 * @param {string} params.mobile - 手机号
 * @param {Array<string>} params.params - （可选）
 * @returns {Promise<ApiSmsSendResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.mas.base.SmsSend({
    mobile: '',
}).then(res => {
    console.log(res)
})*/

/**
 * 创建密钥串
 * @param {Object} params - 请求参数对象
 * @param {string} params.cert_type - 算法类型-RSA-2048|RSA-3072|RSA-4096|EC-P224|EC-P256|EC-P384|EC-P521
 * @param {string} params.name - 名称
 * @returns {Promise<KmsAkcCreateKeychainResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.akc.KmsAkcCreateKeychain({
    cert_type: 'RSA-3072',
    name: 'cigarette',
}).then(res => {
    console.log(res)
})*/

/**
 * 获取公钥
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @returns {Promise<KmsAkcGetKeychainPublicKeyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.akc.KmsAkcGetKeychainPublicKey({
    name: 'cigarette',
}).then(res => {
    console.log(res)
})*/

/**
 * 签名
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.sign_content - 加密内容
 * @returns {Promise<KmsAkcSignResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.akc.KmsAkcSign({
    name: 'cigarette',
    sign_content: 'strawberry',
}).then(res => {
    console.log(res)
})*/

/**
 * 校验
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.sign_content - 内容
 * @param {string} params.sign - 加密内容
 * @returns {Promise<KmsAkcVerifyResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.akc.KmsAkcVerify({
    name: "cigarette",
    sign_content: "strawberry",
    sign: "eNYoN__CseChBOeKaOltT8UeJXyTPaZUsxOrpXIaL5UXKBZqQIYI_h5GyWWNk11T4YNW7IORygxWv5_Gzg-eAqnPLa_VPSpOGEtiR2mBdJmwyPBJhM0UpLrzcOKemfjDqUR1EYrjYVb3ddkOqcEeZdwoOZFLlgZNrkLUXjZZflWbJ_1Ac54xySkD-xesA4Edeo1nmG2JXCawIqfSL0ec9CpTqqFgpFGGSmrjqIJ6lcbpqPjc46_rmfKwCw-lEzwWBDUMMCPaf5awnicSYPW34MH5Vetwi7nwhe0JCG7H4T7oB3x7RD3SCeIAanLle0Q1xtQxmp1hrd7WXQiWBQTWVz57nE_Hvu2Zn2hJ6XxREF04xM7IQaulbVs4yIxUA6lwzFbv4AM6f4W6TS3S7JeIiPMDCMWE5Vp3Wbsr-4syLRP4061yOWfgWGvTYDQtV4iN62Rgtqb_RhZAsXQW6YCMRSFcpFCMSSbHos1RZ4DU8IrMc4oBjyP2uYP01qtcIIqM",
}).then(res => {
    console.log(res)
})*/

/**
 * 创建密钥串
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.algorithm - 密钥串加密算法-AES-128-GCM|AES-192-GCM|AES-256-GCM|AES-128-CBC|AES-192-CBC|AES-256-CBC|AES-128-CCM|AES-192-CCM|AES-256-CCM|AES-128-CTR|AES-192-CTR|AES-256-CTR
 * @returns {Promise<KmsSkcCreateKeychainResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.skc.KmsSkcCreateKeychain({
    algorithm: 'AES-192-GCM',
    name: 'cigarette',
}).then(res => {
    console.log(res)
})*/

/**
 * 加密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcEncryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.skc.KmsSkcEncrypt({
    name: 'cigarette',
    base_data: 'uWv0O5luUDd1QitSHDirnq04vC6gD0xQDgvU',
}).then(res => {
    console.log(res)
})*/

/**
 * 批量加密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 内容
 * @returns {Promise<KmsSkcBatchEncryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.skc.KmsSkcBatchEncrypt({
    name: 'cigarette',
    base_data: 'strawberry',
}).then(res => {
    console.log(res)
})*/

/**
 * 解密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcDecryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.skc.KmsSkcDecrypt({
    name: 'cigarette',
    base_data: 'VYs/2XMG7yMK4fkknAo3g/IUetQl7v58pHniB1syV65h8WulhEhnbxRksQ==',
}).then(res => {
    console.log(res)
})*/

/**
 * 批量解密
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcBatchDecryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.skc.KmsSkcBatchDecrypt({
    name: 'cigarette',
    base_data: 'VYs/2XMG7yMK4fkknAo3g/IUetQl7v58pHniB1syV65h8WulhEhnbxRksQ==',
}).then(res => {
    console.log(res)
})*/

/**
 * 对比
 * @param {Object} params - 请求参数对象
 * @param {string} params.name - 名称
 * @param {string} params.base_data - 加密内容
 * @returns {Promise<KmsSkcBatchDecryptResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.kms.skc.KmsSkcCompare(
    [
        {
            name: 'cigarette',
            base_data: 'uWv0O5luUDd1QitSHDirnq04vC6gD0xQDgvU',
        }
    ]
).then(res => {
    console.log(res)
})*/

/**
 * 创建
 * @param {Object} params - 请求参数对象
 * @param {string} params.original_url - 地址
 * @param {1 | 2 | 3} params.sl_type - 类型-1 -> 一次性短链, 2 -> 有效期短链, 3 -> 永久短链
 * @param {number} params.expire_at_unix - （可选） 过期时间
 * @param {string} params.creator_user_id - （可选） 创建的用户id
 * @returns {Promise<ShortLinkApiCreateResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.Create({
    original_url: 'baidu.com',
    sl_type: 1,
}).then(res => {
    console.log(res)
})*/

/**
 * 删除单个
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.Delete({
    id: 5
}).then(res => {
    console.log(res)
})*/

/**
 * 批量删除
 * @param {Object} params - 请求参数对象
 * @param {Array<number>} params.ids - ids
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.DeleteMany({
    ids: [2, 3, 4]
}).then(res => {
    console.log(res)
})*/

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
/*sdk.ups.shortLink.Update({
    id: 8,
    original_url: 'baidu.com',
    sl_type: 1,
    expire_at_unix: 2000,
    creator_user_id: ''
}).then(res => {
    console.log(res)
})*/

/**
 * 更新状态
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @param {number} params.status - 状态
 * @returns {Promise<ShortLinkApiOKResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.UpdateStatus({
    id: 8,
    status: 1
}).then(res => {
    console.log(res)
})*/

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
/*sdk.ups.shortLink.QueryList().then(res => {
    console.log(res)
})*/

/**
 * 批量查询根据ids
 * @param {Object} params - 请求参数对象
 * @param {Array<number>} params.ids - ids
 * @returns {Promise<ShortLinkCommonQueryListResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.QueryListWhereIds({
    ids: [8]
}).then(res => {
    console.log(res)
})*/

/**
 * 查询单个
 * @param {Object} params - 请求参数对象
 * @param {number} params.id - id
 * @returns {Promise<ModelShortLink & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.Query({
    id: 8
}).then(res => {
    console.log(res)
})*/

/**
 * 根据key查找
 * @param {Object} params - 请求参数对象
 * @param {string} params.key - key
 * @returns {Promise<ModelShortLink & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.QueryWhereKey({
    key: 'hRAQ4caXIhfwbpq3'
}).then(res => {
    console.log(res)
})*/

/**
 * 获取重定向信息
 * @param {Object} params - 请求参数对象
 * @param {string} params.key - key
 * @returns {Promise<GetRedirectResultResp & BaseApiResult>} 返回基础API结果和代码表数据的联合类型
 */
/*sdk.ups.shortLink.GetRedirectResult({
    short_id: 'hRAQ4caXIhfwbpq3'
}).then(res => {
    console.log(res)
})*/
