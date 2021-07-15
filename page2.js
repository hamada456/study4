
//URLの?以降を取得
let pageNumB = window.location.search;
//?を取り除く
pageNumB = pageNumB.substring(1);
//?x
document.getElementsByClassName("youtube")[pageNumB].style.display = "block";