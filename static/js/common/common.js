/**
 * @author yfmei
 * 2018/7/11
 */
import $ from 'static/js/common/dom'
import log from 'static/js/common/log'

function run(htmlCode, callback) {
  log('run')
  let iframe = $('iframe')
  let editor = $('#editor')
  // editor is div or textarea
  let val = editor.tagName === 'DIV' ? editor.textContent : editor.value
  log(`编辑框的值为 ${val}`)
  if (val === htmlCode) {
    // 当前 textarea 的内容和全局保存的内容一致, 无需更新
    return
  }

  desc(iframe)

  // 更新 iframe
  console.log(`当前编辑内容: ${val} 与保存内容不一致, 更新 `)
  preview(iframe, val)

  // 覆盖全局变量
  callback(val)
}

function desc(iframe) {
  let iwindow = iframe.contentWindow
  let idoc = iwindow.document
  console.log('window', iwindow)// 获取iframe的window对象
  console.log('document', idoc) // 获取iframe的document
  console.log('html', idoc.documentElement)// 获取iframe的html
  console.log('head', idoc.head) // 获取head
  console.log('body', idoc.body) // 获取body
}

/**
 * contentDocument 是追加内容, 需要先清空
 * @param iframe
 */
function clear(iframe) {
  // 以下三种均可, 前两种效果类似
  // iframe.contentDocument.body.innerHTML = ''
  iframe.contentDocument.body.innerText = ''
  // iframe.contentWindow.location.reload(true) // 这种方法间断空白
}

/**
 * iframe有4种赋值的方式
 * 1.先清空, 再用 write写进去(推荐)
 * 2.URL.createObjectURL(blob) 的方式, 短暂闪烁
 * 3.直接用 srcdoc 属性, 闪烁明显, 体验差
 * 4.用 src 指向另一个页面, 要考虑网络因素
 * @param iframe
 * @param val
 */
function preview(iframe, val) {
  // 建议采用 inner 清空, write写入的方法, 无闪烁
  let write = function (iframe) {
    clear(iframe)
    iframe.contentDocument.write(val) // 追加
  }

  let createObjectUrl = function (iframe) {
    // 将CSS, HTML字符串转换为Blob对象
    let blob = new Blob([val], {
      'type': 'text/html'
    })
    // 使用URL.createObjectURL()方法将...
    iframe.src = URL.createObjectURL(blob) // 轻微闪烁
  }

  let srcDoc = function (iframe) {
    iframe.srcdoc = val // 虽然这种方式不用先清空 iframe内容, 但是预览内容每次都会闪烁
  }
  let previewType = 1
  switch (previewType) {
    case 1:
      write(iframe)
      break
    case 2:
      createObjectUrl(iframe)
      break
    case 3:
      srcDoc(iframe)
      break
  }
}

export default run
