// おしらせ（あれば）
let bug = '';
if (bug != "") {
    document.getElementById("bug").style = "block";
    document.getElementById("bug").textContent = bug;
}

let news = '';
if (news != "") {
    document.getElementById("news").style = "block";
    document.getElementById("news").textContent = news; 
}

// canvasの初期設定
var canvas = document.getElementById('canvas');
var canvasWidth = 900;
var canvasHeight = 900;
// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');
var screenshotWidth // iPhoneX, iPhoneXs, iPhone11Proのスクショの幅(デフォ)
var screenshotHeight
var itemBoxLength = 172.5 // iPhoneX, iPhoneXs, iPhone11Proのアイテムの箱の大きさ（デフォ）

var mode = "iPhoneX, iPhoneXs, iPhone11Pro"; // デフォはiPhoneX, iPhoneXs, iPhone11Pro
let itemNum = 10;      // このコーデにいくつのアイテムを使ったか？(プルダウンからとってくる)、デフォ10

// 変数の定義(iPhoneX, iPhoneXs, iPhone11Proをデフォとする)
let itemRow = 6;       // 1列にいくつアイテムが並んでいるか？
let itemMarginX = 13;   // アイテム同士の左右の余白はいくつ？
let itemMarginY = 13;   // アイテム同士の上下の余白はいくつ？
let itemsLeft = 10;    // 左端の余白はいくつ？
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
var avator = {
    image: 0,
    topX: 0, topY: 0,
    leftX: 0, leftY: 0, rightX: 0, rightY: 0,
    startX: 0, startY: 0, width: 0, height: 0,
    sx: 0, sy: 0, sw: 0, sh: 0, dx: 0, dy: 0, dw: 0, dh: 0,
    shadow: false,
    border: false
};
let screenshot;
let screenshotsrc;
let avatorCurrent = { dx: 90, dy: 0, w: avatorW, h: avatorY };
let colorCode;
// ログ用
var logItemBoxColor = [];

// シルエット作成用
var silhouetteImgData;
var silhouetteData;

// 背景画像用
var backgroundImg;
var isVisibleBackgroundImg;

// 背景色の選択
let suggestColors = []; // 3つくらい候補をつっこむ
let colorBoxMargin = 10;
let colorBoxCriteria = { x: 100, y: 80 };
let colorBox = {
    x1: colorBoxCriteria.x, y1: colorBoxCriteria.y,
    x2: colorBoxCriteria.x, y2: colorBoxCriteria.y + colorBoxMargin * 2 + buttonSize * 2,
    x3: colorBoxCriteria.x, y3: colorBoxCriteria.y + colorBoxMargin * 4 + buttonSize * 4,
    x4: colorBoxCriteria.x, y4: colorBoxCriteria.y + colorBoxMargin * 6 + buttonSize * 6
};

