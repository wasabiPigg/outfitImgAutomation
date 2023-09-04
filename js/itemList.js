let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

// 画像が読み込めたら処理開始
imgElement.addEventListener('load', (e) => {
    clearCanvas();
    showResult();
});

let color = "rgb(214,215,218)";
// Canvasの準備
var canvasItemHs = document.getElementById('canvasItemHs');
var canvasItemHc = document.getElementById('canvasItemHc');
var canvasItemVs = document.getElementById('canvasItemVs');
var canvasItemVc = document.getElementById('canvasItemVc');

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

var chs = canvasItemHs.getContext('2d');
var chc = canvasItemHc.getContext('2d');
var cvs = canvasItemVs.getContext('2d');
var cvc = canvasItemVc.getContext('2d');

function clearCanvas() {
    chs.clearRect(0, 0, canvasItemHs.width, canvasItemHs.height);
    chc.clearRect(0, 0, canvasItemHc.width, canvasItemHc.height);
    cvs.clearRect(0, 0, canvasItemVs.width, canvasItemVs.height);
    cvc.clearRect(0, 0, canvasItemVc.width, canvasItemVc.height);
}

function showResult() {
    // グレースケール
    let mat = cv.imread(imgElement);
    var dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);

    // 白黒反転して2値化
    let threshold = new cv.Mat();
    cv.threshold(dst, threshold, 230, 255, cv.THRESH_BINARY_INV);

    // 輪郭抽出
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

        const point1 = new cv.Point(x, y);
        const point2 = new cv.Point(x + w, y + h);

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
        chs.drawImage(imgElement, x, y, w, h, 180 * (i%5) + 4, 180 * Math.floor(i/5) + 4, 172, 172);
        // 所持数隠し
        chs.beginPath();
        chs.fillStyle = "white";
        chs.fillRect(180 * (i%5) + 58, 180 * Math.floor(i/5) + 138, 113, 32);

        chs.restore(); // クリッピング領域の設定を破棄
        const png = canvasItemHs.toDataURL();
        document.getElementById("itemHs").src = png;
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
        chc.drawImage(imgElement, x+3, y+3, w-6, h-6, 180 * (i%5) + 4, 180 * Math.floor(i/5) + 4, 172, 172);
        // 所持数隠し
        chc.beginPath();
        chc.fillStyle = "white";
        chc.fillRect(180 * (i%5) + 58, 180 * Math.floor(i/5) + 138, 113, 32);

        chc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(chc, 180 * (i%5) + 90, 180 * Math.floor(i/5) + 90, 86);
        const png = canvasItemHc.toDataURL();
        document.getElementById("itemHc").src = png;
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
        // cvs.drawImage(imgElement, x, y, w, h, 180 * (i%2) + 4, 180 * Math.floor(i/2) + 4, 172, 172);
        cvs.drawImage(imgElement, x, y, w, h, 180 * Math.floor(i/5) + 4, 180 *(i%5) + 4, 172, 172);

        // 所持数隠し
        cvs.beginPath();
        cvs.fillStyle = "white";
        cvs.fillRect(180 * Math.floor(i/5) + 58, 180 *(i%5) + 138, 113, 32);

        cvs.restore(); // クリッピング領域の設定を破棄
        const png = canvasItemVs.toDataURL();
        document.getElementById("itemVs").src = png;
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
        cvc.drawImage(imgElement, x+3, y+3, w-6, h-6, 180 * Math.floor(i/5) + 4, 180 *(i%5) + 4, 172, 172);
        // 所持数隠し
        cvc.beginPath();
        cvc.fillStyle = "white";
        cvc.fillRect(180 * Math.floor(i/5) + 58, 180 *(i%5) + 138, 113, 32);

        cvc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(cvc, 180 * Math.floor(i/5) + 90, 180 *(i%5) + 90, 86);
        const png = canvasItemVc.toDataURL();
        document.getElementById("itemVc").src = png;
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