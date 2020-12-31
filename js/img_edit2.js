// canvasの初期設定
var canvas = document.getElementById('canvas');
var canvasWidth = 900;
var canvasHeight = 900;
// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

function showScreenshotImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function(event) {           // ローカルファイルを読込後処理
        var screenshot = new Image();           // screenshotファイルの処理
        screenshot.onload = function() {        // screenshotファイル読込後の処理
            ctx.drawImage(screenshot, 0, 0);     // screenshotをcanvasに表示
        }
        screenshot.src = event.target.result;   // screenshotを読み込む　
    }
    reader.readAsDataURL(files[0]);             // ローカルファイルを読み込む　　
}

function showAvatorImg(files) {
    var reader = new FileReader();              // ローカルファイルの処理
    reader.onload = function(event) {           // ローカルファイルを読込後処理
        var avator = new Image();           // avatorファイルの処理
        avator.onload = function() {        // avatorファイル読込後の処理
            ctx.drawImage(avator, 0, 0);     // avatorをcanvasに表示
        }
        avator.src = event.target.result;   // avatorを読み込む　
    }
    reader.readAsDataURL(files[0]);  
}

