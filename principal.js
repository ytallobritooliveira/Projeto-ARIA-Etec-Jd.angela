window.onload = () => {
  const elementos = document.querySelectorAll('.aria1');
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  elementos.forEach((el, index) => {
    if (reducedMotion) {
      el.classList.add('visivel'); // aparece direto, sem animação
    } else {
      setTimeout(() => {
        el.classList.add('visivel');
      }, 300);
    }
  });
};