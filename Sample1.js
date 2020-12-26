function replace() {
  // e1要素のテキストを置換
  var e1 = document.getElementById('e1');
  e1.innerText = '置換しました';

  var e2=document.createElement('div');
  e2.setAttribute("id","e2");
  e2.innerText = "e2要素を作成しました";
  document.body.appendChild(e2);

  var btnReplace = document.getElementById('btnReplace');
  var frmMain = document.getElementById("frmMain");
  frmMain.removeChild(btnReplace);
}
