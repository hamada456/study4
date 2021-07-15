
//const $logo = document.getElementsByClassName("logo")
//const $companyName = document.getElementsByClassName("companyName")

//会社ロゴをnoneに初期化
for(let i = 0 ; i < document.getElementsByClassName("logo").length ; i++){
    document.getElementsByClassName("logo")[i].style.display = "none";
}

//会社ロゴをnoneならblockでblockならnone
for(let ii = 0 ; ii < document.getElementsByClassName("logo").length ; ii++){
    document.getElementsByClassName("companyName")[ii].addEventListener("click", () => {
        if(document.getElementsByClassName("logo")[ii].style.display === "none") {
            document.getElementsByClassName("logo")[ii].style.display = "block";
        }else{
            document.getElementsByClassName("logo")[ii].style.display = "none"
        }
});
}


document.getElementsByClassName("logo")[0].addEventListener("click", () => {
    window.alert("おすすめのゲームを紹介します。");
    window.open("http://192.168.1.112/study/pageB.html?" + encodeURIComponent(0));
});
document.getElementsByClassName("logo")[1].addEventListener("click", () => {
    window.alert("おすすめのゲームを紹介します。");
    window.open("http://192.168.1.112/study/pageB.html?" + encodeURIComponent(1));
});
document.getElementsByClassName("logo")[2].addEventListener("click", () => {
    window.alert("おすすめのゲームを紹介します。");
    window.open("http://192.168.1.112/study/pageB.html?" + encodeURIComponent(2));
});

