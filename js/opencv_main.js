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
    
    aa(contours, hierarchy, threshold);
    hierarchy.delete();
    contours.delete();
}

/// 輪郭の矩形領域
function aa(contours, hierarchy, threshold) {
    // 画像の読み込み
    let readImg = cv.imread(imgElement);
    let readImg2 = cv.imread(imgElement);

    var itemNum = 0;
    // for (const i in contours) {
    //   console.log(i);
    //   itemNum++;
    //   console.log(itemNum);
    // }

    var rect = cv.boundingRect(contours.get(42));
    console.log(Object.values(contours));
    let contoursColor = new cv.Scalar(0, 255, 0, 255);
    let rectangleColor = new cv.Scalar(255, 0, 0, 255);
    cv.drawContours(readImg, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    cv.drawContours(readImg2, contours, -1, contoursColor, 5, 8, hierarchy, 100);
    cv.imshow('canvasOutputFindContours', readImg);


    let point1 = new cv.Point(rect.x, rect.y);
    let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
    console.log(rect);
    cv.rectangle(readImg2, point1, point2, rectangleColor, 5, cv.LINE_AA);
    cv.imshow('canvasOutput', readImg2);
    
}

/// OpenCVが読み込めたよの合図
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}