function deviceSuggest(w, h) {
    if (w == 750 && h == 588) {
        if (window.screen.height == 812) { mode = "iPhoneX, iPhoneXs, iPhone11Pro"; }
        else if (window.screen.height == 844) {mode = "iPhone12";}
        else { mode = "iPhone6, iPhone6s, iPhone7, iPhone8, iPhoneX, iPhoneXs, iPhone11Pro, iPhone12, iPhoneSE2"; }
    } else if (w == 828 && h == 588) {
        mode = "iPhoneXR, iPhone11, iPhone11ProMax, iPhoneXsMax";
        // if (window.screen.height == 896) { mode = "iPhoneXR, iPhone11, iPhone11ProMax, iPhoneXsMax"; }
        // else { mode = "iPhoneXSMax" };
    } else if (w == 1668 && h == 1002) { mode = "iPadPro11inch"; }
    else if (w == 872 && h == 588) { mode = "ARROWSF-52A, AQUOSzero2, Xperia XZ3"; }
    else if (w == 884 && h == 588) { mode = "vivo1935, GalaxyS20+5G"; }
    else if (w == 795 && h == 588) { mode = "HUAWEInova2, pixel3"; }
    else if (w == 782 && h ==588) { mode = "Xperia5Ⅱ"; }
    else if (w == 898 && h ==588) { mode = "Galaxy Note9, Galaxy S10+"; }
    else if (w == 859 && h ==588) { mode = "HW-01K"; }
    else if (w == 846 && h == 588){ mode = "Galaxys10"; }
    else if (w == 794 && h == 588){ mode = "pixel 3a"; }
    else if (w == 821 && h == 588){ mode = "Galaxy S20 5G SC-51A, XPERIA SOV36"; }
    else if (w == 769 && h == 588){ mode = "SONY Xperia SO-41A"; }
    else if (w == 744 && h == 588){ mode = "AQUOS Xx3 mini"; }
    else if (w == 1620 && h == 1002){ mode = "iPad 第7世代　10.2インチ"; }
    else if (w == 808 && h == 588){ mode = "HUAWEI P20 lite"; }
    else if (w == 718 && h == 588){ mode = "AQUOS R2 compact"}
    // 新サイズ対応
    else if (w == 780 && h == 642){ mode = "iPhone12(アプデ後)"}
    else if (w == 750 && h == 647){ mode = "iPhone12mini(アプデ後)"}
    else if (w == 750 && h == 635){ mode = "iPhone11Pro(アプデ後)"}
    else if (w == 828 && h == 643){ mode = "iPhoneXR(アプデ後)"}
    else if (w == 1731 && h == 1002){ mode = "szj-js202"}
    else if (w == 856 && h == 641){ mode = "iPhone12ProMax(アプデ後)"}
    else if (w == 1640 && h == 1002){ mode = "iPad Air第四世代(アプデ後)"}
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

    // デバイスごとにサイズ調整。break忘れ気を付けて
    switch (mode) {
        case "iPhoneX, iPhoneXs, iPhone11Pro":
            itemRow = 6;
            itemMarginX = 13;
            itemMarginY = 13;
            itemsLeft = 10;
            itemsRight = 9;
            avatorX = 30;
            avatorY = 30;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1121;
            break;
        case "iPhone6, iPhone6s, iPhone7, iPhone8, iPhoneX, iPhoneXs, iPhone11Pro, iPhone12, iPhoneSE2":
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
        case "iPhoneXR, iPhone11, iPhone11ProMax, iPhoneXsMax":
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
            itemsLeft = 20;
            itemsRight = 295;
            avatorX = 459;
            avatorY = 380;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1014;
            break;
        case "ARROWSF-52A, AQUOSzero2, Xperia XZ3":
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
        case "vivo1935, GalaxyS20+5G":
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
        case "HUAWEInova2, pixel3":
            itemRow = 6;
            itemMarginX = 20;
            itemMarginY = 11;
            itemsLeft = 17;
            itemsRight = 19;
            firstItemX = itemsLeft;
            firstItemY = 885;
            break;
        case "Xperia5Ⅱ":
            itemRow = 6;
            itemMarginX = 18;
            itemMarginY = 11;
            itemsLeft = 15;
            itemsRight = 16;
            firstItemX = itemsLeft;
            firstItemY = 890;
            break;
        case "Galaxy Note9, Galaxy S10+":
            itemRow = 7;
            itemMarginX = 14;
            itemMarginY = 10;
            itemsLeft = 11;
            itemsRight = 12;
            firstItemX = itemsLeft;
            firstItemY = 784;
            console.log("アイテムの横の数", itemRow);
            console.log("アイテムのmargin", itemMarginX, itemMarginY);
            console.log("アイテムの最初のY座標", firstItemY);
            break;
        case "AQUOSzero2":
            itemRow = 7;
            itemMarginX = 10;
            itemMarginY = 10;
            itemsLeft = 8;
            itemsRight = 8;
            firstItemX = itemsLeft;
            firstItemY = 814;
            break;
        case "HW-01K":
            itemRow = 6;
            itemMarginX = 30;
            itemMarginY = 11;
            itemsLeft = 28;
            itemsRight = 28;
            firstItemX = itemsLeft;
            firstItemY = 834;
            break;
        case "Galaxys10":
            itemRow = 6;
            itemMarginX = 29;
            itemMarginY = 10;
            itemsLeft = 26;
            itemsRight = 27;
            firstItemX = itemsLeft;
            firstItemY = 876;
            break;
        case "pixel 3a":
            itemRow = 6;
            itemMarginX = 20;
            itemMarginY = 11;
            itemsLeft = 17;
            itemsRight = 18;
            firstItemX = itemsLeft;
            firstItemY = 870;
            break;
        case "Galaxy S20 5G SC-51A, XPERIA SOV36":
            itemRow = 6;
            itemMarginX = 24;
            itemMarginY = 11;
            itemsLeft = 22;
            itemsRight = 23;
            firstItemX = itemsLeft;
            firstItemY = 866;
            break;
        case "SONY Xperia SO-41A":
            itemRow = 6;
            itemMarginX = 16;
            itemMarginY = 12;
            itemsLeft = 13;
            itemsRight = 13;
            firstItemX = itemsLeft;
            firstItemY = 905;
            break;
        case "AQUOS Xx3 mini":
            itemRow = 5;
            itemMarginX = 41;
            itemMarginY = 12;
            itemsLeft = 38;
            itemsRight = 38;
            firstItemX = itemsLeft;
            firstItemY = 943;
            break;
        case "iPad 第7世代　10.2インチ":
            itemRow = 10;
            itemMarginX = 18;
            itemMarginY = 0;
            itemsLeft = 16;
            itemsRight = 284;
            firstItemX = itemsLeft;
            firstItemY = 1014;
            break;
        case "iPhone12":
            itemRow = 6;
            itemMarginX = 14;
            itemMarginY = 13;
            itemsLeft = 10;
            itemsRight = 10;
            firstItemX = itemsLeft;
            firstItemY = 1165;
            break;
        case "XPERIA SOV36":
            itemRow = 6;
            itemMarginX = 24;
            itemMarginY = 11;
            itemsLeft = 22;
            itemsRight = 22;
            firstItemX = itemsLeft;
            firstItemY = 850;
            break;
        case "Galaxy S10+":
            itemRow = 7;
            itemMarginX = 14;
            itemMarginY = 9;
            itemsLeft = 11;
            itemsRight = 12;
            firstItemX = itemsLeft;
            firstItemY = 830;
            break;
        case "HUAWEI P20 lite":
            itemRow = 6;
            itemMarginX = 23;
            itemMarginY = 11;
            itemsLeft = 20;
            itemsRight = 21;
            firstItemX = itemsLeft;
            firstItemY = 892;
            break;
        case "AQUOS R2 compact":
            itemRow = 5;
            itemMarginX = 36;
            itemMarginY = 12;
            itemsLeft = 33;
            itemsRight = 34;
            firstItemX = itemsLeft;
            firstItemY = 1009;
            break;
        case "Xperia XZ3":
            itemRow = 7;
            itemMarginX = 14;
            itemMarginY = 12;
            itemsLeft = 10;
            itemsRight = 11;
            firstItemX = itemsLeft;
            firstItemY = 1073;
            break;

        // 新サイズ対応
        case "iPhone12(アプデ後)":
            itemRow = 6;
            itemMarginX = 19;
            itemMarginY = 12;
            itemsLeft = 16;
            itemsRight = 16;
            firstItemX = itemsLeft;
            firstItemY = 980;
            break;
        case "iPhone12mini(アプデ後)":
            itemRow = 6;
            itemMarginX = 13;
            itemMarginY = 12;
            itemsLeft = 9;
            itemsRight = 9;
            firstItemX = itemsLeft;
            firstItemY = 989;
            break;
        case "iPhone11Pro(アプデ後)":
            itemRow = 6;
            itemMarginX = 13;
            itemMarginY = 12;
            itemsLeft = 9;
            itemsRight = 9;
            firstItemX = itemsLeft;
            firstItemY = 971;
            break;
        case "iPhoneXR(アプデ後)":
            itemRow = 6;
            itemMarginX = 20;
            itemMarginY = 8;
            itemsLeft = 17;
            itemsRight = 17;
            firstItemX = itemsLeft;
            firstItemY = 656;
            break;
        case "szj-js202":
            itemRow = 10;
            itemMarginX = 12;
            itemMarginY = 0;
            itemsLeft = 11;
            itemsRight = 143;
            firstItemX = itemsLeft;
            firstItemY = 496;
            break;
        case "iPhone12ProMax(アプデ後)":
            itemRow = 6;
            itemMarginX = 35;
            itemMarginY = 12;
            itemsLeft = 32;
            itemsRight = 32;
            firstItemX = itemsLeft;
            firstItemY = 980;
            break;
        case "iPad Air第四世代(アプデ後)":
            itemRow = 10;
            itemMarginX = 20;
            itemMarginY = 0;
            itemsLeft = 17;
            itemsRight = 288;
            firstItemX = itemsLeft;
            firstItemY = 1014;
            break;
        case "GalaxyS20+5G":
            itemRow = 7;
            itemMarginX = 12;
            itemMarginY = 11;
            itemsLeft = 10;
            itemsRight = 9;
            firstItemX = itemsLeft;
            firstItemY = 804;
            break;
        case "pixel3":
            itemRow = 6;
            itemMarginX = 20;
            itemMarginY = 12;
            itemsLeft = 18;
            itemsRight = 17;
            firstItemX = itemsLeft;
            firstItemY = 880;
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
            screenshotWidth = screenshot.width;
            screenshotHeight = screenshot.height;
            console.log("width: ", screenshot.width);

            // デバイス推定(アバの画像サイズが同じ場合さらに分けるためにここで推定する)
            if(mode == "iPhoneXR, iPhone11, iPhone11ProMax, iPhoneXsMax" && screenshot.naturalWidth == 1242) {
                decide("iPhoneXSMax");
                mode = "iPhoneXSMax";
                console.log("スクショ読み込み後に変更、モード",mode);
            } else if(mode == "iPhone6, iPhone6s, iPhone7, iPhone8, iPhoneX, iPhoneXs, iPhone11Pro, iPhone12, iPhoneSE2") {
                if (screenshot.naturalWidth == 1125) {
                    decide("iPhoneX, iPhoneXs, iPhone11Pro");
                    mode = "iPhoneX, iPhoneXs, iPhone11Pro";
                    console.log("スクショ読み込み後に変更、モード",mode);
                } else if (screenshot.naturalWidth == 1170) {
                    decide("iPhone12");
                    mode = ("iPhone12");
                    console.log("スクショ読み込み後に変更、モード",mode);
                }
            } else if(mode == "ARROWSF-52A, AQUOSzero2, Xperia XZ3") {
                if (screenshot.naturalHeight == 2340){
                    decide("AQUOSzero2");
                    mode = "AQUOSzero2";
                } else if (screenshot.naturalHeight == 2880){
                    decide("Xperia XZ3");
                    mode = "Xperia XZ3";
                }
                console.log("スクショ読み込み後に変更、モード",mode);
            } else if(mode == "Galaxy S20 5G SC-51A, XPERIA SOV36" && screenshot.naturalHeight == 1920) {
                decide("XPERIA SOV36");
                mode = "XPERIA SOV36";
                console.log("スクショ読み込み後に変更、モード",mode);
            } else if(mode == "Galaxy Note9, Galaxy S10+" && screenshot.naturalHeight == 2280) {
                decide("Galaxy S10+");
                mode = "Galaxy S10+";
                console.log("スクショ読み込み後に変更、モード",mode);
            } else if(mode == "vivo1935, GalaxyS20+5G" && screenshot.naturalHeight == 2400) {
                decide("GalaxyS20+5G");
                mode = "GalaxyS20+5G";
                console.log("スクショ読み込み後に変更、モード",mode);
            } else if(mode == "HUAWEInova2, pixel3" && screenshot.naturalHeight == 2160) {
                decide("pixel3");
                mode = "pixel3";
                console.log("スクショ読み込み後に変更、モード",mode);
            }
            itemBoxCalc();
            itemXY();
            itemShow(screenshot);
            showTool();
            screenshotsrc = screenshot;
        }
        screenshot.src = event.target.result;   // screenshotを読み込む　
        document.getElementById("imgStatus").textContent = "プレビュー";

    }
    reader.readAsDataURL(files[0]);             // ローカルファイルを読み込む
    chgImgBtn.style.display = "block"; // canvasは表示にする
}

