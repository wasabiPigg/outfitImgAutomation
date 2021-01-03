// canvasの初期設定
var canvas = document.getElementById('canvas');
var canvasWidth = 900;
var canvasHeight = 900;
// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');
var screenshotWidth = 1125; // iPhone11Proのスクショの幅(デフォ)
var itemBoxLength = 172.5 // iPhone11Proのアイテムの箱の大きさ（デフォ）

var mode = "iPhone11Pro"; // デフォはiPhone11Pro
let itemNum = 10;      // このコーデにいくつのアイテムを使ったか？(プルダウンからとってくる)、デフォ10

// 変数の定義(iPhone11Proをデフォとする)
let itemRow = 6;       // 1列にいくつアイテムが並んでいるか？
let itemMarginX = 14;   // アイテム同士の左右の余白はいくつ？
let itemMarginY = 14;   // アイテム同士の上下の余白はいくつ？
let itemsLeft = 11;    // 左端の余白はいくつ？
let itemsRight = 9;    // 右端の余白はいくつ？
let firstItemX = itemsLeft;
let firstItemY = 1121; // 最初のアイテムのY座標は？
let avatorX = 30;
let avatorY = 30;
let avatorW = 750;
let avatorH = 588;
var itemX = []; // 各アイテムのx座標を格納する配列
var itemY = []; // 各アイテムのy座標を格納する配列

// アバ画像の移動に必要な変数の定義
// ボタンたち
let buttonSize = 50;   // ボタンのサイズ
let buttonMargin = 10; // ボタン同士の間隔
let buttonWeight = 10;  // ボタンのふちの太さ
let btnCenter = { x: canvasWidth - buttonMargin * 3 - buttonWeight * 3 - buttonSize * 1.5, y: buttonMargin * 3 + buttonWeight * 3 + buttonSize * 1.5 };
let upButton = { dx1: btnCenter["x"], dy1: btnCenter["y"] - (buttonSize * 1.5 + buttonWeight * 2 + buttonMargin), dx2: btnCenter["x"] - buttonSize / 2, dy2: btnCenter["y"] - 49, dx3: btnCenter["x"] + buttonSize / 2, dy3: btnCenter["y"] - 49 };
let leftButton = { dx1: btnCenter["x"] - (buttonSize * 1.5 + buttonWeight * 2 + buttonMargin), dy1: btnCenter["y"], dx2: btnCenter["x"] - 49, dy2: btnCenter["y"] - buttonSize / 2, dx3: btnCenter["x"] - 49, dy3: btnCenter["y"] + buttonSize / 2 };
let rightButton = { dx1: btnCenter["x"] + (buttonSize * 1.5 + buttonWeight * 2 + buttonMargin), dy1: btnCenter["y"], dx2: btnCenter["x"] + 49, dy2: btnCenter["y"] - buttonSize / 2, dx3: btnCenter["x"] + 49, dy3: btnCenter["y"] + buttonSize / 2 };
let downButton = { dx1: btnCenter["x"], dy1: btnCenter["y"] + (buttonSize * 1.5 + buttonWeight * 2 + buttonMargin), dx2: btnCenter["x"] - buttonSize / 2, dy2: btnCenter["y"] + 49, dx3: btnCenter["x"] + buttonSize / 2, dy3: btnCenter["y"] + 49 };
// アバの位置とか
let avator;
let avatorCurrent = { dx: 90, dy: 0, w: avatorW, h: avatorY };
let colorCode;

