
const $logo = document.getElementsByClassName("logo")
const $companyName = document.getElementsByClassName("companyName")

//会社ロゴをnoneに初期化
for(let i = 0 ; i < $logo.length ; i++){
    $logo[i].style.display = "none";
}

//会社ロゴをnoneならblockでblockならnone
for(let ii = 0 ; ii < $logo.length ; ii++){
    $companyName[ii].addEventListener("click", () => {
        if($logo[ii].style.display === "none") {
            $logo[ii].style.display = "block";
        }else{
            $logo[ii].style.display = "none"
        }
});
}

//会社ロゴをクリックで別タブにyoutube動画を表示
for(let iii = 0 ; iii < $logo.length ; iii++) {
    $logo[iii].addEventListener("click", () => {
        let okNg = window.confirm( document.getElementById(iii).textContent + "のゲームの紹介ページを開きます。");
            if(okNg){
                window.open("http://192.168.1.112/study/pageB.html?" + encodeURIComponent(iii));
            }
    });
}