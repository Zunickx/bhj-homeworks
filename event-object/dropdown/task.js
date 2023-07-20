const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const links = dropdown.querySelectorAll('.dropdown__link');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      value.textContent = link.textContent;
      list.classList.remove('dropdown__list_active');
    });
  });

  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });
});