function deviceSuggest(w, h) {
    if (w == 750 && h == 588) {
        if (window.screen.height == 812) { mode = "iPhone11Pro"; }
        else { mode = "iPhone8"; }
    } else if (w == 828 && h == 588) {
        if (window.screen.height == 896) { mode = "iPhoneXSMax"; }
        else { mode = "iPhoneXR" };
    } else if (w == 1668 && h == 1002) { mode = "iPadPro11inch"; }
    else if (w == 872 && h == 588) { mode = "ARROWSF-52A"; }
    else if (w == 884 && h == 588) { mode = "vivo1935"; }
    else { mode = "お使いの端末は対象外です"; }
    console.log(w, h);
    document.getElementById("modeName").textContent = mode;

    decide(mode);
}
function decide(mode) {
    // // デバイスの種類(プルダウンで選択)
    // // 値(数値)を取得
    // const num = document.modeEdit.device.selectedIndex;
    // const num2 = document.modeEdit.itemNum.selectedIndex;
    // // 値(数値)から値(value値)を取得
    // var mode = document.modeEdit.device.options[num].value;
    // itemNum = document.modeEdit.itemNum.options[num2].value;

    // デバイスごとにサイズ調整
    switch (mode) {
        case "iPhone11Pro":
            itemRow = 6;
            itemMarginX = 14;
            itemMarginY = itemMarginX;
            itemsLeft = 11;
            itemsRight = 9;
            avatorX = 30;
            avatorY = 30;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1121;
            break;
        case "iPhone8":
            itemRow = 6;
            itemMarginX = 10;
            itemMarginY = itemMarginX;
            itemsLeft = 6;
            itemsRight = 6;
            avatorX = 0;
            avatorY = 60;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 600;
            break;
        case "iPhoneXR":
            itemRow = 6;
            itemMarginX = 20;
            itemMarginY = 9;
            itemsLeft = 17;
            itemsRight = 17;
            avatorX = 65;
            avatorY = 20;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 762;
            break;
        case "iPhoneXSMax":
            itemRow = 6;
            itemMarginX = 30;
            itemMarginY = 13;
            itemsLeft = 27;
            itemsRight = 26;
            avatorX = 65;
            avatorY = 25;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1145;
            break;
        case "iPadPro11inch":
            itemRow = 10;
            itemMarginX = 23;
            itemMarginY = itemMarginX;
            itemsLeft = 23;
            itemsRight = 295;
            avatorX = 459;
            avatorY = 380;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1014;
            break;
        case "ARROWSF-52A":
            itemRow = 7;
            itemMarginX = 10;
            itemMarginY = 10;
            itemsLeft = 9;
            itemsRight = 8;
            avatorX = 65;
            avatorY = 15;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 833;
            break;
        case "vivo1935":
            itemRow = 7;
            itemMarginX = 11;
            itemMarginY = 10;
            itemsLeft = 9;
            itemsRight = 10;
            avatorX = 65;
            avatorY = 25;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 831;
            break;
        default:
            break;
    }
    console.log(mode, itemRow);
}

// すくしょを読み込み
function showScreenshotImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function (event) {           // ローカルファイルを読込後処理
        var screenshot = new Image();           // screenshotファイルの処理
        screenshot.onload = function () {        // screenshotファイル読込後の処理
            screenshotWidth = this.width;
            console.log("width: ", this.width);
            itemBoxCalc();
            itemXY();
            itemShow(this);
        }
        screenshot.src = event.target.result;   // screenshotを読み込む　
        document.getElementById("imgStatus").textContent = "プレビュー";

    }
    reader.readAsDataURL(files[0]);             // ローカルファイルを読み込む
    chgImgBtn.style.display = "block"; // canvasは表示にする
}

// 透過アバ画像を読み込み
function showAvatorImg(files) {
    result.style.display = "none";
    document.getElementById("imgStatus").textContent = "プレビュー";
    document.getElementById("saveHint").textContent = "";
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function (event) {           // ローカルファイルを読込後処理
        avator = new Image();           // avatorファイルの処理
        avator.onload = function () {        // avatorファイル読込後の処理
            deviceSuggest(avator.naturalWidth, avator.naturalHeight);
            // 背景
            ctx.drawImage(avator, 0, 0, 7, 6);
            var backgroundColor = ctx.getImageData(4, 4, 1, 1);
            colorCode = rgb2colorCode(backgroundColor.data[0], backgroundColor.data[1], backgroundColor.data[2]);
            console.log("backgroundColor: ", backgroundColor.data);
            ctx.fillStyle = colorCode;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(avator, avatorX, avatorY, avatorW, avatorH, 90, 0, avatorW, avatorH);
        }
        avator.src = event.target.result;   // avatorを読み込む　
        document.getElementById("imgStatus").textContent = "プレビュー";
        previewArea.style.display = "none"; // 画像に変更ボタンも非表示
        canvas.style.display = "block"; // canvas表示
    }
    reader.readAsDataURL(files[0]);
}

// アイテムの箱の大きさを計算する
function itemBoxCalc() {
    itemBoxLength = (screenshotWidth - itemsLeft - itemsRight - itemMarginX * (itemRow - 1)) / itemRow;
    console.log("アイテムの箱の大きさ", itemBoxLength);
    console.log("(", screenshotWidth, " - ", itemsLeft, " - ", itemsRight, " - ", itemMarginX, " * (", itemRow, " - 1)) / ", itemRow);
}

