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
    link.addEventListener('click', increaseCounter);
    link.addEventListener('click', changeCookieSize);
}

// let div = document.createElement('div');
// div.id = 'ClickSpeed';
// div.className = 'averageClickSpeed';
// div.innerHTML = 'средняя скорость клика:';
// let parentDiv = document.querySelector('clicker');
// console.log(parentDiv);
// parentDiv.appendChild(div);

