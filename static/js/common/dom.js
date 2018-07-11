/**
 * @author yfmei
 * 2018/7/11
 */

/**
 * 操作dom
 * @param selector
 * @returns {*}
 * @example getElement("#container") return
 */
function getElement(selector) {
  if (selector.startsWith('#')) {
    return document.getElementById(selector.substr(1))
  } else if (selector.startsWith('.')) {
    return document.getElementsByClassName(selector.sub(0))
  } else {
    return document.querySelector(selector)
  }
}

/**
 * get element by selector
 * @param selector
 */

function $(selector) {
  return getElement(selector)
}

export default $