// 透過アバ画像を読み込み
function showAvatorImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function (event) {           // ローカルファイルを読込後処理
        avator.image = new Image();           // avatorファイルの処理
        avator.image.onload = function () {        // avatorファイル読込後の処理
            deviceSuggest(avator.image.naturalWidth, avator.image.naturalHeight);
            // 背景
            suggestColors.length = 0; // 初期化
            ctx.drawImage(avator.image, 0, 0, 7, 6);
            var backgroundColor = ctx.getImageData(4, 4, 1, 1);
            colorCode = rgb2colorCode(backgroundColor.data[0], backgroundColor.data[1], backgroundColor.data[2]);
            suggestColors.push(colorCode);

            // 背景色をもう２つ余分にとっておく
            var tmpColor = ctx.getImageData(3, 2, 1, 1);
            suggestColors.push(rgb2colorCode(tmpColor.data[0], tmpColor.data[1], tmpColor.data[2]));
            tmpColor = ctx.getImageData(3, 5, 1, 1);
            suggestColors.push(rgb2colorCode(tmpColor.data[0], tmpColor.data[1], tmpColor.data[2]));

            // アバターの表示範囲を取得
            specificAvatorRange();

            console.log("backgroundColor: ", suggestColors);
            ctx.fillStyle = colorCode;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            // アバターの描画
            // ctx.drawImage(avator.image, avatorX, avatorY, avatorW, avatorH, 90, 0, avatorW, avatorH);
            if (avator.image.height <= 530) {
                avator.sx = 0;
                avator.sy = 0;
                avator.sw = avator.image.width;
                avator.sh = avator.image.height;
                avator.dw = avator.w;
                avator.dh = avator.h;
                avator.dx = (canvasWidth - avator.image.width) / 2;
                avator.dy = 0;
            } else {
                avator.sx = avator.startX;
                avator.sy = avator.startY;
                avator.sw = avator.w;
                avator.sh = avator.h;
                avator.dw = avator.w * 530 / avator.h;
                avator.dh = 530;
                avator.dx = (canvasWidth - avator.dw) / 2;
                avator.dy = 0;
            }
            avatorCurrent["dx"] = avator.dx;
            avatorCurrent["dy"] = avator.dy;
            console.log(avator);
            ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avator.dx, avator.dy, avator.dw, avator.dh);
            // avator2silhouette();
        }
        avator.image.src = event.target.result;   // avatorを読み込む　
        document.getElementById("imgStatus").textContent = "プレビュー";
        previewArea.style.display = "none"; // 画像に変更ボタンも非表示
        canvas.style.display = "block"; // canvas表示
        result.style.display = "none";
        document.getElementById("imgStatus").textContent = "プレビュー";
        document.getElementById("saveHint").textContent = "";
        showLogBtn.style.display = "block"; // log表示ボタン表示
    }
    reader.readAsDataURL(files[0]);
}

