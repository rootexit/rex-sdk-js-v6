// 加载环境变量
require('dotenv').config();

const { RExSdk } = require('../dist/index.js');
const sdk = new RExSdk({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.ACCESS_KEY_SECRET
});

sdk.base.codes().then(res => {
  console.log('Code Result:', res.data.list);
});

sdk.base.zones().then(res => {
  console.log('zone Result:', res);
});
