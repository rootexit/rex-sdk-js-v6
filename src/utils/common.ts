import { type QueryParameterBag } from '@smithy/types'
import { HttpRequest } from '@smithy/types'

// Params 请求 将 number 类型 转换为 string 类型
export function Conversion<T extends Record<string, any>>(params: T) {
  const result: QueryParameterBag = {}
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === 'number') {
      result[key] = String(value)
    } else {
      result[key] = value
    }
  }
  return result
}

// Params 请求 将 URL 改为 拼接的地址
export function Merge(signed: HttpRequest, params: QueryParameterBag) {
  const reqUrl = new URL(`${signed.protocol}/${signed.hostname}${signed.path}`)
  Object.entries(params).forEach(([k, v]) => {
    if (v === null || v === undefined) return
    if (Array.isArray(v)) {
      v.forEach(item => reqUrl.searchParams.append(k, item))
    } else {
      reqUrl.searchParams.append(k, String(v))
    }
  })
  return reqUrl
}
