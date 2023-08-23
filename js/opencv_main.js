let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
function grayscale(){
  let mat = cv.imread(imgElement);
  var dst = new cv.Mat();
  cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY, 0);
  cv.imshow('canvasOutput', dst);
  mat.delete();
  dst.delete();
}
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}