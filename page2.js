
//URLの?以降を取得
let pageNumB = window.location.search;

//一文字目の?を取り除く
pageNumB = pageNumB.substring(1);

//?x番のyoutube動画のみ表示
document.getElementsByClassName("youtube")[pageNumB].style.display = "block";