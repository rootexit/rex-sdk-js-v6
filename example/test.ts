// 加载环境变量
require('dotenv').config();
import {BaseApiResult} from '../src/types';
import {CodesResp, ZonesResp} from '../src/base/types';

/**
 * CommonJS 和 ES Module 规范引入 TypeScript 类时出现类型提示差异的原因主要与模块系统的解析方式和 TypeScript 的配置有关
 * CommonJS const MyClass = require('./MyClass') 需显式处理类型 依赖 @types 或手动声明
 * ES Module import MyClass from './MyClass' 原生支持类型推断 自动识别 .d.ts 或源码类型
 */
import {RExSdk} from '../src/index';

const sdk = new RExSdk({
    accessKeyId: process.env.ACCESS_KEY_ID as string,
    secretAccessKey: process.env.ACCESS_KEY_SECRET as string,
    env: 'dev'
});

/*sdk.base.codes({}).then((res: BaseApiResult & CodesResp) => {
  console.log('Code Result:', res);
});*/

/*sdk.base.zones({}).then((res: BaseApiResult & ZonesResp) => {
  console.log('zone Result:', res);
});*/

/* sdk.akc.KmsAkcSign({ name: 'test', sign_content: 'cigarette' }).then((res: any) => {
  console.log(res);
}); */

/*sdk.akc.KmsAkcCreateKeychain({name: 'test', cert_type: 'RSA'}).then((res: any) => {
    console.log(res);
});*/

/*sdk.skc.KmsSkcCreateKeychain({name: 'name', algorithm: 'AES-256-GCM'}).then((res: any) => {
    console.log(res);
})*/

/*sdk.mas.CaptchaGenerate({
  key: 'cigarette',
  dot_count: 10,
  max_skew: 10,
  key_long: 10,
  img_width: 120,
  img_height: 40
}).then(res => {
  console.log('🚀 ~ res:', res);
});*/

/*sdk.mas.SmsSend({key: 'default', mobile: ''}).then(res => {
  console.log('🚀 ~ res:', res);
});*/

/*sdk.shortLink.QueryWhereKey({ key: '1nvGySZACAHZQlg1X' }).then(res => {
  console.log('🚀 ~ res:', res);
});*/
/*sdk.shortLink.GetRedirectResult({short_id: '1nvGySZACAHZQlg1X'}).then(res => {
  console.log('🚀 ~ res:', res);
});*/


/* sdk.industry.Query({id: 1}).then((result) => {
  console.log(result);
})*/

/*sdk.shortLink.Query({id: 1}).then((res) => {
  console.log(res)
})*/

/*sdk.tag.Query({id: 1}).then((res) => {
  console.log(res)
})*/
