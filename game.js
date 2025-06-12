const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrames = document.getElementById("animation");
const ghostFrames = document.getElementById("ghosts");

let createRect = () => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height);
}