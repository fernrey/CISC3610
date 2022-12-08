let img = new Image();
img.src = './assets/boy_cap.png';

var background = new Image();
background.src = './assets/forest.png';

img.onload = function () {
    init();
};
background.onload = function () {
    init2();
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 4;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
        frameX * width, frameY * height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);

}

function init() {
    // future animation code goes here
    window.requestAnimationFrame(step);
}
function init2() {
    ctx.drawImage(background, 50, 30 );
}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
    frameCount++;
    if (frameCount < 16) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}