// 影の設定
shadowElm.addEventListener('input', changeShadowValue);

// ふちの設定
fuchiElm.addEventListener('input', changefuchiValue);

// 描画に必要なデータ用
class DrawImageInfo {
    constructor(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.img = img;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
        this.shadowValue = shadowElm.value;
        this.fuchiValue = fuchiElm.value;
    }

    // メインキャンバスに描画
    drawImage() {
        if (this.shadowValue == 0) {
            this.drawNormalImage();
        } else {
            this.drawShadowImage();
        }
        if (this.fuchiValue != 0) {
            this.drawFuchi();
        }
    }

    drawNormalImage() {
        c.drawImage(
            this.img,
            this.sx,
            this.sy,
            this.sw,
            this.sh,
            this.dx,
            this.dy,
            this.dw,
            this.dh
        );
    }
    // 影付きでメインキャンバスに描画
    drawShadowImage() {
        c.save();
        c.shadowColor = "rgba(0,0,0,0.253)";
        c.shadowOffsetX = this.shadowValue;
        c.shadowOffsetY = this.shadowValue;
        c.shadowBlur = 5;
        this.drawNormalImage();
        c.restore();
    }

    // フチ部分の描画
    drawFuchi() {
        c.save();
        c.shadowColor = "white";
        c.shadowBlur = 2;

        for (let i = 0; i < 360; i+=15) {
            c.shadowOffsetX = Math.sin(i) * this.fuchiValue
            c.shadowOffsetY = Math.cos(i) * this.fuchiValue
            this.drawNormalImage();
        }
        c.restore();
    }
    setDrawImageInfo(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.img = img;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
    }

    setShadowValue(n) {
        this.shadowValue = n;
    }

    setFuchiValue(n) {
        this.fuchiValue = n;
    }
    setMovedDrawImageInfo(dx, dy) {
        this.dx = dx;
        this.dy = dy;
        redrawCanvas();
    }
    setScaledDrawImageInfo(dw, dh) {
        this.dw = dw;
        this.dh = dh;
    }
}



// アバター透過画像
var avatorDrawImageInfo = new DrawImageInfo;
var avatorRect = {x:0, y:0, w:0, h:0};
var avatorResized = {x:0, y:0};

// 背景色を変更するボタン用の処理
var colorButtonElements = [].slice.call(document.getElementById("colorButtons").children);
var bgInfo = new BgInfo(colorButtonElements, 0);
// 黒猫さんのフレーム用
const kuronekoFrameButtonElm = [].slice.call(document.getElementById("frameButtonsKuroneko").children);
var kuronekoFrameInfo = new BgInfo(kuronekoFrameButtonElm, 0);


// アバター画像が読み込めたら処理開始
avatorImgElement.addEventListener('load', (e) => {
    pickColors();
    templateSet();
    calcAvatorArea();
    redrawCanvas();
    // プレビュー用の画像を非表示にし、調整用のCanvasを表示する
    previewArea.style.display = "none";
    canvas.style.display = "block";
    editMenu.style.display = "grid";
    // colorButtons.style.display = "inline-block";
    result.style.display = "none";
});

// スクショ画像が読み込めたら処理開始
screenShotImgElement.addEventListener('load', (e) => {
    calcItemListArea();
    redrawCanvas();
});

// 背景画像
inputbackgroundElement.addEventListener('change', (e) => {
    backgroundImgElement.src = URL.createObjectURL(e.target.files[0]);
    bgImgBtn.src = URL.createObjectURL(e.target.files[0]);
}, false);

// カラーピッカーで背景色を変えたとき
for (i=0; i<4; i++) {
    const id = "colorBtn" + i; 
    const colorBtn = document.getElementById(id);
    colorBtn.addEventListener('change', function(){
        console.log(this.value);
        const id = $(this).attr('id').slice(-1);
        bgColorList[id] = this.value;
        bgInfo.colorList=(bgColorList);
        bgInfo.changeIndex(bgInfo.bgIndex);
        redrawCanvas();
    });
}

// カラーピッカーでフレーム色を変えたとき
for (i=0; i<5; i++) {
    const id = "frameBtnKuroneko" + i; 
    const colorBtn = document.getElementById(id);
    colorBtn.addEventListener('change', function(){
        console.log(this.value);
        const id = $(this).attr('id').slice(-1);
        kuronekoFrameColorList[id] = this.value;
        kuronekoFrameInfo.colorList=(kuronekoFrameColorList);
        kuronekoFrameInfo.changeIndex(kuronekoFrameInfo.bgIndex);
    });
}


