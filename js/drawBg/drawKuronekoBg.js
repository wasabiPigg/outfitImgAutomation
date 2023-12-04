// 背景描画用
// 取得した色リスト、選択中のチェキフレームの種類
function drawKuronekoBg(pickedColorList) {
    createFrame();
    c.drawImage(cKuronekoBg, 0, 0);
    // c.drawImage(nullItemImg, 405, 708, 450, 177);
    for (i=0; i<4; i++) {
        c.fillStyle = pickedColorList[i];
        c.fillRect(45+89*i, 758, 89, 9);
    }
}

function createFrame() {
    cKuronekoBgCtx.clearRect(0, 0, cKuronekoBg.width, cKuronekoBg.height);
    cKuronekoBgCtx.save();
    cKuronekoBgCtx.shadowColor = "rgba(0,0,0,0.253)";
    cKuronekoBgCtx.shadowOffsetX = 10;
    cKuronekoBgCtx.shadowOffsetY = 10;
    cKuronekoBgCtx.shadowBlur = 8;
    cKuronekoBgCtx.beginPath();
    cKuronekoBgCtx.lineTo(0,0)
    cKuronekoBgCtx.lineTo(900,0);
    cKuronekoBgCtx.lineTo(900,22);
    cKuronekoBgCtx.lineTo(45,22);
    cKuronekoBgCtx.lineTo(45,696);
    cKuronekoBgCtx.lineTo(855,696);
    cKuronekoBgCtx.lineTo(855,22);
    cKuronekoBgCtx.lineTo(900,22);
    cKuronekoBgCtx.lineTo(900,900);
    cKuronekoBgCtx.lineTo(0,900);
    cKuronekoBgCtx.closePath();

    cKuronekoBgCtx.fillStyle = "#f8f8f8";
    cKuronekoBgCtx.fill();
}

function createNullItemImg() {
    kuronekoNullItemImgCtx.translate(26, 26);

    // キラキラマーク
    kuronekoNullItemImgCtx.beginPath();
    let path = new Path2D('M31 15.5C31 19.7817 25.9942 18 21.9942 22C17.9942 26 19.7787 31 15.5 31C11.2196 31 13 26.0006 8.99942 22C5 18.0006 0 19.7801 0 15.5C0 11.2192 5.00471 12.9976 9.00236 9C13 5.00236 11.2204 0 15.5 0C19.7792 0 18 5.00391 21.9961 9C25.9922 12.9961 31 11.2188 31 15.5Z');
    kuronekoNullItemImgCtx.closePath();
    kuronekoNullItemImgCtx.fillStyle = '#d9d9d9';
    kuronekoNullItemImgCtx.fill(path);
}