/**
 * @author yfmei
 * 2018/7/11
 */
import $ from 'static/js/common/dom'
import log from 'static/js/common/log'
import str from 'static/js/common/str'

function run() {
  log('run')
  let iframe = $('iframe')
  let editor = $('#editor')
  // editor is div or textarea
  let val = editor.tagName === 'DIV' ? editor.textContent : editor.value
  iframe.contentDocument.write(val)
}

export default run
