# rex-sdk-js-v6

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

| 参数名     | 类型     | 必填 | 默认值                      | 可选值                        | 说明     |
| :--------- | :------- | :--- | :-------------------------- | :---------------------------- | :------- |
| `env`      | `string` | 否   | `prod`                      | `dev` \| `pre-prod` \| `prod` | 环境     |
| `region`   | `string` | 否   | `cn-shanghai`               |                               | 地区     |
| `version`  | `string` | 否   | `v5`                        |                               | 版本     |
| `protocol` | `string` | 否   | `https`                     | `https` \| `http`             | 协议     |
| `host`     | `string` | 否   | `根据env使用不同的主机地址` |                               | 主机地址 |

## 基础服务(base)
``` javascript
// 获取琼霄错误码
sdk.base.codes({lang?:'',svc?:''})

// 获取琼霄zones
sdk.base.zones({lang?:''})
```

## 消息聚合服务(mas)
``` javascript
// 人机验证【验证码初始化】
sdk.mas.base.BehavioralVerificationInit({
  service: "",
  type: "",
  key: ""
})
```

## 密钥管理服务(kms)

### 1. 非对称密钥模块(akc)
``` javascript

```

### 2. 对称密钥模块(skc)
``` javascript

```

## 存储管理服务(sas)
``` javascript

```

## 第三方聚合服务(tpas)

### 1. 微信公众号
``` javascript

```

## 延迟任务服务

### 1. 周期性任务
``` javascript

```

## 用户画像大数据服务(ups)

### 1. 虚拟对象服务
``` javascript

```

### 2. 标签服务
``` javascript

```

### 3. 行业服务
``` javascript

```

### 4. 短链服务
``` javascript

```
