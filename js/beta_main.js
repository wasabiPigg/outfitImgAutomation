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

// 背景に必要なデータ用
class BgInfo {
    constructor(elm, bgIndex) {
        this.elm = elm;
        this.bgIndex = bgIndex;
    }

    // 選択中の一つのボタンだけ丸くする
    round(index) {
        // 一旦全部四角くする
        for ( var j = 0; j < this.elm.length; j++ ) {
            this.elm[j].classList.replace('rounded-circle','rounded-square');
            this.elm[j].classList.remove('border-5');
        }
        // 選択中の背景は形を丸くする
        this.elm[index].classList.replace('rounded-square','rounded-circle');
        if (this.elm[index].type == "color") {
            // 単色背景は縁取りをつける
            this.elm[index].classList.add('border-5');
            this.elm[index].style.borderColor = pickedColorList[index];
        }
        console.log(index)
    }

    changeIndex(newIndex) {
        this.bgIndex = newIndex;
        this.round(this.bgIndex);
    }

    // canvasの背景を変更
    changeBackground() {
        this.round(this.bgIndex);
        c.clearRect(0, 0, canvas.width, canvas.height);
        switch (this.bgIndex) {
            case 4:
                // 任意の背景画像
                c.drawImage(canvasBackground, 0, 0);
                break;
            case 5:
                // 背景色なし
                
                break;
            default:
                // 配列内の背景色
                c.fillStyle = pickedColorList[this.bgIndex];
                c.fillRect(0, 0, canvas.width, canvas.height);
                break;
        }
        // テンプレートによって追加で背景を描く
        switch (templateMode) {
            case 1: // 黒猫さんデザイン
                drawKuronekoBg(pickedColorList, 0);
                break;
            case 2: // みやさんデザイン
                // drawMiyaBg(pickedColorList);
                break;
            default:
                break;
        }
    }
}

// アバター透過画像
var avatorDrawImageInfo = new DrawImageInfo;
var avatorRect = {x:0, y:0, w:0, h:0};
var avatorResized = {x:0, y:0};

// 背景色を変更するボタン用の処理
var colorButtonElements = [].slice.call(document.getElementById("colorButtons").children);
var bgInfo = new BgInfo(colorButtonElements, 0);


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
    var id = "colorBtn" + i; 
    var colorBtn = document.getElementById(id);
   colorBtn.addEventListener('change', function(){
        console.log(this.value);
        var id = $(this).attr('id').slice(-1);
        pickedColorList[id] = this.value;
        bgInfo.changeIndex(bgInfo.bgIndex);
        redrawCanvas();
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
            c.drawImage(canvasItemHs, 403.5, 706.5, 453, 185.5);
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
    console.log(pickedColorList);

    // ボタンの背景色に設定する
    const $getListAItems = document.getElementById("colorButtons").children;
    for( var $i = 0; $i < $getListAItems.length; $i++ ){
        $getListAItems[$i].style.backgroundColor = pickedColorList[$i];
        console.log(pickedColorList[0]);
        if ($getListAItems[$i].type == "color") {
            $getListAItems[$i].value = pickedColorList[$i];
        } else {
            $getListAItems[$i].value = ""
        }
        $getListAItems[$i].onclick =
        function(){
            bgIndex = colorButtonElements.indexOf(this);
            console.log(bgInfo.bgIndex, bgIndex)
            if(bgIndex < 4) {
                if (bgInfo.bgIndex == bgIndex) {
                    $getListAItems[bgIndex].type = "color"
                    $getListAItems[bgIndex].value = pickedColorList[bgIndex];
                } else {
                    $getListAItems[bgInfo.bgIndex].type = "button";
                    $getListAItems[bgInfo.bgIndex].value = ""
                    $getListAItems[bgInfo.bgIndex].style.backgroundColor = pickedColorList[bgInfo.bgIndex];
                 
                }
            }
            bgInfo.changeIndex(bgIndex);
            redrawCanvas();
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

    // グレースケール
    let mat = cv.imread(screenShotImgElement);
    let dst = new cv.Mat();
    cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);

    // 白黒反転して2値化
    let threshold = new cv.Mat();
    cv.threshold(dst, threshold, 230, 255, cv.THRESH_BINARY_INV);

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

        // 矩形度合いが高いもの、かつ正方形に近いものをアイテムとして認識する
        // 0.996 -> 0.975に許容範囲を増やした　2023/10/22
        if (0.975<val && val<0.999 && Math.abs(w-h)<2){
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
        chs.fillRect(180 * (i%5) + 58, 180 * Math.floor(i/5) + 138, 111, 32);

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
        chc.fillRect(180 * (i%5) + 58, 180 * Math.floor(i/5) + 138, 111, 32);

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
        cvs.fillRect(180 * Math.floor(i/5) + 58, 180 *(i%5) + 138, 111, 32);

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
        cvc.fillRect(180 * Math.floor(i/5) + 58, 180 *(i%5) + 138, 111, 32);

        cvc.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(cvc, 180 * Math.floor(i/5) + 90, 180 *(i%5) + 90, 86);
    }
}

function itemCircleTileMiyaVertically(items, itemNum) {
    for (i=0; i<itemNum; i++) {
        // アイテムの座標
        const x = items[i][0];
        const y = items[i][1];
        const w = items[i][2];
        const h = items[i][3];

        // 円でクリッピング
        cmiya.save();
        drawCircle(cmiya, 716 * (i%2) + 91.5, 102 * Math.floor(i/2) + 365.5, 47.5);
        console.log(i, 716 * (i%2) + 91.5, 102 * Math.floor(i/2) + 365.5)
        cmiya.clip();
        cmiya.drawImage(screenShotImgElement, x+3, y+3, w-6, h-6, 716 * (i%2) + 44, 102 * Math.floor(i/2) + 318, 95, 95);

        // 所持数隠し
        cmiya.beginPath();
        cmiya.fillStyle = "white";
        cmiya.fillRect(716 * (i%2) + 29.8+44, 102 * Math.floor(i/2) + 76.2 + 318, 61.3, 17.7);

        cmiya.restore(); // クリッピング領域の設定を破棄
        drawCircleEdge(cmiya, 716 * (i%2) + 91.5, 102 * Math.floor(i/2) + 365.5, 47.5);
    }
}

// 角丸の四角形を描画する(クリッピングのため)
function drawsq(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = grayColor;
    ctx.fillStyle = grayColor;
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
function drawCircleEdge(ctx, dx, dy, r) {
    ctx.beginPath();
    ctx.arc(dx, dy, r, 0, Math.PI * 2);
    ctx.strokeStyle = grayColor;
    ctx.lineWidth = 5;
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
                30
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
