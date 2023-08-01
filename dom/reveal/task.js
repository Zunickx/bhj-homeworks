//наведение мышью на объект

// const blockSelection = document.getElementsByClassName('reveal');
// console.log(blockSelection);

// for(let i = 0; i < blockSelection.length; i++) {
//     blockSelection[i].addEventListener('mouseover', () => {
//         blockSelection[i].classList.add('reveal_active');
//     })

//     blockSelection[i].addEventListener('mouseout', () => {
//         blockSelection[i].classList.remove('reveal_active');
//     })
// }

// отслеживание прокрутки

const revealElements = document.querySelectorAll('.reveal');
console.log(revealElements);

function handleScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    const elementTop = revealElements[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      revealElements[i].classList.add('reveal_active');
    }
  }
}

window.addEventListener('scroll', handleScroll);