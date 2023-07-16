let dead = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`); // получаем элемент по id  и возвращаем его
}

for (let i = 1; i <= 9; i++) { // с помощью фор перебираем все id 
    getHole(i).onclick = function () { // и вешаем событие click на полученный элемент, событие представляет собой анонимную функцию в которой мы прописываем условия
        if (this.classList.contains('hole_has-mole')) { // проверяем есть ли в лунке крот
            dead++;                                     // если есть добавляем к переменной +1 dead
            document.getElementById('dead').textContent = dead; // и присваиваем ей новое значение
        } else {
            lost++;                                     // если нет, то добавляем +1 к переменной lost
            document.getElementById('lost').textContent = lost;
        }

        if (dead === 10) { // здесь пишем проверку на победу и обнуляем переменные dead и lost
            alert('Вы победили!');
            dead = 0;
            lost = 0;
            document.getElementById('dead').textContent = dead;
            document.getElementById('lost').textContent = lost;
        }

        if (lost === 5) { // здесь проверяем на проигрыш и тоже обнуляем переменные
            alert('Вы проиграли!');
            dead = 0;
            lost = 0;
            document.getElementById('dead').textContent = dead;
            document.getElementById('lost').textContent = lost;
        }
    }
}