// 背景画像が読み込めたら処理開始
backgroundImgElement.addEventListener('load', (e) => {
    calcBackground();
    bgInfo.changeIndex(4);
    redrawCanvas();
});



// 描画用の座標を覚えるためのクラス
class PointTable
{
    constructor( _table_max = 10 ) {
        this.x = []
        this.y = []
        this.table_max = _table_max
        for ( let i=0 ; i<_table_max ; i++ ) {
            this.x.push( 0 )
            this.y.push( 0 )
        }
    }

    get_idx( _i ) {
        const i = ( _i < 0 ? -_i : _i ) // abs
        return i % this.table_max
    }

    get_xy( _tc ) {
        const r = this.get_idx( _tc.identifier )
        return { x: this.x[r], y: this.y[r] }
    }

    set_xy( _tc ){
        const r = this.get_idx( _tc.identifier )
        const rect = _tc.target.getBoundingClientRect();
        this.x[r] = (_tc.pageX - rect.x - window.scrollX) * (canvas.width/canvas.clientWidth)
        this.y[r] = (_tc.pageY - rect.y - window.scrollY) * (canvas.height/canvas.clientHeight)
    }
}
const xy_tbl = new PointTable()
const for_touches = ( _evt, _fnc ) => {
    for ( let i=0 ; i<_evt.changedTouches.length ; i++ )
        _fnc( _evt.changedTouches[i] )
}

// canvas上の画像を移動する
const moveImage = ( _t ) => {
    const p = xy_tbl.get_xy( _t )
    const rect = _t.target.getBoundingClientRect();

    const x = (_t.pageX - rect.x - window.scrollX) * (canvas.width/canvas.clientWidth)
    const y = (_t.pageY - rect.y - window.scrollY) * (canvas.height/canvas.clientHeight)

    avatorDrawImageInfo.setMovedDrawImageInfo(
        avatorDrawImageInfo.dx + (x - p.x),
        avatorDrawImageInfo.dy + (y - p.y)
    );
    xy_tbl.set_xy( _t )
}

canvas.addEventListener( "touchstart", ( _evt ) => {
    _evt.preventDefault()
    for_touches( _evt, ( _t ) => xy_tbl.set_xy( _t ) )
}, false )

canvas.addEventListener( "touchmove", ( _evt ) => {
    _evt.preventDefault()
    for_touches( _evt, ( _t ) => moveImage( _t ) )
}, false )

canvas.addEventListener( "touchend", ( _evt ) => {
    _evt.preventDefault()
    for_touches( _evt, ( _t ) => {
        moveImage( _t )
    })
}, false )

function clearAllCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    chs.clearRect(0, 0, canvasItemHs.width, canvasItemHs.height);
    chc.clearRect(0, 0, canvasItemHc.width, canvasItemHc.height);
    cvs.clearRect(0, 0, canvasItemVs.width, canvasItemVs.height);
    cvc.clearRect(0, 0, canvasItemVc.width, canvasItemVc.height);
    cha.clearRect(0, 0, canvasAvator.width, canvasAvator.height);
    chb.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
    csh.clearRect(0, 0, canvasShadow.width, canvasShadow.height);
}

/// アイテムを表示
function showItemList() {
    chgImgBtn.style.display = "block";
    switch (templateMode) {
        case 0:
            c.drawImage(canvasItemHs, 0, 530);
            break;
        case 1:
            c.drawImage(kuronekoItemList, 407, 708);
            break;
        case 2:
            c.drawImage(canvasItemMiya, 0, 0);
            break;
        case 3:
            c.drawImage(canvasItemVc, 530, 0);
            break;
    }
}