// 背景画像読み込み
function showBackgroundImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function (event) {           // ローカルファイルを読込後処理
        backgroundImg = new Image();           // backgroundImgファイルの処理
        backgroundImg.onload = function () {        // backgroundImgファイル読込後の処理
            // 背景
            ctx.drawImage(backgroundImg, 0, 0, 900, 900);
            isVisibleBackgroundImg = true;
            ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
            showColorBox();
            showTool()
            itemShow(screenshotsrc);
        }
        backgroundImg.src = event.target.result;   // avatorを読み込む　
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

// アバターの表示範囲を判定する
function specificAvatorRange() {
    dispLoading();

    // 非表示のキャンバスをつくる
    canvas_hidden.id = 'canvas_hidden';
    canvas_hidden.width = avator.image.width;
    canvas_hidden.height = avator.image.height;
    ctx_hidden = canvas_hidden.getContext('2d');
    ctx_hidden.drawImage(avator.image, 0, 0);

    // アバターの左端を取得
    var i = 1, j = 1;
    for (i = 1; i <= avator.image.width; i++) {
        for (j = 1; j <= avator.image.height; j++) {
            tmpColor = ctx_hidden.getImageData(i, j, 1, 1);
            // 透過していない箇所
            if (tmpColor.data[3] != 0) {
                avator.leftX = i;
                avator.leftY = j;
                break;
            }
        }
        if (tmpColor.data[3] != 0) {
            break;
        }
    }

    // アバターの右端を取得
    for (i = avator.image.width; i > 0; i--) {
        for (j = avator.image.height; j > 0; j--) {
            tmpColor = ctx_hidden.getImageData(i, j, 1, 1);
            // 透過していない箇所
            if (tmpColor.data[3] != 0) {
                avator.rightX = i;
                avator.rightY = j;
                break;
            }
        }
        if (tmpColor.data[3] != 0) {
            break;
        }
    }

    // アバターの上端を取得
    for (j = 1; j <= avator.image.height; j++) {
        for (i = 1; i <= avator.image.width; i++) {
            tmpColor = ctx_hidden.getImageData(i, j, 1, 1);
            // 透過していない箇所
            if (tmpColor.data[3] != 0) {
                avator.topX = i;
                avator.topY = j;
                break;
            }
        }
        if (tmpColor.data[3] != 0) {
            break;
        }
    }
    avator.startX = avator.leftX;
    avator.startY = avator.topY;
    avator.w = avator.rightX - avator.leftX;
    avator.h = avator.image.height - avator.topY;

    console.log("アバターの表示範囲取得\n w: ", canvas_hidden.width, " h: ", canvas_hidden.height);
    console.log("アバターの左端のx: ", avator.leftX, "y: ", avator.leftY);
    console.log("アバターの右端のx: ", avator.rightX, "y: ", avator.rightY);
    console.log("アバターの上端のx: ", avator.topX, "y: ", avator.topY);
    console.log("アバターのstartX: ", avator.startX, "startY: ", avator.startY);
    console.log("アバターのw: ", avator.w, "h: ", avator.h);
    removeLoading();
}

// アイテムを個別に表示する
function itemShow(image) {
    logItemBoxColor.length = 0; // ログ用の中身を初期化
    for (let i = 0; i < itemNum; i++) {
        if (i < 5) {
            ctx.save(); // 現在の状態を保存（クリッピング領域特に指定なし）
            drawsq(180 * i + 4, 530, 172, 172, 12); // 角丸の矩形を描画（クリッピング用）
            ctx.clip();  // (角丸矩形でクリッピング)
            ctx.drawImage(image, itemX[i], itemY[i], itemBoxLength, itemBoxLength, 180 * i + 4, 530, 172, 172);
            ctx.restore(); // クリッピング領域の設定を破棄

            // 所持数隠し
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillRect(180 * i + 58, 665, 109, 30);

            // アイテムがなければ背景色でぬりつぶし
            itemColor = ctx.getImageData(180 * i + 4 + 30, 530 + 30, 1, 1)
            var r = itemColor.data[0]
            var g = itemColor.data[1]
            var b = itemColor.data[2]
            if ((r == 233 && g == 234 && b == 236) || (r == 232 && g == 234 && b == 236) ) {
                ctx.fillStyle = colorCode;
                ctx.fillRect(180 * i, 720 - 3, 530 + 5, 172 + 5);
                itemNum = i;
            }
        } else {
            ctx.save(); // 現在の状態を保存（クリッピング領域特に指定なし）
            drawsq(180 * (i - 5) + 4, 720, 172, 172, 12); // 角丸の矩形を描画（クリッピング用）
            ctx.clip();  // (角丸矩形でクリッピング)
            ctx.drawImage(image, itemX[i], itemY[i], itemBoxLength, itemBoxLength, 180 * (i - 5) + 4, 720, 172, 172);
            ctx.restore(); // クリッピング領域の設定を破棄

            // 所持数隠し
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillRect(180 * (i - 5) + 58, 855, 109, 30);

            // アイテムがなければ背景色でぬりつぶし
            itemColor = ctx.getImageData(180 * (i - 5) + 4 + 30, 720 + 30, 1, 1)
            var r = itemColor.data[0]
            var g = itemColor.data[1]
            var b = itemColor.data[2]
            if ((r == 233 && g == 234 && b == 236) || (r == 232 && g == 234 && b == 236) ) {
                ctx.fillStyle = colorCode;
                ctx.fillRect(180 * (i - 5), 720 - 3, 172 + 5, 172 + 5);
                itemNum = i;
            }
        }
        logItemBoxColor.push(rgb2colorCode(r,g,b));
    }
}

// 角丸の四角形を描画する(クリッピングのため)
function drawsq(x, y, w, h, r) {
    var color = "rgb(214,215,218)";
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
    
    // 影on/off
    ctx.save();
    ctx.font = '50pt Arial';
    ctx.fillStyle = 'gray';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    if (avator.shadow) {
        ctx.strokeText('影あり', 680, 500);
        ctx.fillText('影あり', 680, 500);
    } else {
        ctx.strokeText('影なし', 680, 500);
        ctx.fillText('影なし', 680, 500);
    }
    ctx.restore();

    // フチon/off
    ctx.save();
    ctx.font = '50pt Arial';
    ctx.fillStyle = 'gray';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    if (avator.border) {
        ctx.strokeText('縁あり', 680, 400);
        ctx.fillText('縁あり', 680, 400);
    } else {
        ctx.strokeText('縁なし', 680, 400);
        ctx.fillText('縁なし', 680, 400);
    }
    ctx.restore();

    showColorBox();
}

function showColorBox() {
    ctx.save();
    ctx.strokeStyle = "white";
    ctx.lineWidth = buttonWeight;
    drawCircle(colorBox.x1, colorBox.y1, buttonSize, suggestColors[0]);
    drawCircle(colorBox.x2, colorBox.y2, buttonSize, suggestColors[1]);
    drawCircle(colorBox.x3, colorBox.y3, buttonSize, suggestColors[2]);
    if (backgroundImg != null) {
        ctx.save(); // 現在の状態を保存（クリッピング領域特に指定なし）
        drawCircle(colorBox.x4, colorBox.y4, buttonSize, "#fff"); // 角丸の矩形を描画（クリッピング用）
        ctx.clip();  // (角丸矩形でクリッピング)
        ctx.drawImage(backgroundImg, colorBox.x4-buttonSize, colorBox.y4-buttonSize, buttonSize*2, buttonSize*2);
        ctx.restore(); // クリッピング領域の設定を破棄
    }
    ctx.restore();
}

function drawCircle(dx, dy, r, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.closePath();	// closeさせる
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

    // 位置リセットボタン
    const resetsquare = {
        x: (btnCenter["x"] - buttonSize / 2 - buttonWeight) * ratio, y: (btnCenter["y"] - buttonSize / 2 - buttonWeight) * ratio,  // 座標
        w: (buttonSize + buttonWeight * 2) * ratio, h: (buttonSize + buttonWeight * 2) * ratio   // サイズ
    };
    const resetPressed =
        (resetsquare.x <= point.x && point.x <= resetsquare.x + resetsquare.w)  // 横方向の判定
        && (resetsquare.y <= point.y && point.y <= resetsquare.y + resetsquare.h)  // 縦方向の判定

    // 色1
    const c1square = {
        x: (colorBox.x1 - buttonSize - buttonWeight) * ratio, y: (colorBox.y1 - buttonSize - buttonWeight) * ratio,  // 座標
        w: (buttonSize * 2 + buttonWeight * 2) * ratio, h: (buttonSize * 2 + buttonWeight * 2) * ratio   // サイズ
    };
    const c1Pressed =
        (c1square.x <= point.x && point.x <= c1square.x + c1square.w)  // 横方向の判定
        && (c1square.y <= point.y && point.y <= c1square.y + c1square.h)  // 縦方向の判定

    // 色2
    const c2square = {
        x: (colorBox.x2 - buttonSize - buttonWeight) * ratio, y: (colorBox.y2 - buttonSize - buttonWeight) * ratio,  // 座標
        w: (buttonSize * 2 + buttonWeight * 2) * ratio, h: (buttonSize * 2 + buttonWeight * 2) * ratio   // サイズ
    };
    const c2Pressed =
        (c2square.x <= point.x && point.x <= c2square.x + c2square.w)  // 横方向の判定
        && (c2square.y <= point.y && point.y <= c2square.y + c2square.h)  // 縦方向の判定

    // 色3
    const c3square = {
        x: (colorBox.x3 - buttonSize - buttonWeight) * ratio, y: (colorBox.y3 - buttonSize - buttonWeight) * ratio,  // 座標
        w: (buttonSize * 2 + buttonWeight * 2) * ratio, h: (buttonSize * 2 + buttonWeight * 2) * ratio   // サイズ
    };
    const c3Pressed =
        (c3square.x <= point.x && point.x <= c3square.x + c3square.w)  // 横方向の判定
        && (c3square.y <= point.y && point.y <= c3square.y + c3square.h)  // 縦方向の判定

    // 色4(背景画像を読み込んだときのみ)
    const c4square = {
        x: (colorBox.x4 - buttonSize - buttonWeight) * ratio, y: (colorBox.y4 - buttonSize - buttonWeight) * ratio,  // 座標
        w: (buttonSize * 2 + buttonWeight * 2) * ratio, h: (buttonSize * 2 + buttonWeight * 2) * ratio   // サイズ
    };
    const c4Pressed =
        (c4square.x <= point.x && point.x <= c4square.x + c4square.w)  // 横方向の判定
        && (c4square.y <= point.y && point.y <= c4square.y + c4square.h)  // 縦方向の判定

    // 影のオンオフ
    const shadowsquare = {
        x: 680 * ratio, y: 450 * ratio,  // 座標
        w: 150 * ratio, h: 50 * ratio   // サイズ
    };
    const shadowPressed =
        (shadowsquare.x <= point.x && point.x <= shadowsquare.x + shadowsquare.w)  // 横方向の判定
        && (shadowsquare.y <= point.y && point.y <= shadowsquare.y + shadowsquare.h)  // 縦方向の判定

    // 縁のオンオフ
    const bordersquare = {
        x: 680 * ratio, y: 350 * ratio,  // 座標
        w: 150 * ratio, h: 50 * ratio   // サイズ
    };
    const borderPressed =
        (bordersquare.x <= point.x && point.x <= bordersquare.x + bordersquare.w)  // 横方向の判定
        && (bordersquare.y <= point.y && point.y <= bordersquare.y + bordersquare.h)  // 縦方向の判定

    if (upPressed) { avatorRewrite("up"); showTool(); console.log("up"); }
    if (downPressed) { avatorRewrite("down"); showTool(); console.log("down"); }
    if (rightPressed) { avatorRewrite("right"); showTool(); console.log("right"); }
    if (leftPressed) { avatorRewrite("left"); showTool(); console.log("left"); }
    if (resetPressed) { avatorRewrite("reset"); showTool(); console.log("reset"); }
    if (c1Pressed) { avatorRewrite("c1"); showTool(); console.log("c1"); }
    if (c2Pressed) { avatorRewrite("c2"); showTool(); console.log("c2"); }
    if (c3Pressed) { avatorRewrite("c3"); showTool(); console.log("c3"); }
    if (c4Pressed) { avatorRewrite("c4"); showTool(); console.log("c4"); }
    if (shadowPressed) {  avator.shadow = !avator.shadow; avatorRewrite(""); showTool(); console.log("影オンオフ"); }
    if (borderPressed) {  avator.border = !avator.border; avatorRewrite(""); showTool(); console.log("縁オンオフ"); }

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

function avatorRewrite(how) {
    let moveSize = 5;
    switch (how) {
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
            avatorCurrent["dx"] = avator.dx;
            avatorCurrent["dy"] = avator.dy;
            break;
        case "c1":
            colorCode = suggestColors[0];
            isVisibleBackgroundImg = false;
            break;
        case "c2":
            colorCode = suggestColors[1];
            isVisibleBackgroundImg = false;
            break;
        case "c3":
            colorCode = suggestColors[2];
            isVisibleBackgroundImg = false;
            break;
        case "c4":
            isVisibleBackgroundImg = true;
        default:
            break;
    }
    if (backgroundImg != null && isVisibleBackgroundImg == true) {
        ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
    } else {
        ctx.fillStyle = colorCode;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight); //背景塗りなおすことで画面再描画
    }

    if (avator.shadow == true){
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.253)";
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsetY = 6;
        ctx.shadowBlur = 5;
        ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
        ctx.restore();
    }

    if (avator.border == true){
        ctx.save();
        ctx.shadowColor = "white";
        for (i=-3; i<=3; i++) {
            for (j=-3; j<=3; j++) {
                ctx.shadowOffsetX = i;
                ctx.shadowOffsetY = j;
                ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
            }
        }
        ctx.restore();
    }

    console.log("フチありなし", avator.border);
    console.log("影ありなし", avator.shadow);
    ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
    ctx.restore();
    itemShow(screenshotsrc);
}

