let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

/// 2値化する
function threshold() {
    // グレースケール化
    let mat = cv.imread(imgElement);
    var dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow('canvasOutputGrayScale', dst);


    let threshold = new cv.Mat();
    // 白黒反転して2値化する
    cv.threshold(dst, threshold, 230, 255, cv.THRESH_BINARY_INV)
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
    
    aa(contours, hierarchy);
    threshold.delete();
    hierarchy.delete();
    contours.delete();
}

/// 輪郭の矩形領域
function aa(contours, hierarchy) {
    // 画像の読み込み
    let readImg = cv.imread(imgElement);
    let readImg2 = cv.imread(imgElement);
    let contoursColor = new cv.Scalar(0, 255, 0, 255);
    let rectangleColor = new cv.Scalar(255, 0, 0, 255);

    var itemNum = 0;

    // 1個も四角がない場合はそこで終わり
    if (contours.size() < 1) {
        return
    }
    
    cv.drawContours(readImg, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    cv.drawContours(readImg2, contours, -1, contoursColor, 5, 8, hierarchy, 100);

    console.log("見つかった矩形の数: ",contours.size());
    for (let i=0; i<contours.size(); i++) {
        const rect = cv.boundingRect(contours.get(i));
        const w = rect.width;
        const h = rect.height;
        const point1 = new cv.Point(rect.x, rect.y);
        const point2 = new cv.Point(rect.x + w, rect.y + h);

        const val = rectangularity(contours.get(i));

        if (0.996<val && val<0.999 && Math.abs(w-h)<2){

            cv.rectangle(readImg2, point1, point2, rectangleColor, 5, cv.LINE_AA);
        }
    }
    
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

/// OpenCVが読み込めたよの合図
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}