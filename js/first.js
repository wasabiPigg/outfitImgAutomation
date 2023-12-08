// 代表色を取るための前準備
const colorThief = new ColorThief();

// 背景に必要なデータ用
class BgInfo {
    constructor(elm, bgIndex) {
        this.elm = elm;
        this.bgIndex = bgIndex;
        this.colorList = []
    }

    // 選択中の一つのボタンだけ丸くする
    round(index) {
        // 一旦全部四角くする
        for ( var j = 0; j < this.elm.length; j++ ) {
            this.elm[j].classList.replace('rounded-circle','rounded-square');
            this.elm[j].classList.remove('border-5');
        }
        // 選択中の背景は形を丸くする
        this.elm[index].classList.replace('rounded-square','rounded-circle');
        if (this.elm[index].type == "color") {
            // 単色背景は縁取りをつける
            this.elm[index].classList.add('border-5');
            if (this.colorList == []) {
                this.elm[index].style.borderColor = bgColorList[index]
            } else {
                this.elm[index].style.borderColor = this.colorList[index];
            }
        }
        console.log("選択中のボタンIndex",index);
    }

    changeIndex(newIndex) {
        this.bgIndex = newIndex;
        this.round(this.bgIndex);
    }

    // canvasの背景を変更
    changeBackground() {
        this.round(this.bgIndex);
        c.clearRect(0, 0, canvas.width, canvas.height);
        switch (this.bgIndex) {
            case 4:
                // 任意の背景画像
                c.drawImage(canvasBackground, 0, 0);
                break;
            case 5:
                // 背景色なし
                
                break;
            default:
                // 配列内の背景色
                c.fillStyle = bgColorList[this.bgIndex];
                c.fillRect(0, 0, canvas.width, canvas.height);
                break;
        }
        // テンプレートによって追加で背景を描く
        switch (templateMode) {
            case 1: // 黒猫さんデザイン
                // drawKuronekoBg(pickedColorList, 0);
                break;
            case 2: // みやさんデザイン
                drawMiyaBg(pickedColorList);
                break;
            default:
                break;
        }
    }
    // 前景
    changeForeground(bgIndex=0) {
        switch (templateMode) {
            case 1: // 黒猫さんデザイン
                drawKuronekoBg(pickedColorList, kuronekoFrameColorList[bgIndex], bgIndex==5);
                // console.log("今のIndex",this.bgIndex, "今のカラーリスト",this.colorList)
                break;
            default:
                break;
        }
    }
}

// 影の設定
let shadowElm = document.getElementById('shadowControl');
shadowElm.value = 6;
document.getElementById('shadowValue').innerHTML = Number(shadowElm.value).toPrecision(2);

// ふちの設定
let fuchiElm = document.getElementById('fuchiControl');
fuchiElm.value = 0;
document.getElementById('fuchiValue').innerHTML = Number(fuchiElm.value).toPrecision(2);

// テンプレ系
var templateMode = 0;
var templateButtonElements = Array.from(document.querySelectorAll(".templateBtn"));

// スクショ
let screenShotImgElement = document.getElementById('screenshotSrc');
let inputScreenShotElement = document.getElementById('custom-file-2');
let clImgBtn = document.getElementById('clImg');
clImgBtn.src = 'https://github.com/wasabiPigg/outfitImgAutomation/blob/master/img/clBtnImg.PNG?raw=true';
inputScreenShotElement.addEventListener('change', (e) => {
    screenShotImgElement.src = URL.createObjectURL(e.target.files[0]);
    clImgBtn.src = URL.createObjectURL(e.target.files[0]);
}, false);

// アバター透過画像
let avatorImgElement = document.getElementById('avatorSrc');
let inputAvatorElement = document.getElementById('custom-file-1');
let avImgBtn = document.getElementById('avImg');
avImgBtn.src = 'https://github.com/wasabiPigg/outfitImgAutomation/blob/master/img/avBtnImg.PNG?raw=true';
inputAvatorElement.addEventListener('change', (e) => {
    avatorImgElement.src = URL.createObjectURL(e.target.files[0]);
    avImgBtn.src = URL.createObjectURL(e.target.files[0]);
}, false);

