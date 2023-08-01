const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentCaseIndex = 0;
  let intervalId;

  const rotate = () => {
    cases[currentCaseIndex].classList.remove('rotator__case_active');
    currentCaseIndex = (currentCaseIndex + 1) % cases.length;
    cases[currentCaseIndex].classList.add('rotator__case_active');
  };

  intervalId = setInterval(rotate, 1000);

  rotator.addEventListener('mouseenter', () => clearInterval(intervalId));
  rotator.addEventListener('mouseleave', () => intervalId = setInterval(rotate, 1000));
});