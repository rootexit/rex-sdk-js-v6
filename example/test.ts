// 加载环境变量
require('dotenv').config();
import { BaseApiResult } from '../src/types';
import { CodesResp, ZonesResp } from '../src/base/types';

import { RExSdk } from '../src/index';

const sdk = new RExSdk({
  accessKeyId: process.env.ACCESS_KEY_ID as string,
  secretAccessKey: process.env.ACCESS_KEY_SECRET as string,
  env: 'dev'
});

/* sdk.base.codes({}).then((res: BaseApiResult & CodesResp) => {
  console.log('Code Result:', res.data.list);
});

sdk.base.zones({}).then((res: BaseApiResult & ZonesResp) => {
  console.log('zone Result:', res);
}); */
