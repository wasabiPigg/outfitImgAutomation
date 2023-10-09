// 画像読み込み
let src = cv.imread('canvasInput');
// 全部0の行列を作成
let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);

// 入力画像（src）をグレースケールにして上書き
cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
// 入力画像（src）を2値化する
cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);

// 箱を用意する
let contours = new cv.MatVector();
let hierarchy = new cv.Mat();
// 2値化した入力画像（src）の輪郭の配列を出す
cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
// 輪郭の配列の最初の要素を取り出す？
let cnt = contours.get(0);

// 長方形を作る
let rect = cv.boundingRect(cnt);

// 色を定義する
let contoursColor = new cv.Scalar(0, 255, 0);
let rectangleColor = new cv.Scalar(255, 0, 0);

// 新品の画像（dst）に輪郭の配列・輪郭idx？・厚さ・線のタイプ・図形のいれこの配列・オフセットを渡して描画する
cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);

// 長方形の始点と終点を指定する？
let point1 = new cv.Point(rect.x, rect.y);
let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);

// 画像・ポイント1・ポイント2・色・厚さ？・線のタイプ・シフト
cv.rectangle(dst, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
// 画像を表示する
cv.imshow('canvasOutput', dst);
// 諸々消す
src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();

//----
// let src = cv.imread('canvasInput');
// let src2 = cv.imread('canvasInput');
// let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
// cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
// cv.threshold(src, src, 128, 255, cv.THRESH_BINARY_INV)
// let contours = new cv.MatVector();
// let hierarchy = new cv.Mat();
// cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
// let cnt = contours.get(0);
// // You can try more different parameters
// let rect = cv.boundingRect(cnt);
// let contoursColor = new cv.Scalar(255, 255, 255);
// let rectangleColor = new cv.Scalar(255, 0, 0);
// cv.drawContours(src2, contours, 0, contoursColor, 1, 8, hierarchy, 100);
// let point1 = new cv.Point(rect.x, rect.y);
// let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
// cv.rectangle(src2, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
// cv.imshow('canvasOutput', src2);
// src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();