/// アバター画像から代表色を取得する
function pickColors() {
    // 代表色をRGBからHEXに変換する
    pickedColorList = colorThief.getPalette(avatorImgElement, 4).map((x) => rgb2hex(x));
    bgColorList = colorThief.getPalette(avatorImgElement, 4).map((x) => rgb2hex(x));
    kuronekoFrameColorList = colorThief.getPalette(avatorImgElement, 4).map((x) => rgb2hex(x));
    // 初期色として白を加えておく
    kuronekoFrameColorList.unshift("#f8f8f8");

    console.log(pickedColorList);

    // ボタンの背景色に設定する
    const $getListAItems = document.getElementById("colorButtons").children;
    for( var $i = 0; $i < $getListAItems.length; $i++ ){
        $getListAItems[$i].style.backgroundColor = bgColorList[$i];
        console.log(bgColorList[0]);
        if ($getListAItems[$i].type == "color") {
            $getListAItems[$i].value = bgColorList[$i];
        } else {
            $getListAItems[$i].value = ""
        }
        $getListAItems[$i].onclick =
        function(){
            bgIndex = colorButtonElements.indexOf(this);
            console.log(bgInfo.bgIndex, bgIndex)
            if(bgIndex < 4) {
                // if (bgInfo.bgIndex == bgIndex) {
                    $getListAItems[bgIndex].type = "color"
                    $getListAItems[bgIndex].value = bgColorList[bgIndex];
                // } else {
                if (bgInfo.bgIndex != bgIndex) {

                    $getListAItems[bgInfo.bgIndex].type = "button";
                    $getListAItems[bgInfo.bgIndex].value = ""
                    $getListAItems[bgInfo.bgIndex].style.backgroundColor = bgColorList[bgInfo.bgIndex];
                }
                 
                // }
            }
            bgInfo.changeIndex(bgIndex);
            redrawCanvas();
        };
    }
    // 黒猫さんのフレーム用
    const $kunonekoItems = document.getElementById("frameButtonsKuroneko").children;
    for( var $i = 0; $i < $kunonekoItems.length; $i++ ){
        $kunonekoItems[$i].style.backgroundColor = kuronekoFrameColorList[$i];
        console.log(kuronekoFrameColorList[0]);
        if ($kunonekoItems[$i].type == "color") {
            $kunonekoItems[$i].value = kuronekoFrameColorList[$i];
        } else {
            $kunonekoItems[$i].value = ""
        }
        $kunonekoItems[$i].onclick =
        function(){
            bgIndex = kuronekoFrameButtonElm.indexOf(this);
            console.log(kuronekoFrameInfo.bgIndex, bgIndex)
            if(bgIndex < 5) {
                $kunonekoItems[bgIndex].type = "color"
                $kunonekoItems[bgIndex].value = kuronekoFrameColorList[bgIndex];
                if (kuronekoFrameInfo.bgIndex != bgIndex) {
                    $getListAItems[kuronekoFrameInfo.bgIndex].type = "button";
                    $getListAItems[kuronekoFrameInfo.bgIndex].value = ""
                    $getListAItems[kuronekoFrameInfo.bgIndex].style.backgroundColor = kuronekoFrameColorList[kuronekoFrameInfo.bgIndex];
                }
            }
            kuronekoFrameInfo.changeIndex(bgIndex);
            // redrawCanvas();
        };
    }
}

// RGBをHEXに変換する
function rgb2hex ( rgb ) {
	return "#" + rgb.map( function ( value ) {
		return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
	} ).join( "" ) ;
}

/// 背景画像計算
function calcBackground() {
    
    chb.drawImage(backgroundImgElement, 0, 0, 900, 900);

    // 背景色ボタンの背景に画像を設定する
    const $image = backgroundImgElement.src;
    const $elementReference = document.getElementById( "colorBtn5" );
    $elementReference.style.backgroundImage = "url( " + $image + " )";
    // 背景アイコンが邪魔なので消す
    document.getElementById("backgroundIc").style.display = "none";
}

