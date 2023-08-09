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
let cartProducts = document.querySelector('.cart__products'); // находим корзину с товарами, которые мы туда поместим
const product = document.querySelectorAll('.products'); // находим все товары
const productImage = document.querySelectorAll('.product__image'); //находим картинки товаров с классом product__image

productAdd.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const dataId = (product[index].getAttribute('data-id')); // находим атрибут data-id у каждого товара
        const parents = productImage[index].closest('.product') // находим ближайшего родителя элемента на котором произошел клик, затем находим в этом элементе класс product__image, лежащий в переменной productImage, для того что бы получить изображение товара
    })
})