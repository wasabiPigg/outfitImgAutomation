// アバター透過画像
let avatorImgElement = document.getElementById('avatorSrc');
let inputAvatorElement = document.getElementById('custom-file-1');
inputAvatorElement.addEventListener('change', (e) => {
    avatorImgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

// アバター画像が読み込めたら処理開始
avatorImgElement.addEventListener('load', (e) => {
    showAvator();
    // プレビュー用の画像を非表示にし、調整用のCanvasを表示する
    previewArea.style.display = "none";
    canvas.style.display = "block";
    result.style.display = "none";
});

// スクショ
let screenShotImgElement = document.getElementById('screenshotSrc');
let inputScreenShotElement = document.getElementById('custom-file-2');
inputScreenShotElement.addEventListener('change', (e) => {
    screenShotImgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

// スクショ画像が読み込めたら処理開始
screenShotImgElement.addEventListener('load', (e) => {
    showItemList();
    // プレビュー用の画像を非表示にし、調整用のCanvasを表示する
    previewArea.style.display = "none";
    canvas.style.display = "block";
    result.style.display = "none";
});

let color = "rgb(214,215,218)";
// Canvasの準備
var canvas = document.getElementById('canvas');
var canvasItemHs = document.getElementById('canvasItemHs');
var canvasItemHc = document.getElementById('canvasItemHc');
var canvasItemVs = document.getElementById('canvasItemVs');
var canvasItemVc = document.getElementById('canvasItemVc');
var canvasHidden = document.getElementById('canvas_hidden');

var long = 900;
var short = 370;

// 横長の画像
canvasItemHs.width = long;
canvasItemHs.height = short;
canvasItemHc.width = long;
canvasItemHc.height = short;

// 縦長の画像
canvasItemVs.width = short;
canvasItemVs.height = long;
canvasItemVc.width = short;
canvasItemVc.height = long;

// 調整時に使用するCanvas
canvas.width = long;
canvas.height = long;

var c = canvas.getContext('2d');
var chs = canvasItemHs.getContext('2d');
var chc = canvasItemHc.getContext('2d');
var cvs = canvasItemVs.getContext('2d');
var cvc = canvasItemVc.getContext('2d');

var ch1 = canvasHidden.getContext('2d');

function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    chs.clearRect(0, 0, canvasItemHs.width, canvasItemHs.height);
    chc.clearRect(0, 0, canvasItemHc.width, canvasItemHc.height);
    cvs.clearRect(0, 0, canvasItemVs.width, canvasItemVs.height);
    cvc.clearRect(0, 0, canvasItemVc.width, canvasItemVc.height);
    ch1.clearRect(0, 0, canvasHidden.width, canvasHidden.height);
}

/// アバター表示
function showAvator() {
    // let avatorSilhouette = cv.imread(avatorImgElement, cv.IMREAD_UNCHANGED);

    // // アルファ値以外の値を255にして、不透明部分だけを切り抜く
    // for (let i=3; i<avatorSilhouette.data.length; i+=4) {
    //     avatorSilhouette.data[i-3] = 255;
    //     avatorSilhouette.data[i-2] = 255;
    //     avatorSilhouette.data[i-1] = 255;
    // }

    // グレースケール
    let avatorMat = cv.imread(avatorImgElement, cv.IMREAD_UNCHANGED);
    var avatorDst = new cv.Mat();
    cv.cvtColor(avatorMat, avatorDst, cv.COLOR_RGBA2GRAY, 0);
    // 白黒反転して2値化
    let avatorThreshold = new cv.Mat();
    cv.threshold(avatorDst, avatorThreshold, 1, 255, cv.THRESH_BINARY);
    // 輪郭取得
    let avatorContours = new cv.MatVector();
    let avatorHierarchy = new cv.Mat();
    cv.findContours(avatorThreshold, avatorContours, avatorHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // アバターの表示領域を見つける
    var avatorTmpRect = {
        x1: [], y1: [], x2: [], y2: []
    }
    for (let i=0; i<avatorContours.size(); i++){
        const ret = cv.boundingRect(avatorContours.get(i));
        avatorTmpRect.x1.push(ret.x);
        avatorTmpRect.y1.push(ret.y);
        avatorTmpRect.x2.push(ret.x + ret.width);
        avatorTmpRect.y2.push(ret.y + ret.height);
    }

    avatorTmpRect.x1 = Math.min(...avatorTmpRect.x1);
    avatorTmpRect.y1 = Math.min(...avatorTmpRect.y1);
    avatorTmpRect.x2 = Math.max(...avatorTmpRect.x2);
    avatorTmpRect.y2 = Math.max(...avatorTmpRect.y2);

    // アバターの表示領域
    let avatorRect = {
        x: avatorTmpRect.x1, y: avatorTmpRect.y1, w: avatorTmpRect.x2-avatorTmpRect.x1, h: avatorTmpRect.y2-avatorTmpRect.y1
    };
    // アバターを900x900内に収めた時のサイズ
    var avatorResized = {
        w: avatorRect.w, h: avatorRect.h
    };
    if (avatorRect.h > 510) {
        // 圧縮
        avatorResized.w *= 510 / avatorRect.h;
        avatorResized.h *= 510 / avatorRect.h;
    }
    console.log("アバターの表示領域：",avatorRect);
    c.drawImage(avatorImgElement, avatorRect.x, avatorRect.y, avatorRect.w, avatorRect.h, (long-avatorResized.w)/2, 10, avatorResized.w, avatorResized.h);
}

/// アイテム表示
function showItemList() {
    // グレースケール
    let mat = cv.imread(screenShotImgElement);
    var dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);

    // 白黒反転して2値化
    let threshold = new cv.Mat();
    cv.threshold(dst, threshold, 230, 255, cv.THRESH_BINARY_INV);

    // 輪郭取得
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(threshold, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // 輪郭の矩形領域
    var itemNum = 0;
    var items = [[]];
    // 1個も四角がない場合はそこで終わり
    if (contours.size() < 1) {
        document.getElementById("imgStatus").innerText = "アイテムを検出できませんでした。"
        return
    }

    console.log("見つかった矩形の数: ",contours.size());

    // 矩形判定
    for (let i=0; i<contours.size(); i++) {
        const rect = cv.boundingRect(contours.get(i));
        const x = rect.x;
        const y = rect.y;
        const w = rect.width;
        const h = rect.height;

        // 矩形度合いの計測
        const val = rectangularity(contours.get(i));

        // 矩形度合いが高いもの、かつ正方形に近いものをアイテムとして認識する
        if (0.996<val && val<0.999 && Math.abs(w-h)<2){
            itemNum++;
            items.unshift([x,y,w,h]);
        }
    }
    if (itemNum == 0) {
        document.getElementById("imgStatus").innerText = "アイテムを検出できませんでした。"
        return;
    }
    itemSquareTileHorizontally(items, itemNum);
    itemSquareTileVertically(items, itemNum);
    itemCircleTileHorizontally(items, itemNum);
    itemCircleTileVertically(items, itemNum);
    document.getElementById("imgStatus").innerText = "↓画像を長押しで保存できます。\n緑の枠は保存時に消えます。";
    c.drawImage(canvasItemHs, 0, 530);
    chgImgBtn.style.display = "block";
}

function createPng() {
    const png = canvas.toDataURL();
    document.getElementById("result").src = png;
    canvas.style.display = "none";
    result.style.display = "block";
}

/// 矩形度合いの計測
/// 1に近いほど矩形に近い形をしている
function rectangularity(contour) {
    const area = cv.contourArea(contour);
    const rectW = cv.minAreaRect(contour).size.width;
    const rectH = cv.minAreaRect(contour).size.height;

    if (rectW != 0 && rectH != 0) {
        return area / rectW / rectH;
    } else {
        return 0;
    }
}

function itemSquareTileHorizontally(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const x = items[i][0];
        const y = items[i][1];
        const w = items[i][2];
        const h = items[i][3];

        // 角丸矩形でクリッピング
        chs.save();
        drawsq(chs, 180 * (i%5) + 4, 180 * Math.floor(i/5) + 4, 172, 172, 12);
        chs.clip();
        chs.drawImage(screenShotImgElement, x, y, w, h, 180 * (i%5) + 4, 180 * Math.floor(i/5) + 4, 172, 172);
        // 所持数隠し
        chs.beginPath();
        chs.fillStyle = "white";
        chs.fillRect(180 * (i%5) + 58, 180 * Math.floor(i/5) + 138, 113, 32);

        chs.restore(); // クリッピング領域の設定を破棄
    }
}

function itemCircleTileHorizontally(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const x = items[i][0];
        const y = items[i][1];
        const w = items[i][2];
        const h = items[i][3];

        // 円でクリッピング
        chc.save();
        drawCircle(chc, 180 * (i%5) + 90, 180 * Math.floor(i/5) + 90, 86);
        chc.clip();
        chc.drawImage(screenShotImgElement, x+3, y+3, w-6, h-6, 180 * (i%5) + 4, 180 * Math.floor(i/5) + 4, 172, 172);
        // 所持数隠し
        chc.beginPath();
        chc.fillStyle = "white";
        chc.fillRect(180 * (i%5) + 58, 180 * Math.floor(i/5) + 138, 113, 32);

        chc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(chc, 180 * (i%5) + 90, 180 * Math.floor(i/5) + 90, 86);
    }
}

function itemSquareTileVertically(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const x = items[i][0];
        const y = items[i][1];
        const w = items[i][2];
        const h = items[i][3];

        // 角丸矩形でクリッピング
        cvs.save();
        // drawsq(cvs, 180 * (i%2) + 4, 180 * Math.floor(i/2) + 4, 172, 172, 12);
        drawsq(cvs, 180 * Math.floor(i/5) + 4, 180 *(i%5) + 4, 172, 172, 12);

        cvs.clip();
        // cvs.drawImage(screenShotImgElement, x, y, w, h, 180 * (i%2) + 4, 180 * Math.floor(i/2) + 4, 172, 172);
        cvs.drawImage(screenShotImgElement, x, y, w, h, 180 * Math.floor(i/5) + 4, 180 *(i%5) + 4, 172, 172);

        // 所持数隠し
        cvs.beginPath();
        cvs.fillStyle = "white";
        cvs.fillRect(180 * Math.floor(i/5) + 58, 180 *(i%5) + 138, 113, 32);

        cvs.restore(); // クリッピング領域の設定を破棄
    }
}

function itemCircleTileVertically(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const x = items[i][0];
        const y = items[i][1];
        const w = items[i][2];
        const h = items[i][3];

        // 円でクリッピング
        cvc.save();
        drawCircle(cvc, 180 * Math.floor(i/5) + 90, 180 *(i%5) + 90, 86);
        cvc.clip();
        cvc.drawImage(screenShotImgElement, x+3, y+3, w-6, h-6, 180 * Math.floor(i/5) + 4, 180 *(i%5) + 4, 172, 172);
        // 所持数隠し
        cvc.beginPath();
        cvc.fillStyle = "white";
        cvc.fillRect(180 * Math.floor(i/5) + 58, 180 *(i%5) + 138, 113, 32);

        cvc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(cvc, 180 * Math.floor(i/5) + 90, 180 *(i%5) + 90, 86);
    }
}

// 角丸の四角形を描画する(クリッピングのため)
function drawsq(ctx, x, y, w, h, r) {
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

// 円を描画する（クリッピングのため）
function drawCircle(ctx, dx, dy, r) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.closePath();	// closeさせる
    ctx.stroke();  // 線ひく
    ctx.fill();  // 中を塗る
    ctx.restore();
}

// 円を描画する（縁取り用）
function drawCircleEdge(ctx, dx, dy, r) {
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.stroke();
}