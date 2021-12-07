let buttonAmount = 5;

function init () {
    for (let id = 1; id <= buttonAmount; id++) {
        let buttonHTML = document.getElementById(`btn-${id}`);
        buttonHTML.onclick = () => {
            setActive(id);
        };
    }
}

function setActive (id) {
    moveCircle(id);
    for (let buttonID = 1; buttonID <= buttonAmount; buttonID ++) {
        if (buttonID === id) {
            document.getElementById(`btn-${buttonID}`).className = "button active";
        } else {
            document.getElementById(`btn-${buttonID}`).className = "button";
        }
    }
}

function moveCircle (id) {
    let circleHolderHTML = document.getElementById("circleHolder");
    let menuWidth = document.getElementById("menu").clientWidth;
    let menuContentWidth = menuWidth - 80;
    let step = (menuContentWidth - (100 * buttonAmount) ) / (buttonAmount-1) + 100;
    circleHolderHTML.style.left = `${15 + step * (id-1)}px`;
}