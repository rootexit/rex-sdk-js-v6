// 加载环境变量
require('dotenv').config();

const { RExSdk } = require('../dist/index.js');
const sdk = new RExSdk({
  accessKeyId: "REx6e3d9840ded9d518",
  secretAccessKey: "519d2c4147788ff3567f4532fbeea257",
  env: "dev",
});

sdk.shortLink.QueryWhereKey({key: "1nvGySZACAHZQlg1X"}).then(res => {
  console.log('Code Result:', res.data);
});

// sdk.base.zones().then(res => {
//   console.log('zone Result:', res);
// });
