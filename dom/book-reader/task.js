const elementsFontSize = document.querySelectorAll('.font-size');
console.log(elementsFontSize);
const elementBook = document.querySelector('.book');
console.log(elementBook);

for (let i = 0; i < elementsFontSize.length; i++) {
    elementsFontSize[i].addEventListener('click', (event) => {
        event.preventDefault();
        for(let j = 0; j < elementsFontSize.length; j++) {
            elementsFontSize[j].classList.remove('font-size_active');
        }

        elementsFontSize[i].classList.add('font-size_active');
        const sizeValue = event.target.dataset.size; // извлекаем значение атрибута "data-size" из элемента на котором был клик и сохраняем его в константу
        if(sizeValue === 'small') {
            elementBook.classList.remove('book_fs-big');
            elementBook.classList.add('book_fs-small');
        } else if (sizeValue === 'big') {
            elementBook.classList.remove('book_fs-small');
            elementBook.classList.add('book_fs-big');
        } else {
            elementBook.classList.remove('book_fs-big');
            elementBook.classList.remove('book_fs-small');
        }
    });
}