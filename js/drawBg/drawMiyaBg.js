function drawMiyaBg(pickedColorList = []) {
    createByColorBg();
    c.drawImage(miyaBg, 0, 0);
}

function createByColorBg(frameColors = ["#c2c2c2", "#f8f8f8"]) {
    miyaBgCtx.fillStyle = frameColors[0];
    miyaBgCtx.fillRect(0, 0, 900, 303);

    miyaBgCtx.fillStyle = frameColors[1];
    miyaBgCtx.fillRect(0, 303, 900, 900);

    miyaBgCtx.save();
    miyaBgCtx.shadowColor = "rgba(0,0,0,0.253)";
    miyaBgCtx.shadowBlur = 20;
    miyaBgCtx.fillRect(28, 28, 844, 844);

    miyaBgCtx.shadowBlur = 0;
    miyaBgCtx.fillStyle = frameColors[0];
    miyaBgCtx.fillRect(28, 28, 844, 280);

    miyaBgCtx.fillStyle = frameColors[1];
    miyaBgCtx.fillRect(28, 303, 844, 565);

    miyaBgCtx.clearRect(155, 153, 589, 657);
}

function createAvBg(color) {

}