// canvasを画像化
function chgImg() {
    //ツールを消すためにアバターを再描画
    if (backgroundImg != null && isVisibleBackgroundImg == true) {
        ctx.drawImage(backgroundImg, 0, 0, 900, 900); // 背景画像がある場合は背景画像描画しなおし
    } else {
        ctx.fillStyle = colorCode;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight); //背景塗りなおすことで画面再描画
    }
    // avatorRewrite("none");

    // 影ONなら影描画
    if (avator.shadow == true){
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.253)";
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsetY = 6;
        ctx.shadowBlur = 5;
        ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
        ctx.restore();
    }
    // 縁がONなら縁描画
    if (avator.border == true){
        ctx.save();
        ctx.shadowColor = "white";
        for (i=-3; i<=3; i++) {
            for (j=-3; j<=3; j++) {
                ctx.shadowOffsetX = i;
                ctx.shadowOffsetY = j;
                ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
            }
        }
        ctx.restore();
    }
    console.log("保存時の影の有無", avator.shadow);
    console.log("保存時のフチの有無", avator.border);
    ctx.drawImage(avator.image, avator.sx, avator.sy, avator.sw, avator.sh, avatorCurrent["dx"], avatorCurrent["dy"], avator.dw, avator.dh);
    ctx.restore();
    itemShow(screenshotsrc);

    result.style.display = "block"; // resultを表示
    canvas.style.display = "none"; // canvasは非表示にする
    chgImgBtn.style.display = "none"; // 画像に変更ボタンも非表示

    document.getElementById("imgStatus").textContent = "完成！";
    document.getElementById("saveHint").textContent = "画像を長押しで保存できます";
    var png = canvas.toDataURL();
    document.getElementById("result").src = png;
}

