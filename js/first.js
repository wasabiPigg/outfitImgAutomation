// 代表色を取るための前準備
const colorThief = new ColorThief();

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


// 灰色はこれ
let grayColor = "rgb(214,215,218)";
// アバターから取った代表色
var pickedColorList = [];
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

// みやさんのテンプレ用Canvas
canvasItemMiya.width = long;
canvasItemMiya.height = long;

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