/// アバター表示計算
function calcAvatorArea() {
    cha.clearRect(0, 0, canvasAvator.width, canvasAvator.height);

    // グレースケール
    const avatorMat = cv.imread(avatorImgElement, cv.IMREAD_UNCHANGED);
    let avatorDst = new cv.Mat();
    cv.cvtColor(avatorMat, avatorDst, cv.COLOR_RGBA2GRAY, 0);
    // 白黒反転して2値化
    let avatorThreshold = new cv.Mat();
    cv.threshold(avatorDst, avatorThreshold, 1, 255, cv.THRESH_BINARY);
    // 輪郭取得
    let avatorContours = new cv.MatVector();
    let avatorHierarchy = new cv.Mat();
    cv.findContours(avatorThreshold, avatorContours, avatorHierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // アバターの表示領域を見つける
    let avatorTmpRect = {
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

    avatorRect = {
        x: avatorTmpRect.x1, y: avatorTmpRect.y1, w: avatorTmpRect.x2-avatorTmpRect.x1, h: avatorTmpRect.y2-avatorTmpRect.y1
    };
    // アバターを900x900内に収めた時のサイズ
    avatorResized = {
        w: avatorRect.w, h: avatorRect.h
    };
    // サイズ調整
    avatorResized.w *= 510 / avatorRect.h;
    avatorResized.h *= 510 / avatorRect.h;
    console.log("アバターの表示領域：",avatorRect);
    avatorDrawImageInfo.setDrawImageInfo(
        avatorImgElement,
        avatorRect.x,
        avatorRect.y,
        avatorRect.w,
        avatorRect.h,
        (long-avatorResized.w)/2,
        10,
        avatorResized.w,
        avatorResized.h
    );
}

/// アイテム表示計算
function calcItemListArea() {
    // アイテム用Canvasの初期化
    chs.clearRect(0, 0, canvasItemHs.width, canvasItemHs.height);
    chc.clearRect(0, 0, canvasItemHc.width, canvasItemHc.height);
    cvs.clearRect(0, 0, canvasItemVs.width, canvasItemVs.height);
    cvc.clearRect(0, 0, canvasItemVc.width, canvasItemVc.height);
    cmiya.clearRect(0, 0, canvasItemMiya.width, canvasItemMiya.height);
    kuronekoItemListCtx.clearRect(0, 0, kuronekoItemList.width, kuronekoItemList.height);

    // グレースケール
    let mat = cv.imread(screenShotImgElement);
    let dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);

    // 白黒反転して2値化
    let threshold = new cv.Mat();
    cv.threshold(dst, threshold, 155, 255, cv.THRESH_BINARY_INV);

    // 輪郭取得
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(threshold, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // 輪郭の矩形領域
    let itemNum = 0;
    let items = [[]];
    // 1個も四角がない場合はそこで終わり
    if (contours.size() < 1) {
        // document.getElementById("imgStatus").innerText = "アイテムを検出できませんでした。"
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

        // アプデ後のアイテム枠の比率・矩形度に近いもの、着用中の「用」に引っかからないようサイズは100以上（暫定）
        if (0.90<val && val<0.94 && 1.2<h/w && h/w<1.34 && w>100){
            itemNum++;
            items.unshift([x,y,w,h]);
        }
    }
    if (itemNum == 0) {
        // document.getElementById("imgStatus").innerText = "アイテムを検出できませんでした。"
        return;
    }
    itemSquareTileHorizontally(items, itemNum);
    itemSquareTileVertically(items, itemNum);
    itemCircleTileHorizontally(items, itemNum);
    itemCircleTileVertically(items, itemNum);
    itemCircleTileMiyaVertically(items, itemNum);
    itemSqKuronekoHorizontally(items, itemNum);
}

function createPng() {
    const png = canvas.toDataURL();
    document.getElementById("result").src = png;
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
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;
        // 所持数隠しの円のサイズ
        const r = screenShotImgElement.height/screenShotImgElement.width>2 ? 34 : 19;

        // 角丸矩形でクリッピング
        chs.save();
        drawsq(chs, 180 * (i%5) + 7, 180 * Math.floor(i/5) + 15, 165, 165, 12);
        chs.clip();
        chs.drawImage(screenShotImgElement, x, y, w, h, 180 * (i%5) + 7, 180 * Math.floor(i/5) + 15, 165, 165);
        // 所持数隠し
        chs.beginPath();
        chs.arc(180 * (i%5) + 166, 180 * Math.floor(i/5) + 15, r, 0, Math.PI * 2, true);
        chs.fillStyle = "white";
        chs.fill()

        chs.restore(); // クリッピング領域の設定を破棄
    }
}

function itemSqKuronekoHorizontally(items, itemNum) {
    // アイテム描画後の正方形の1辺の長さ
    const itemSize = 79
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;
        const r = screenShotImgElement.height/screenShotImgElement.width>2 ? 17 : 9;


        // 角丸矩形でクリッピング
        kuronekoItemListCtx.save();
        drawsq(kuronekoItemListCtx, 4+(11+itemSize) * (i%5), 4+(11+itemSize) * Math.floor(i/5), itemSize, itemSize, 5, grayColor, 7);
        kuronekoItemListCtx.clip();
        kuronekoItemListCtx.drawImage(screenShotImgElement, x, y, w, h, 4+(11+itemSize) * (i%5), 4+(11+itemSize) * Math.floor(i/5), itemSize, itemSize);
        // 所持数隠し
        kuronekoItemListCtx.beginPath();
        kuronekoItemListCtx.arc( 4+(11+itemSize) * (i%5)+itemSize, 4+(11+itemSize) * Math.floor(i/5), r, 0, Math.PI * 2, true);
        kuronekoItemListCtx.fillStyle = "white";
        kuronekoItemListCtx.fill()

        kuronekoItemListCtx.restore(); // クリッピング領域の設定を破棄
    }
    for (let i=itemNum; i<10; i++) {
        kuronekoItemListCtx.save();
        drawsq(kuronekoItemListCtx, 4+(11+itemSize) * (i%5), 4+(11+itemSize) * Math.floor(i/5), itemSize, itemSize, 5, grayColor, 7);
        kuronekoItemListCtx.clip();
        let stroke = 3
        drawsq(kuronekoItemListCtx, 4+(11+itemSize) * (i%5)+stroke, 4+(11+itemSize) * Math.floor(i/5)+stroke, itemSize-stroke*2, itemSize-stroke*2, 5, "white");
        kuronekoItemListCtx.drawImage(kuronekoNullItemImg, 0, 0, itemSize, itemSize, 3+(11+itemSize) * (i%5), 3+(11+itemSize) * Math.floor(i/5), itemSize, itemSize);
        kuronekoItemListCtx.restore(); // クリッピング領域の設定を破棄
    }
}