// アイテムを切り出すための計算をする
function itemXY() {
    for (let i = 0; i < itemNum; i++) {
        if (i < itemRow) {
            itemX[i] = firstItemX + (itemMarginX + itemBoxLength) * i;
            itemY[i] = firstItemY;
        } else {
            itemX[i] = firstItemX + (itemMarginX + itemBoxLength) * (i - itemRow);
            itemY[i] = firstItemY + itemMarginY + itemBoxLength;
        }
    }
    console.log(itemX, itemY);
}
// アイテムを個別に表示する
function itemShow(image) {
    for (let i = 0; i < itemNum; i++) {
        if (i < 5) {
            ctx.save(); // 現在の状態を保存（クリッピング領域特に指定なし）
            drawsq(180 * i + 3, 530, 172, 172, 10); // 角丸の矩形を描画（クリッピング用）
            ctx.clip();  // (角丸矩形でクリッピング)
            ctx.drawImage(image, itemX[i], itemY[i], itemBoxLength, itemBoxLength, 180 * i + 3, 530, 172, 172);
            ctx.restore(); // クリッピング領域の設定を破棄

            // 所持数隠し
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillRect(180 * i + 108, 665, 59, 30);

            itemColor = ctx.getImageData(180 * i + 3 + 30, 530 + 30, 1, 1)
            var r = itemColor.data[0]
            var g = itemColor.data[1]
            var b = itemColor.data[2]
            if (r==233 && g==234 && b==236) {
                ctx.fillStyle = colorCode;
                ctx.fillRect(180 * i + 3, 720, 532, 172);
                itemNum = i+1;
            }
        } else {
            ctx.save(); // 現在の状態を保存（クリッピング領域特に指定なし）
            drawsq(180 * (i - 5) + 3, 720, 172, 172, 10); // 角丸の矩形を描画（クリッピング用）
            ctx.clip();  // (角丸矩形でクリッピング)
            ctx.drawImage(image, itemX[i], itemY[i], itemBoxLength, itemBoxLength, 180 * (i - 5) + 3, 720, 172, 172);
            ctx.restore(); // クリッピング領域の設定を破棄

            // 所持数隠し
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillRect(180 * (i - 5) + 108, 855, 59, 30);
            
            // アイテムがなければ背景色でぬりつぶし
            itemColor = ctx.getImageData(180 * (i - 5) + 3 + 30, 720 + 30, 1, 1)
            var r = itemColor.data[0]
            var g = itemColor.data[1]
            var b = itemColor.data[2]
            if (r==233 && g==234 && b==236) {
                ctx.fillStyle = colorCode;
                ctx.fillRect(180 * (i - 5) + 3, 720, 172, 172);
                itemNum = i+1;
            }
        }
    }
    showTool()
}

// 角丸の四角形を描画する(クリッピングのため)
function drawsq(x, y, w, h, r) {
    var color = "white";
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.moveTo(x, y + r);  //←①
    ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true);  //←②
    ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, 1);  //←③
    ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, 1);  //←④
    ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, 1);  //←⑤
    ctx.closePath();  //←⑥
    ctx.stroke();  //←⑦
    ctx.fill();  //←⑧
}

// アバターの画像をうごうごするためのツール描画
function showTool() {
    ctx.save();
    ctx.strokeStyle = "white";
    ctx.lineWidth = buttonWeight;
    ctx.fillStyle = "#333";
    drawTriangle(upButton);
    drawTriangle(leftButton);
    drawTriangle(rightButton);
    drawTriangle(downButton);
    ctx.beginPath();
    ctx.arc(btnCenter["x"], btnCenter["y"], buttonSize / 2, 0, Math.PI * 2);
    ctx.closePath();	//三角形の最後の線 closeさせる
    ctx.stroke();  // 線ひく
    ctx.fill();  // 中を塗る
    ctx.restore();
}

/**
 * ツールのクリック判定
 */
