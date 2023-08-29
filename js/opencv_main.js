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


    let threshold = new cv.Mat();
    // 白黒反転して2値化する
    cv.threshold(dst, threshold, 230, 255, cv.THRESH_BINARY_INV)
    // cv.imshow('canvasOutput', threshold);

    findContours(threshold);
    mat.delete();
    dst.delete();
}

/// 輪郭を抽出する
function findContours(dst) {
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(dst, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    
    aa(contours, hierarchy, dst);
    hierarchy.delete();
    contours.delete();
}

/// 輪郭の矩形領域
function aa(contours, hierarchy, img) {
    // 画像の読み込み
    let readImg = cv.imread(imgElement);

    var itemNum = 0;
    for (const i in contours) {
      itemNum++;
      console.log(itemNum);
      console.log(i);
    }

    var rect = cv.boundingRect(contours.get(0));
    let contoursColor = new cv.Scalar(0, 255, 0);
    let rectangleColor = new cv.Scalar(255, 0, 0);
    cv.drawContours(readImg, contours, 0, contoursColor, 1, 8, hierarchy, 100);


    let point1 = new cv.Point(rect.x, rect.y);
    let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
    cv.rectangle(img, point1, point2, rectangleColor, 2, cv.LINE_AA, 2);
    cv.imshow('canvasOutput', img);
    
}

/// OpenCVが読み込めたよの合図
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}