function itemCircleTileHorizontally(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;

        // 円でクリッピング
        chc.save();
        drawCircle(chc, 180 * (i%5) + 90, 180 * Math.floor(i/5) + 90+11, 85);
        chc.clip();
        chc.drawImage(screenShotImgElement, x, y, w, h, 180 * (i%5) + 4, 180 * Math.floor(i/5) + 4+11, 170, 170);

        chc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(chc, 180 * (i%5) + 90, 180 * Math.floor(i/5) + 90+11, 85);
    }
}

function itemSquareTileVertically(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;
        // 所持数隠しの円のサイズ
        const r = screenShotImgElement.height/screenShotImgElement.width>2 ? 34 : 19;

        // 角丸矩形でクリッピング
        cvs.save();
        // drawsq(cvs, 180 * (i%2) + 4, 180 * Math.floor(i/2) + 4, 172, 172, 12);
        drawsq(cvs, 180 * Math.floor(i/5) + 15, 180 *(i%5) + 7, 165, 165, 12);

        cvs.clip();
        // cvs.drawImage(screenShotImgElement, x, y, w, h, 180 * (i%2) + 4, 180 * Math.floor(i/2) + 4, 172, 172);
        cvs.drawImage(screenShotImgElement, x, y, w, h, 180 * Math.floor(i/5) + 15, 180 *(i%5) + 7, 165, 165);

        // 所持数隠し
        cvs.beginPath();
        cvs.arc(180 * Math.floor(i/5) + 166, 180 * (i%5) + 15, r, 0, Math.PI * 2, true);
        cvs.fillStyle = "white";
        cvs.fill()

        cvs.restore(); // クリッピング領域の設定を破棄
    }
}

function itemCircleTileVertically(items, itemNum) {
    for (let i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;

        // 円でクリッピング
        cvc.save();
        drawCircle(cvc, 180 * Math.floor(i/5) + 90+11, 180 *(i%5) + 90, 85);
        cvc.clip();
        cvc.drawImage(screenShotImgElement, x, y, w, h, 180 * Math.floor(i/5) + 4+11, 180 *(i%5) + 4, 170, 170);

        cvc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(cvc, 180 * Math.floor(i/5) + 90+11, 180 *(i%5) + 90, 85);
    }
}

function itemCircleTileMiyaVertically(items, itemNum) {
    for (i=0; i<itemNum; i++) {
        // アイテムの座標
        const w = items[i][2]*0.845;
        const h = w;
        const x = items[i][0] +w*0.06;
        const y = items[i][1] +w*0.13;

        // 円でクリッピング
        cmiya.save();
        drawCircle(cmiya, 716 * (i%2) + 91.5, 108 * Math.floor(i/2) + 365.5, 47.5);
        console.log(i, 716 * (i%2) + 91.5, 108 * Math.floor(i/2) + 365.5)
        cmiya.clip();
        cmiya.drawImage(screenShotImgElement, x, y, w, h, 716 * (i%2) + 44, 108 * Math.floor(i/2) + 318, 95, 95);

        cmiya.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(cmiya, 716 * (i%2) + 91.5, 108 * Math.floor(i/2) + 365.5, 47.5, 3, "white");
    }
}

