const glass = document.getElementById('glass');

function getKeyAndMove(e) {
    const key = e.which || e.keyCode;
    switch (key) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}

// inline and block logic
// left, up = negative values
// down, right = positive values

// X axis
function moveLeft() {
    let xValue = parseInt(glass.getAttribute('x')) - 1;
    const yValue = glass.getAttribute('y');
    glass.setAttribute('x', xValue);
    if (xValue <= 50 || yValue >= 126 || yValue <= 86) {
        glass.setAttribute('fill', 'yellow');
    } else if (xValue < 124) {
        glass.setAttribute('fill', '#fff');
    } 
}

function moveRight() {
    let xValue = parseInt(glass.getAttribute('x')) + 1;
    const yValue = glass.getAttribute('y');
    glass.setAttribute('x', xValue);
    if (xValue >= 124 || yValue >= 126 || yValue <= 86) {
        glass.setAttribute('fill', 'yellow');
    } else if (xValue > 50) {
        glass.setAttribute('fill', '#fff');
    }
}

// Y axis
function moveUp() {
    let yValue = parseInt(glass.getAttribute('y')) - 1;
    const xValue = glass.getAttribute('x');
    glass.setAttribute('y', yValue);
    if (yValue <= 86 && xValue > 50 || xValue < 50 || xValue > 124) {
        glass.setAttribute('fill', 'yellow');
    } else if (yValue < 126) {
        glass.setAttribute('fill', '#fff');
    }
}

function moveDown() {
    let yValue = parseInt(glass.getAttribute('y')) + 1;
    const xValue = glass.getAttribute('x');
    glass.setAttribute('y', yValue);
    if (yValue >= 126 && xValue > 50 || xValue < 50 || xValue > 124) {
        glass.setAttribute('fill', 'yellow');
    } else if (yValue > 86) {
        glass.setAttribute('fill', '#fff');
    }
}

document.addEventListener('keydown', getKeyAndMove);