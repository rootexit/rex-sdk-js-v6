/**
 * 将对象中的数字属性值转换为字符串
 * @param obj 要处理的对象
 * @returns 新对象，其中数字值已转换为字符串
 */
export function convertNumbersToStrings<T extends Record<string, any>>(obj: T): {
    [K in keyof T]: T[K] extends number ? string : T[K]
} {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key,
            typeof value === 'number' ? `${value}` : value
        ])
    ) as any;
}