// 角丸の四角形を描画する(クリッピングのため)
function drawsq(ctx, x, y, w, h, r, color = grayColor, lineWidth = 10) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
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
    ctx.fillStyle = grayColor;
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.closePath();	// closeさせる
    ctx.stroke();  // 線ひく
    ctx.fill();  // 中を塗る
    ctx.restore();
}

// 円を描画する（縁取り用）
function drawCircleEdge(ctx, dx, dy, r, weight = 5, color = grayColor) {
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = weight;
    ctx.stroke();
}

// 再描画する
function redrawCanvas() {
    // プレビュー用の画像を非表示にし、調整用のCanvasを表示する
    previewArea.style.display = "none";
    canvas.style.display = "block";
    result.style.display = "none";
    c.clearRect(0, 0, canvas.width, canvas.height);
    bgInfo.changeBackground();
    avatorDrawImageInfo.drawImage();
    if (templateMode == 1) {
        bgInfo.changeForeground(kuronekoFrameInfo.bgIndex);

    } else {
        bgInfo.changeForeground()
    }
    showItemList();
}

function changeShadowValue(e){
    avatorDrawImageInfo.setShadowValue(shadowElm.value);
    document.getElementById('shadowValue').innerHTML = Number(shadowElm.value).toPrecision(2);
    redrawCanvas();
}

function changefuchiValue(e) {
    avatorDrawImageInfo.setFuchiValue(fuchiElm.value);
    document.getElementById('fuchiValue').innerHTML = Number(fuchiElm.value).toPrecision(2);
    redrawCanvas();
}

function changeTemplate(n) {
    // テンプレによって色々数値を変える
    console.log(n);
    templateMode = n;
    switch (n) {
        case 0:
            avatorDrawImageInfo.setScaledDrawImageInfo(
                avatorResized.w,
                avatorResized.h
            )
            avatorDrawImageInfo.setMovedDrawImageInfo(
                (long-avatorResized.w)/2,
                10
            );
            break;
        case 1:
            avatorDrawImageInfo.setScaledDrawImageInfo(
                avatorResized.w / avatorResized.h * 640,
                640
            )
            avatorDrawImageInfo.setMovedDrawImageInfo(
                (long-(avatorResized.w / avatorResized.h * 640))/2,
                40
            );
            break;
        case 2:
            avatorDrawImageInfo.setScaledDrawImageInfo(
                avatorResized.w / avatorResized.h * 605,
                605
            )
            avatorDrawImageInfo.setMovedDrawImageInfo(
                (long-(avatorResized.w / avatorResized.h * 605))/2,
                184
            );
            break;
        case 3:
            console.log(avatorResized.w)
            console.log(avatorRect.w)
            console.log(avatorResized.w * 510 / avatorRect.w)
            avatorDrawImageInfo.setScaledDrawImageInfo(
                avatorResized.w * avatorRect.h / avatorRect.w,
                avatorResized.h * avatorRect.h / avatorRect.w
            )
            avatorDrawImageInfo.setMovedDrawImageInfo(
                10,
                (long-(avatorResized.h * avatorRect.h / avatorRect.w))/2
            );
            break;
    }
}
function templateSet() {
    const $templateBtnElms = document.querySelectorAll(".templateBtn");
    for (var $i = 0; $i < $templateBtnElms.length; $i++) {
        $templateBtnElms[$i].onclick =
        function() {
            let elmNum = templateButtonElements.indexOf(this);
            if (elmNum != templateMode) {
                // テンプレの切り替え
                templateButtonElements.map( function(e) {
                    e.style.backgroundColor = 'white';
                    e.firstElementChild.classList.remove("selectedCard");
                    e.children[1].style.display = "none";
                });
                // 選択中のテンプレボタンはデザインを変える
                this.style.backgroundColor = '#ddeeee';
                console.log(this.children[1].classList)
                this.firstElementChild.classList.add("selectedCard");
                this.children[1].style.display = "block";
                changeTemplate(templateButtonElements.indexOf(this));
                redrawCanvas();
            } else {
                // テンプレ内の詳細編集
                openEditDetail(elmNum);                
            }
        }
    }
}