// 背景画像
let backgroundImgElement = document.getElementById('backgroundSrc');
let inputbackgroundElement = document.getElementById('custom-file-3');
let bgImgBtn = document.getElementById('bgImg');
bgImgBtn.src = 'https://github.com/wasabiPigg/outfitImgAutomation/blob/master/img/bgBtnImg.PNG?raw=true';

// 黒猫さんのテンプレ用のフレーム画像（任意設定）
let kuronekoFrameImgElement = document.getElementById('kuronekoFrameSrc');
let inputKuronekoFrameImgElement = document.getElementById('kuronekoFrameImg');

// 灰色はこれ
let grayColor = "rgb(214,215,218)";
// アバターから取った代表色
var pickedColorList = [];
// デフォルトテンプレの背景用の色リスト
var bgColorList = [];
var kuronekoFrameColorList = [];
// Canvasの準備
var canvas = document.getElementById('canvas');
var canvasItemHs = document.getElementById('canvasItemHs');
var canvasItemHc = document.getElementById('canvasItemHc');
var canvasItemVs = document.getElementById('canvasItemVs');
var canvasItemVc = document.getElementById('canvasItemVc');
var canvasItemMiya = document.getElementById('canvasItemMiya');
var canvasAvator = document.getElementById('canvasAvator');
var canvasBackground = document.getElementById('canvasBackgroundImg');
var canvasShadow = document.getElementById('canvas_shadow');
var cKuronekoBg = document.getElementById('kuronekoBg');
var kuronekoNullItemImg = document.getElementById('kuronekoNullItemImg');
var kuronekoItemList = document.getElementById('kuronekoItemList');
var miyaBg = document.getElementById('miyaBg');

var long = 900;
var short = 370;

// アイテム用Canvas（横長）
canvasItemHs.width = long;
canvasItemHs.height = short;
canvasItemHc.width = long;
canvasItemHc.height = short;

// アイテム用Canvas（縦長）
canvasItemVs.width = short;
canvasItemVs.height = long;
canvasItemVc.width = short;
canvasItemVc.height = long;

// 黒猫さんのテンプレ用Canvas
cKuronekoBg.width = long;
cKuronekoBg.height = long;
kuronekoNullItemImg.width = 85;
kuronekoNullItemImg.height = 85;
kuronekoItemList.width = 449;
kuronekoItemList.height = 176;

// みやさんのテンプレ用Canvas
canvasItemMiya.width = long;
canvasItemMiya.height = long;
miyaBg.width = long;
miyaBg.height = long;

// 調整時に使用するCanvas
canvas.width = long;
canvas.height = long;

// アバター用Canvas
canvasAvator.width = long;
canvasAvator.height = long;

// 背景画像用Canvas
canvasBackground.width = long;
canvasBackground.height = long;

// 影付け用Canvas
canvasShadow.width = long;
canvasShadow.height = long;

var c = canvas.getContext('2d');
var chs = canvasItemHs.getContext('2d');
var chc = canvasItemHc.getContext('2d');
var cvs = canvasItemVs.getContext('2d');
var cvc = canvasItemVc.getContext('2d');
var cmiya = canvasItemMiya.getContext('2d');

var cha = canvasAvator.getContext('2d');
var chb = canvasBackground.getContext('2d');
var csh = canvasShadow.getContext('2d');

var cKuronekoBgCtx = cKuronekoBg.getContext('2d');
var kuronekoNullItemImgCtx = kuronekoNullItemImg.getContext('2d');
var kuronekoItemListCtx = kuronekoItemList.getContext('2d');

var miyaBgCtx = miyaBg.getContext('2d');