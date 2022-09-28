const buttons = document.querySelectorAll('.box-cases .item #button');

buttons.forEach((button) => {
  button.onclick = (event) => {
    const ativo = button.classList.contains('button-active');
    event && ativo
      ? button.removeAttribute('class')
      : button.setAttribute('class', 'button-active');
  };
});
