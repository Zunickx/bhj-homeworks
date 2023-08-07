const hintElements = document.querySelectorAll('.has-tooltip');
console.log(hintElements);
hintElements.forEach((tooltip) => {
  tooltip.addEventListener('click', (event) => {
    event.preventDefault(); // отменили переход по ссылке

    const tooltipText = tooltip.getAttribute('title'); // получаем текст подсказки из атрибута title
    console.log(tooltipText);
    const tooltipElement = document.createElement('div'); //создали HTML элемент для подсказки
    tooltipElement.classList.add ('tooltip'); // добавляем класс tooltip элементу tooltipElement
    tooltipElement.textContent = tooltipText; // добавили текст в элемент tooltipElement

    const tooltipPosition = tooltip.getBoundingClientRect(); // получаем позицию элемента, на который наведена мышь
    const tooltipLeft = tooltipPosition.left + window.pageXOffset; // определяем левую позицию подсказки
    const tooltipTop = tooltipPosition.top + window.pageYOffset - tooltipElement.offsetHeight - 5 // определяем верхнюю позицию подсказки
    tooltipElement.style.top = ${tooltipTop}px; // устанавливаем верхнюю границу подсказки
    tooltipElement.style.left = ${tooltipLeft}px; // устанавливаем левую границу подсказки
    document.body.appendChild(tooltipElement); // добавляем элемент подсказки в body

    setTimeout(() => {
      tooltipElement.remove();
    }, 3000); // удаляем элемент подсказки через 3 секунды
  })
})