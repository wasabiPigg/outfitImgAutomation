var mode = "iPhone11Pro"; // デフォはiPhone11Pro
let itemNum = 10;      // このコーデにいくつのアイテムを使ったか？(プルダウンからとってくる)、デフォ10

// 変数の定義(iPhone11Proをデフォとする)
let itemRow = 6;       // 1列にいくつアイテムが並んでいるか？
let itemMargin = 14;   // アイテム同士の余白はいくつ？
let itemsLeft = 11;    // 左端の余白はいくつ？
let itemsRight = 9;    // 右端の余白はいくつ？
let firstItemX = itemsLeft;
let firstItemY = 1121; // 最初のアイテムのY座標は？
let avatorX = 90;
let avatorY = 0;
let avatorW = 750;
let avatorH = 588;
var itemX = []; // 各アイテムのx座標を格納する配列
var itemY = []; // 各アイテムのy座標を格納する配列

function decide(){
    // デバイスの種類(プルダウンで選択)
	// 値(数値)を取得
    const num = document.modeEdit.device.selectedIndex;
    const num2 = document.modeEdit.itemNum.selectedIndex;
	// 値(数値)から値(value値)を取得
    var mode = document.modeEdit.device.options[num].value;
    document.getElementById("span1").textContent = mode;
    itemNum = document.modeEdit.itemNum.options[num2].value;
    document.getElementById("span2").textContent = itemNum;
    // デバイスごとにサイズ調整
    switch (mode) {
        case "iPhone11Pro":
            itemRow = 6;
            itemMargin = 14;
            itemsLeft = 11;
            itemsRight = 9;
            avatorX = 0;
            avatorY = 0;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1121;
            break;
        case "iPhone8":
            itemRow = 6;
            itemMargin = 10;
            itemsLeft = 6;
            itemsRight = 6;
            avatorX = 0;
            avatorY = 60;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 600;
            break;
        case "iPadPro11inch":
            itemRow = 10;
            itemMargin = 23;
            itemsLeft = 23;
            itemsRight = 295;
            avatorX = 459;
            avatorY = 380;
            avatorW = 750;
            avatorH = 588;
            firstItemX = itemsLeft;
            firstItemY = 1014;
            break;
        default:
            break;
    }
    console.log(mode, itemRow);
}

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

// すくしょを読み込み
function showScreenshotImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function(event) {           // ローカルファイルを読込後処理
        var screenshot = new Image();           // screenshotファイルの処理
        screenshot.onload = function() {        // screenshotファイル読込後の処理
            // ctx.drawImage(screenshot, 0, 0);     // screenshotをcanvasに表示
            screenshotWidth = this.width;
            console.log("width: ", this.width);
            itemBoxCalc();
            itemXY();
            itemShow(this);
        }
        screenshot.src = event.target.result;   // screenshotを読み込む　
    }
    reader.readAsDataURL(files[0]);             // ローカルファイルを読み込む
}

// 透過アバ画像を読み込み
function showAvatorImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function(event) {           // ローカルファイルを読込後処理
        var avator = new Image();           // avatorファイルの処理
        avator.onload = function() {        // avatorファイル読込後の処理
            ctx.drawImage(avator, avatorX, avatorY, avatorW, avatorH, 90,0, avatorW, avatorH);
        }
        avator.src = event.target.result;   // avatorを読み込む　
    }
    reader.readAsDataURL(files[0]);  
}

// アイテムの箱の大きさを計算する
function itemBoxCalc(){
    itemBoxLength = (screenshotWidth - itemsLeft - itemsRight - itemMargin * (itemRow - 1)) / itemRow;
    console.log("アイテムの箱の大きさ",itemBoxLength);
    console.log("(",screenshotWidth," - ",itemsLeft," - ",itemsRight," - ",itemMargin," * (",itemRow," - 1)) / ", itemRow);
}

// アイテムを切り出すための計算をする
function itemXY(){
    for (let i=0; i<itemNum; i++){
        if (i< itemRow) {
            itemX[i] = firstItemX + (itemMargin + itemBoxLength) * i;
            itemY[i] = firstItemY;
          } else {
            itemX[i] = firstItemX + (itemMargin + itemBoxLength) * (i-itemRow);
            itemY[i] = firstItemY + itemMargin + itemBoxLength;
          }
    }
    console.log(itemX,itemY);
}
// アイテムを個別に表示する
function itemShow(image){
    for (let i=0; i<itemNum; i++){
        if (i<5) {
            ctx.drawImage(image, itemX[i], itemY[i], itemBoxLength, itemBoxLength, 180*i+3, 530, 172, 172);

            // 所持数隠し
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillRect(180*i+108,665,59,30);

          } else {
            ctx.drawImage(image, itemX[i], itemY[i], itemBoxLength, itemBoxLength, 180*(i-5)+3, 720, 172, 172);
            
            // 所持数隠し
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillRect(180*(i-5)+108,855,59,30);
          }
    }
}

// アイテムの所持数を隠す
function hide(){
    ctx.beginPath();
    //左から20上から20の位置に幅50高さ50の輪郭の四角形を作成する
    ctx.rect(20,20,50,50);
    //現在のパスを輪郭表示する
    ctx.stroke();
}

// canvasを画像化
function chgImg()
{
  var png = canvas.toDataURL();
  document.getElementById("result").src = png;
}