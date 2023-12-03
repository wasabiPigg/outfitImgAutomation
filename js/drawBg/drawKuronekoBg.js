// 背景描画用
// 取得した色リスト、選択中のチェキフレームの種類
function drawKuronekoBg(pickedColorList) {
    c.drawImage(kuronekoBg01, 0, 0);
    c.drawImage(nullItemImg, 405, 708, 450, 177);
    for (i=0; i<4; i++) {
        c.fillStyle = pickedColorList[i];
        c.fillRect(45+89*i, 758, 89, 9);
    }
}