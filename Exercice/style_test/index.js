const box = document.getElementById('demo-box');

function toggleRounded() {
    box.classList.toggle('rounded');
}

function toggleShadow(){
    box.classList.toggle('shadow');
}

function toggleBorder(){
    box.classList.toggle('bordered');
}

function toggleGradient(){
    box.classList.toggle('gradient');
}

function toggleAnimation(){
    box.classList.toggle('animated');
}

function resetBox(){
    box.className = '';
    box.classList.add('demo-box');
}

function changeColor(color) {
    box.style.backgroundColor = color;
}

function changeSize(size) {
    let dimensions;

    switch (size) {
        case 'small':
            dimensions = '100px';
            break;
        case 'medium':
            dimensions = '150px';
            break;
        case 'large':
            dimensions = '200px';
            break;
    }

    box.style.width = dimensions;
    box.style.height = dimensions;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

function highlightCards(cssClass){
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.className = '';
        card.classList.add(cssClass, 'card');
    });
}