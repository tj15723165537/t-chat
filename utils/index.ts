/**
 * 检查值是否为空
 * @param value - 要检查的值
 * @returns 如果值为空返回true，否则返回false
 */
export function isEmpty(value: unknown): boolean {
  // 处理 null 和 undefined
  if (value == null) {
    return true;
  }

  // 处理布尔值 - 布尔值不为空
  if (typeof value === 'boolean') {
    return false;
  }

  // 处理数字 - 0不算空，NaN算空
  if (typeof value === 'number') {
    return isNaN(value);
  }

  // 处理字符串 - 空字符串或空白字符串算空
  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  // 处理数组 - 空数组算空
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  // 处理对象 - 空对象或没有自有可枚举属性的对象算空
  if (typeof value === 'object') {
    // 普通对象
    if (value?.constructor === Object) {
      return Object.keys(value).length === 0;
    }
    // 其他对象类型（如Date, RegExp等）不为空
    return false;
  }

  // 处理函数 - 函数不为空
  if (typeof value === 'function') {
    return false;
  }

  // 其他情况视为非空
  return false;
}
