const plusButtons = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
console.log(plusButtons);
const minusButtons = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let quantityGoods = Array.from(document.querySelectorAll('.product__quantity-value'));

// реализуем кнопку + при клике
plusButtons.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        quantityGoods[index].textContent++; // добавляем кол-во товара
    })
})

// реализуем кнопку - при клике
minusButtons.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        quantityGoods[index].textContent == 1 ? false : quantityGoods[index].textContent--; // уменьшаем кол-во товара
    })
})

const productAdd = Array.from(querySelectorAll('.product__add')); // находим все кнопки "Добавить в корзину"
console.log(productAdd);

productAdd.forEach((item, index) => {
    item.addEventListener('click', (event) => {

    })
})