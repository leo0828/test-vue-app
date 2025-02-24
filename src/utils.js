import Decimal from 'decimal.js'

// 默认精度设置
Decimal.config({ precision: 100 })

/**
 * 处理字符串数字：
 * - 除以 (10^(decimalPlaces))
 * - 按指定小数位数显示并四舍五入
 * - 格式化为千分位
 * @param {string} numStr - 输入的字符串数字
 * @param {number} decimalPlaces - 小数点位数，用于计算除数
 * @param {number|null} fractionDigits - 要保留的小数位数，若为空则使用 decimalPlaces
 * @returns {string} 格式化后的结果
 */
function processDecimal(numStr, decimalPlaces, fractionDigits = null) {
  try {
    // 输入验证
    if (!numStr || isNaN(numStr)) throw new Error('Invalid number string')
    if (decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
      throw new Error('decimalPlaces must be a non-negative integer')
    }
    if (fractionDigits !== null && (fractionDigits < 0 || !Number.isInteger(fractionDigits))) {
      throw new Error('fractionDigits must be a non-negative integer or null')
    }

    // 转换为 Decimal 对象
    const decimal = new Decimal(numStr)

    // 计算除数 (10^decimalPlaces)
    const divisor = new Decimal(10).pow(decimalPlaces)

    // 执行除法
    let result = decimal.div(divisor)

    // 如果 fractionDigits 为空，使用 decimalPlaces
    const digitsToShow = fractionDigits !== null ? fractionDigits : decimalPlaces

    // 使用 toFixed 进行四舍五入并保留小数位
    result = result.toFixed(digitsToShow, Decimal.ROUND_HALF_UP)

    // 分割整数部分和小数部分
    let [integerPart, decimalPart] = result.split('.')

    // 格式化整数部分为千分位
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    // 重新拼接整数部分和小数部分
    const formattedResult = decimalPart ? `${integerPart}.${decimalPart}` : integerPart

    return formattedResult
  } catch (error) {
    console.error('Error:', error.message)
    return 'Invalid input'
  }
}

export default processDecimal
