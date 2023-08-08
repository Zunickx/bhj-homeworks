const hintElements = document.querySelectorAll(".has-tooltip");
hintElements.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const tooltipActive = document.querySelectorAll(".tooltip_active")[0]; // первый элемент на странице с классом "tooltip_active"

        if (tooltipActive) { // проверяет, есть ли такой элемент на странице
            tooltipActive.classList.remove("tooltip_active"); // если элемент найден, то удаляет у него класс "tooltip_active"
            if (tooltipActive.textContent == item.title) { // проверяет, равен ли текст внутри элемента тексту атрибута "title"
                return false;
            }

        }
        const tooltip = document.createElement("div"); // создаем html-элемент для подсказки
        tooltip.classList.add("tooltip", "tooltip_active"); // добавили созданному html-элементу класс tooltip, tooltip_active
        tooltip.textContent = item.getAttribute("title"); // получаем текст подсказки из атрибута title

        const coordinates = item.getBoundingClientRect(); // получаем координаты и размеры элемента на который был произведен клик
        tooltip.style.top = coordinates.bottom + 3 + "px";
        tooltip.style.left = coordinates.left + "px";
        document.body.append(tooltip); // добавляем элемент в конец тега body
    })
})