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


/// 2値化する
function threshold() {
    // グレースケール化
    let mat = cv.imread(imgElement);
    var dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow('canvasOutputGrayScale', dst);


    let threshold = new cv.Mat();
    // 白黒反転して2値化する
    cv.threshold(dst, threshold, 230, 255, cv.THRESH_BINARY_INV);
    cv.imshow('canvasOutputThreshold', threshold);

    findContours(threshold);
    mat.delete();
    dst.delete();
}

/// 輪郭を抽出する
function findContours(threshold) {
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(threshold, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    
    rectangleArea(contours, hierarchy);
    threshold.delete();
    hierarchy.delete();
    contours.delete();
}

/// 輪郭の矩形領域
function rectangleArea(contours, hierarchy) {
    // 画像の読み込み
    console.log(typeof imgElement);
    let readImg = cv.imread(imgElement);
    let readImg2 = cv.imread(imgElement);

    // 矩形と輪郭点描画用の色の指定
    let contoursColor = new cv.Scalar(0, 255, 0, 255);
    let rectangleColor = new cv.Scalar(255, 0, 0, 255);

    var itemNum = 0;
    var items = [[]];

    // 1個も四角がない場合はそこで終わり
    if (contours.size() < 1) {
        return
    }

    // 輪郭点の描画
    cv.drawContours(readImg, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    cv.drawContours(readImg2, contours, -1, contoursColor, 5, 8, hierarchy, 100);

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
        if (0.90<val && val<0.94 && 1.2<h/w && h/w<1.32 && w>100){
        // if (0.90<val && val<0.94 ) {
            // アイテムの枠を囲む
            cv.rectangle(readImg2, point1, point2, rectangleColor, 5, cv.LINE_AA);
                
            
            console.log(w,h, val);
            // 160 197 0.93 ipad 1.225
            // 188-190 243-244 0.90-0.92 iphone? 1.297..1.278...
            // 151-153 199 0.91 iphone11 1.31-1.32
            itemNum++;
            items.unshift([x,y,w,h]);
            // console.log(rect);
        }
    }
    itemTileHorizontally(items, itemNum);
    cv.imshow('canvasOutputFindContours', readImg);
    cv.imshow('canvasOutput', readImg2);   
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
function itemTileHorizontally(items, itemNum) {
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
            // ctx.beginPath();
            // ctx.fillStyle = "white";
            // ctx.fillRect(180 * i + 58, 663, 109, 32);

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

            // 所持数隠し
            // ctx.beginPath();
            // ctx.fillStyle = "white";
            // ctx.fillRect(180 * (i - 5) + 58, 843, 109, 32);
        }
        var png = canvas.toDataURL();
        document.getElementById("result").src = png;
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