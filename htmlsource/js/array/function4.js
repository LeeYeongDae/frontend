//콜백 함수 : 함수를 전달인자로 리턴, 추후 호출

function showOK() {
     console.log("동의");
}
function showCancel() {
     console.log("취소");
}
function ask(question, yes, no) { }

ask("동의 ㄱ?", showOK, showCancel);