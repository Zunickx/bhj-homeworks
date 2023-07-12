// let currentNumberOfSeconds = document.getElementById('timer'); // получаем элемент timer со страницы html
// console.log(currentNumberOfSeconds);
// let second = parseInt(currentNumberOfSeconds.textContent); // так как элемент timer является текстовым, с помощью parseInt возвращаем целое число
// console.log(second);
// function updateTimer() {
//     second--;
//     if(second === 0) {
//         clearInterval(timerInterval); // останавливаем(чистим) интервал отсчета
//         alert('Вы победили в конкурсе');
//         currentNumberOfSeconds.textContent = second;
//     } else {
//         currentNumberOfSeconds.textContent = second;
//     }
// }
// const timerInterval = setInterval(updateTimer, 1000); // вызываем функцию updateTimer каждую секунду

let second = parseInt(document.getElementById('timer').textContent);
function updateTimer() {
    second--;
    if(second === 0) {
        clearInterval(timerInterval); // останавливаем(чистим) интервал отсчета
        alert('Вы победили в конкурсе');
        document.getElementById('timer').textContent = second;
    } else {
        document.getElementById('timer').textContent = second;
    }
}
const timerInterval = setInterval(updateTimer, 1000);