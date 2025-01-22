 const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const colorInput = document.querySelector('#color');
const opacityInput = document.querySelector('#opacity');
const clearButton = document.querySelector('#btn-clear');
const sampleImage = document.querySelector('#sampleImage');

let isDrawing = false;
let startX, startY;

sampleImage.onload = () => {
    ctx.drawImage(sampleImage, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        const endX = e.offsetX;
        const endY = e.offsetY;
        const color = colorInput.value;
        const opacity = parseFloat(opacityInput.value);

        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fillRect(startX, startY, endX - startX, endY - startY);
        ctx.globalAlpha = 1.0;

        isDrawing = false;
    }
});

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sampleImage, 0, 0, canvas.width, canvas.height);
});