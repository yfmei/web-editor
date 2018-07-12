/**
 * @author yfmei
 * 2018/7/11
 */
import $ from 'static/js/common/dom'
import log from 'static/js/common/log'

/**
 * you can use div or textarea to be your editor
 * @param editor
 * @returns {*}
 */
function getEditContent(editor) {
  // editor is div or textarea
  return editor.tagName === 'DIV' ? editor.textContent : editor.value
}

function isChanged(editContent, userCode) {
  return editContent !== userCode
}

function run(userCode, callback) {
  log('run')
  let displayer = $('#result')
  let editor = $('#editor')

  let editContent = getEditContent(editor)

  if (isChanged(editContent, userCode)) {
    console.log(`current content is changed: \n${editContent}\n, let's update and save...`)
    // update
    preview(displayer, editContent)

    // overwrite global content variable
    callback(editContent)
  }
}

/**
 * iframe's context
 * @param iframe
 */
function desc(iframe) {
  let iwindow = iframe.contentWindow
  let idoc = iwindow.document
  console.log('window', iwindow)
  console.log('document', idoc)
  console.log('html', idoc.documentElement)
  console.log('head', idoc.head)
  console.log('body', idoc.body)
}

/**
 * contentDocument.write is an append method,
 * we need to clean up the content first
 * 1.innerText same to innerHtml
 * 2.reload cause blink
 * @param iframe
 */
function iframeCleanUp(iframe) {
  let iframeClearType = 1
  switch (iframeClearType) {
    case 1:
      iframe.contentDocument.body.innerText = ''
      break
    case 2:
      iframe.contentDocument.body.innerHTML = ''
      break
    case 3:
      iframe.contentWindow.location.reload(true)
      break
  }
}

/**
 * there are 4 ways to refresh <iframe>
 * 1.cleanup and write(recommend)
 * 2.iframe.src = URL.createObjectURL(Blob(${editContent})), slight blink
 * 3.iframe.src= another web page
 * 4.iframe.srcdoc, obvious blink, terrible experience
 * @param displayer
 * @param editContent
 */
function iframeRefresh(displayer, editContent) {
  desc(displayer)

  // recommend this way
  let write = function (displayer) {
    iframeCleanUp(displayer)
    displayer.contentDocument.write(editContent)
  }

  let createObjectUrl = function (displayer) {
    // transform the CSS/Html string into Blob object
    let blob = new Blob([editContent], {
      'type': 'text/html'
    })

    // transform Bold object  into URL
    displayer.src = URL.createObjectURL(blob) // slight blink
  }

  let srcDoc = function (displayer) {
    displayer.srcdoc = editContent
  }

  let iframeRefreshType = 1
  switch (iframeRefreshType) {
    case 1:
      write(displayer)
      break
    case 2:
      createObjectUrl(displayer)
      break
    case 3:
      srcDoc(displayer)
      break
  }
}

/**
 * preview by <figure>
 * 1.no blink
 * 2.need to adjust style(For example, content detach from the displayer)
 * @param displayer
 * @param editContent
 */
function figureRefresh(displayer, editContent) {
  displayer.innerHTML = editContent
}

/**
 * we use <iframe> and <figure> to be our displayer
 * @param displayer
 * @param editContent
 */
function preview(displayer, editContent) {
  if (displayer.tagName === 'IFRAME') {
    iframeRefresh(displayer)
  } else {
    figureRefresh(displayer, editContent)
  }
}

export default run
