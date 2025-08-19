// 加载环境变量
import { BehavioralVerificationInitResp } from '../src/mas/types';

require('dotenv').config();
import { BaseApiResult } from '../src/types';
import { CodesResp, ZonesResp } from '../src/base/types';

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

import { RExSdk } from '../src/index';

const sdk = new RExSdk({
  accessKeyId: process.env.ACCESS_KEY_ID as string,
  secretAccessKey: process.env.ACCESS_KEY_SECRET as string
});

/**
 * 获取琼霄错误码
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码-默认中文
 * @param {string} params.svc - 服务标识符
 * @returns {Promise<BaseApiResult & CodesResp>} 返回基础API结果和代码表数据的联合类型
 */
/* sdk.base.codes({}).then((res: BaseApiResult & CodesResp) => {
  console.log('codes Result:', res);
}); */

/**
 * 获取琼霄zones
 * @param {Object} params - 请求参数对象
 * @param {string} [params.lang='zh-CN'] - 语言代码-默认中文
 * @returns {Promise<BaseApiResult & ZonesResp>} 返回基础API结果和代码表数据的联合类型
 */
/* sdk.base.zones({}).then((res: BaseApiResult & ZonesResp) => {
  console.log('zones Result:', res);
}); */

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
