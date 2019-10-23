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
    glass.setAttribute('x', xValue);
}

function moveRight() {
    let xValue = parseInt(glass.getAttribute('x')) + 1;
    glass.setAttribute('x', xValue);
}

// Y axis
function moveUp() {
    let yValue = parseInt(glass.getAttribute('y')) - 1;
    glass.setAttribute('y', yValue);
}

function moveDown() {
    let yValue = parseInt(glass.getAttribute('y')) + 1;
    glass.setAttribute('y', yValue);
}

document.addEventListener('keydown', getKeyAndMove);