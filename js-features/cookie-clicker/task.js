let clicker = document.getElementById('clicker__counter');
let clickerNumber = parseInt(clicker.textContent);
console.log(clickerNumber);
let counter = 0;
function increaseCounter() {
    counter++;
    console.log(counter);
    clicker.textContent = counter;
}

//вводим переменную, которая будет отвечать за чередование

let moreLess = false;

function changeCookieSize() {
    if(moreLess) {
        link.style.width = '100px';
        moreLess = false;
    } else {
        link.style.width = '200px';
        moreLess = true;
    }
}

let link = document.getElementById('cookie');
if(link) {
    link.addEventListener('click', changeCookieSize);
    link.addEventListener('click', increaseCounter);
}

let div = document.createElement('div');
div.id = 'clickSpeed';
div.className = 'averageClickSpeed';
div.innerHTML = 'Средняя скорость клика:';
let parentDiv = document.querySelector('.clicker');
parentDiv.insertBefore(div, link);

let clickSpeedElement = document.getElementById('clickSpeed');
let clickSpeedElementNumber = parseInt(clickSpeedElement.textContent);
let startTime = 0;
let endTime = 0;

// Функция обновления скорости клика

function updateClickSpeed() {
    let speed = counter/((endTime - startTime)/1000); // средняя скорость клика
    clickSpeedElement.textContent = speed.toFixed(3);
}