// ログを表示
function showLog() {
    logArea.style.display = "block"; // logを表示する
    document.getElementById("logTanmatsuW").textContent = window.screen.width;
    document.getElementById("logTanmatsuH").textContent = window.screen.height;
    document.getElementById("logTanmatsu").textContent = mode;
    document.getElementById("logAvaW").textContent = avator.image.width;
    document.getElementById("logAvaH").textContent = avator.image.height;
    document.getElementById("logScreenshotW").textContent = screenshotWidth;
    document.getElementById("logScreenshotH").textContent = screenshotHeight;
    document.getElementById("logColors").textContent = suggestColors;
    document.getElementById("logItemNum").textContent = itemNum;
    document.getElementById("logItemBoxColor").textContent = logItemBoxColor;
    if (backgroundImg != null) {
        document.getElementById("logBackgroundImg").textContent = "あり";
    } else {
        document.getElementById("logBackgroundImg").textContent = "なし";
    }
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

/* ------------------------------
 Loading イメージ表示関数
 ------------------------------ */
function dispLoading() {
    console.log("処理開始");
    loading.style.display = "block"; // loadingを表示
    document.getElementById("loadingMsg").textContent = "処理中";
}

/* ------------------------------
Loading イメージ削除関数
------------------------------ */
function removeLoading() {
    loading.style.display = "none"; // loadingを表示
    console.log("処理完了");
    document.getElementById("loadingMsg").textContent = "処理完了";

}
