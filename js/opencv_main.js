// 事前準備
let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

// Canvasの準備
var canvas = document.getElementById('canvasOutputItemList');
var canvasWidth = 900;
var canvasHeight = 900;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext('2d');
function main(){
    // グレスケ
    let grayImg = gray(imgElement);
    // 2値化(閾値144)
    let thresholdImg = threshold(grayImg, 144);
    // VIP枠を隠す
    let hideVipImg = hideVip(thresholdImg, grayImg);
    // もう一度2値化(閾値155)
    let thresholdImg2 = threshold(hideVipImg, 155);
    // アイテム用枠を探し出す
    let [contours, hierarchy] = findContours(thresholdImg2);
    let items = rectangleArea(1.2, 1.34, contours, hierarchy);
    itemTileHorizontally(ctx, items, items.length, imgElement);
    
    // 作業過程の表示
    cv.imshow('canvasOutputGrayScale', grayImg);
    cv.imshow('canvasOutputThreshold', thresholdImg);
    cv.imshow('canvasOutputHideVip', hideVipImg);
    cv.imshow('canvasOutputThreshold2', thresholdImg2);
    // 輪郭点の描画
    let readImg = cv.imread(imgElement);
    let readImg2 = cv.imread(imgElement);
    // 矩形と輪郭点描画用の色の指定
    let contoursColor = new cv.Scalar(0, 255, 0, 255);
    let rectangleColor = new cv.Scalar(255, 0, 0, 255);
    cv.drawContours(readImg, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    cv.drawContours(readImg2, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    items.forEach(function(item) {
        const point1 = new cv.Point(item[0], item[1]);
        const point2 = new cv.Point(item[0] + item[2], item[1] + item[3]);
        cv.rectangle(readImg2, point1, point2, rectangleColor, 5, cv.LINE_AA);
    });
    cv.imshow('canvasOutputFindContours', readImg);
    cv.imshow('canvasOutput', readImg2);
    var png = canvas.toDataURL();
    document.getElementById("result").src = png;

}

// グレースケール化
// imgElementを渡されると、グレスケ化して返却
function gray(imgElement){
    let mat = cv.imread(imgElement);
    var dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);

    return dst;
}

// 2値化
// グレスケ画像と閾値を渡されると、閾値で2値化したものを返却
function threshold(grayImg, thresholdValue) {
    let thresholdImg = new cv.Mat();
    cv.threshold(grayImg, thresholdImg, thresholdValue, 255, cv.THRESH_BINARY_INV);

    return thresholdImg;
}

// VIP枠判定
// VIP用に2値化された画像とグレスケ画像を渡されると、VIP枠を白い矩形で隠したグレスケ画像を返却
function hideVip(thresholdImg, grayImg) {
    let [contours, hierarchy] = findContours(thresholdImg);
    let items = rectangleArea(0.53, undefined, contours, hierarchy);
    let rectangleColor = new cv.Scalar(255, 255, 255, 255);
    console.log(items)
    items.forEach(function(item){
        const point1 = new cv.Point(item[0], item[1]);
        const point2 = new cv.Point(item[0] + item[2], item[1] + item[3]);
        cv.rectangle(grayImg, point1, point2, rectangleColor, cv.FILLED);
    });
    return grayImg;
}

// 輪郭を抽出する
// 2値化された画像を渡されると、輪郭点とヒエラルキーを返却
function findContours(thresholdImg) {
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(thresholdImg, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    return [contours, hierarchy];
}

// 矩形判定
// 縦横比(h/w)と輪郭点とヒエラルキーを渡されると、矩形判定されたものの位置と数を返却
function rectangleArea(minAspectRatio=0, maxAspectRatio=2, contours, hierarchy) {
    var itemNum = 0;
    var items = [[]];

    // 1個も四角がない場合はそこで終わり
    if (contours.size() < 1) {
        return
    }

    // 輪郭点の描画
    // cv.drawContours(readImg, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    // cv.drawContours(readImg2, contours, -1, contoursColor, 5, 8, hierarchy, 100);

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
        if (0.90<val && val<0.94 && minAspectRatio < h/w && h/w <maxAspectRatio){
            // if (0.90<val && val<0.94 && 1.2<h/w && h/w<1.34 && w>100){
            // アイテムの枠を囲む
            // cv.rectangle(readImg2, point1, point2, rectangleColor, 5, cv.LINE_AA);
            
            // console.log(x,y,w,h, val);
            itemNum++;
            items.unshift([x,y,w,h]);
        }
    }
    // itemsのいちばんうしろには不要な配列があるので消す
    items.pop();

    return items;
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

/// アイテムを切り取って並べる
/// ctxとアイテムの座標情報とアイテム数とimgElementを渡されると、アイテムの画像たちを返す
function itemTileHorizontally(ctx, items, itemNum, imgElement) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        // const h = items[i][3]*0.7;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;
        // 所持数隠しの円のサイズ
        const r = imgElement.height/imgElement.width>2 ? 34 : 19;

        if (i<5) {
            // 角丸矩形でクリッピング
            ctx.save();
            drawsq(180 * i + 7, 532, 165, 165, 12);
            ctx.clip();
            ctx.drawImage(imgElement, x, y, w, h, 180 * i + 7, 532, 165, 165);

            // 所持数隠し
            ctx.beginPath();

            ctx.arc(180 * i + 166, 532, r, 0, Math.PI * 2, true);
            ctx.fillStyle = "white";
            ctx.fill()

            ctx.restore(); // クリッピング領域の設定を破棄
        } else {
            // 角丸矩形でクリッピング
            ctx.save();
            drawsq(180 * (i - 5) + 7, 712, 165, 165, 12);
            ctx.clip();
            ctx.drawImage(imgElement, x, y, w, h, 180 * (i - 5) + 7, 712, 165, 165);

            // 所持数隠し
            ctx.beginPath();
            ctx.arc(180 * (i-5) + 166, 712, r, 0, Math.PI * 2, true);
            ctx.fillStyle = "white";
            ctx.fill()
            ctx.restore(); // クリッピング領域の設定を破棄
        }
    }
}
// 角丸の四角形を描画する(クリッピングのため)
function drawsq(x, y, w, h, r) {
    const color = "rgb(214,215,218)";
    ctx.beginPath();
    ctx.lineWidth = 10;
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

/// OpenCVが読み込めたよの合図
function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
  }