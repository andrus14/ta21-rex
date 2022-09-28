const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cactusX1 = canvas.width - 100;
let cactusY1 = canvas.height - 80;
let cactusW = 40;
let cactusH = 80;

let rexX1 = 100;
let rexY1 = canvas.height - 40;
let rexW = 40;
let rexH = 40;
let rexDirection = "up";

document.addEventListener('keydown', (e) => {
    if ( e.code == 'Space' ) {
        console.log('Jump!');
    }

    const rexIntervalID = setInterval(() => {
        if ( rexY1 < canvas.height - 180) {
            rexDirection = 'down';
        } else if ( rexDirection == 'down' && rexY1 >= canvas.height - 40 ) {
            rexDirection = 'up';
            clearInterval(rexIntervalID);
        }
        
        if ( rexDirection == 'up' ) {
            rexY1 = rexY1 - 2;
        } else {
            rexY1 = rexY1 + 2;
        }

    }, 10);

});

const intervalID = setInterval(() => {
    
    if ( cactusX1 == -40 ) {
        cactusX1 = canvas.width;
    } else {
        cactusX1 = cactusX1 - 2;
    }

    drawCanvas();
}, 10);

function drawCanvas () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "green";
    ctx.fillRect(cactusX1, cactusY1, cactusW, cactusH);

    ctx.fillStyle = "purple";
    ctx.fillRect(rexX1, rexY1, rexW, rexH);
    
}