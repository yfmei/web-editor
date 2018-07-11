/**
 * @author yfmei
 * 2018/7/11
 */
function run() {

    let iframe = $("iframe")
    let editor = $("#editor")

    // editor is div or textarea
    let code = editor.tagName === "DIV" ? editor.textContent : editor.value
    iframe.contentDocument.write(code)
}