/**
 * @author yfmei
 * 2018/7/11
 */
import log from 'static/js/common/log'

/**
 * 截取字符串的几种方法
 * @param str
 * @param from 从第几位开始截取, 第一位为0
 * @param end 截取到第几位
 * @example subStr("#container", 1) return "container"
 */
function subStr(str, from, end) {
  log(str.sub(from, end)) // 除了这个不同, 其他的结果都一致<str>str</str>
  log(str.substr(from, end))
  log(str.substring(from, end))
  log(str.substr(from, end))
  log(str.substring(from, end))

  return str.substr(from, end)
}

export default subStr
