# rex-sdk-js-v6

```
# pnpm
pnpm install rex-sdk-js-v6
```

## 使用说明

```
import { RExSdk } from 'rex-sdk-js-v6';


const SDK = new RExSdk({
    accessKeyId: 'YOUR_API_KEY',
    secretAccessKey: 'YOUR_API_ACCESSKEY',
    ...options
  });


```

## options 类型

| 参数名     | 类型     | 必填 | 默认值              | 可选值                        | 说明     |
| :--------- | :------- | :--- | :------------------ | :---------------------------- | :------- |
| `env`      | `string` | 否   | `prod`              | `dev` \| `pre-prod` \| `prod` | 环境     |
| `region`   | `string` | 否   | `cn-shanghai`       |                               | 地区     |
| `version`  | `string` | 否   | `v5`                |                               | 版本     |
| `protocol` | `string` | 否   | `https`             | `https` \| `http`             | 协议     |
| `host`     | `string` | 否   | `根据env使用不同值` |                               | 主机地址 |
