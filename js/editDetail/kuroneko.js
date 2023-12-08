// フレーム画像
inputKuronekoFrameImgElement.addEventListener('change', (e) => {
    kuronekoFrameImgElement.src = URL.createObjectURL(e.target.files[0]);

    // 背景色ボタンの背景に画像を設定する
    const $image = kuronekoFrameImgElement.src;
    const $elementReference = document.getElementById( "frameBtnKuroneko5" );
    $elementReference.style.backgroundImage = "url( " + $image + " )";
    // 背景アイコンが邪魔なので消す
    document.getElementById("frameBtnKuroneko5Ic").style.display = "none";
}, false);

function kuronekoEditDone() {
    redrawCanvas();
}