canvas.addEventListener("click", e => {
    // マウスの座標をCanvas内の座標とあわせるため
    const rect = canvas.getBoundingClientRect();
    const point = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

    //ボタンの座標を設定
    // キャンバスの表示サイズを取るよ
    let canvasCurrentSize = document.getElementById('canvas').clientWidth;
    // let client_h = document.getElementById('canvas').clientHeight; // 正方形なのでｈはまあいっか
    // 比率を計算するよ
    let ratio = (canvasCurrentSize / canvasWidth);

    // ↑ボタン
    const upsquare = {
        x: upButton["dx2"] * ratio, y: upButton["dy1"] * ratio,  // 座標
        w: (buttonSize + buttonWeight * 2) * ratio, h: (buttonSize + buttonWeight * 2) * ratio   // サイズ
    };
    const upPressed =
        (upsquare.x <= point.x && point.x <= upsquare.x + upsquare.w)  // 横方向の判定
        && (upsquare.y <= point.y && point.y <= upsquare.y + upsquare.h)  // 縦方向の判定

    // ↓ボタン
    const downsquare = {
        x: downButton["dx2"] * ratio, y: downButton["dy2"] * ratio,  // 座標
        w: (buttonSize + buttonWeight * 2) * ratio, h: (buttonSize + buttonWeight * 2) * ratio   // サイズ
    };
    const downPressed =
        (downsquare.x <= point.x && point.x <= downsquare.x + downsquare.w)  // 横方向の判定
        && (downsquare.y <= point.y && point.y <= downsquare.y + downsquare.h)  // 縦方向の判定

    // →ボタン
    const rightsquare = {
        x: rightButton["dx2"] * ratio, y: rightButton["dy2"] * ratio,  // 座標
        w: (buttonSize + buttonWeight * 2) * ratio, h: (buttonSize + buttonWeight * 2) * ratio   // サイズ
    };
    const rightPressed =
        (rightsquare.x <= point.x && point.x <= rightsquare.x + rightsquare.w)  // 横方向の判定
        && (rightsquare.y <= point.y && point.y <= rightsquare.y + rightsquare.h)  // 縦方向の判定

    // ←ボタン
    const leftsquare = {
        x: leftButton["dx1"] * ratio, y: leftButton["dy2"] * ratio,  // 座標
        w: (buttonSize + buttonWeight * 2) * ratio, h: (buttonSize + buttonWeight * 2) * ratio   // サイズ
    };
    const leftPressed =
        (leftsquare.x <= point.x && point.x <= leftsquare.x + leftsquare.w)  // 横方向の判定
        && (leftsquare.y <= point.y && point.y <= leftsquare.y + leftsquare.h)  // 縦方向の判定

    // 〇ボタン
    const resetsquare = {
        x: (btnCenter["x"] - buttonSize / 2 - buttonWeight) * ratio, y: (btnCenter["y"] - buttonSize / 2 - buttonWeight) * ratio,  // 座標
        w: (buttonSize + buttonWeight * 2) * ratio, h: (buttonSize + buttonWeight * 2) * ratio   // サイズ
    };
    const resetPressed =
        (resetsquare.x <= point.x && point.x <= resetsquare.x + resetsquare.w)  // 横方向の判定
        && (resetsquare.y <= point.y && point.y <= resetsquare.y + resetsquare.h)  // 縦方向の判定

    if (upPressed) { avatorRewrite("up"); showTool(); console.log("up"); }
    if (downPressed) { avatorRewrite("down"); showTool(); console.log("down"); }
    if (rightPressed) { avatorRewrite("right"); showTool(); console.log("right"); }
    if (leftPressed) { avatorRewrite("left"); showTool(); console.log("left"); }
    if (resetPressed) { avatorRewrite("reset"); showTool(); console.log("reset"); }

});

function drawTriangle({ dx1, dy1, dx2, dy2, dx3, dy3 }) {
    ctx.beginPath();
    ctx.moveTo(dx1, dy1); //最初の点の場所
    ctx.lineTo(dx2, dy2); //2番目の点の場所
    ctx.lineTo(dx3, dy3); //3番目の点の場所
    ctx.closePath();	//三角形の最後の線 closeさせる
    ctx.stroke();  // 線ひく
    ctx.fill();  // 中を塗る
}

function rgb2colorCode(r, g, b) {
    var r2 = r.toString(16);
    var g2 = g.toString(16);
    var b2 = b.toString(16);
    var colorCode = `#${r2}${g2}${b2}`;
    console.log(colorCode);
    return colorCode;
}

function avatorRewrite(direction) {
    ctx.fillStyle = colorCode;
    ctx.fillRect(0, 0, canvasWidth, 530);
    let moveSize = 10;
    switch (direction) {
        case "up":
            avatorCurrent["dy"] -= moveSize;
            break;
        case "down":
            avatorCurrent["dy"] += moveSize;
            break;
        case "right":
            avatorCurrent["dx"] += moveSize;
            break;
        case "left":
            avatorCurrent["dx"] -= moveSize;
            break;
        case "reset":
            avatorCurrent["dx"] = 90;
            avatorCurrent["dy"] = 0;
            break;
        default:
            break;
    }
    ctx.drawImage(avator, avatorX, avatorY, avatorW, avatorH, avatorCurrent["dx"], avatorCurrent["dy"], avatorW, avatorH);

}

// canvasを画像化
function chgImg() {
    result.style.display = "block"; // resultを表示
    canvas.style.display = "none"; // canvasは非表示にする
    chgImgBtn.style.display = "none"; // 画像に変更ボタンも非表示

    //ツールを消すためにアバターを再描画
    avatorRewrite("none");

    document.getElementById("imgStatus").textContent = "完成！";
    document.getElementById("saveHint").textContent = "画像を長押しで保存できます";
    var png = canvas.toDataURL();
    document.getElementById("result").src = png;
}

jQuery(function ($) {
    $(".picker").spectrum({

        change: function (color) {
            iro = color.toHexString();
            // 指定座標から幅1,高さ1のImageDataオブジェクトの取得。
            ctx.fillStyle = iro;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            $('#canvas').css('background', iro);
        },
    });

});
