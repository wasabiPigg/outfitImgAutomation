function decide(){
    // デバイスの種類(プルダウンで選択)
	// 値(数値)を取得
	const num = document.modeEdit.device.selectedIndex;
	// 値(数値)から値(value値)を取得
	const mode = document.modeEdit.device.options[num].value;
    document.getElementById("span1").textContent = mode; 
}

// 変数の定義
let itemNum = 10;      // このコーデにいくつのアイテムを使ったか？(プルダウンからとってくる)
let itemRow = 6;       // 1列にいくつアイテムが並んでいるか？
let itemMargin = 14;   // アイテム同士の余白はいくつ？
let itemsLeft = 11;    // 左端の余白はいくつ？
let itemsRight = 9;    // 右端の余白はいくつ？
let firstItemX = itemsLeft;
let firstItemY = 1121; // 最初のアイテムのY座標は？

// デバイスごとにサイズ調整
switch (mode) {
    case "iPhone11Pro":
        itemRow = 6;
        itemMargin = 14;
        itemsLeft = 11;
        itemsRight = 9;
        firstItemX = itemsLeft;
        firstItemY = 1121;
        break;

    default:
        break;
}