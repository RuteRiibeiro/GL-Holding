const allItens = document.querySelectorAll('.item');
const itens = document.querySelector('.itens');

itens.onclick = (e) => {
  if (e) {
    allItens.forEach((item) => {
      item.style.pointerEvents = 'painted';
    });
  }
};

itens.onmousemove = (event) => {
  if (event.buttons) {
    event.preventDefault();
    itens.style.cursor = 'move';
    allItens.forEach((item) => {
      item.style.pointerEvents = 'none';
    });
    if (event.movementX < 0) {
      event.target.scrollBy(30, 0);
    } else if (event.movementX > 0) {
      event.target.scrollBy(-30, 0);
    }
  }
};

itens.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (event) {
    allItens.forEach((item) => {
      item.style.pointerEvents = 'none';
    });
    if (event.deltaY > 0) {
      event.target.scrollBy(150, 0);
    } else if (event.deltaY < 0) {
      event.target.scrollBy(-150, 0);
    }
  }
});

const button = document.querySelectorAll('.button-group > button');

const removeStyles = () => {
  for (let i = 0; i < button.length; i++) {
    document
      .querySelectorAll('.button-group > button')
      [i].removeAttribute('class');
  }
};

const addNewMap = (id) => {
  document.querySelector('#img-map').removeAttribute('class');
  document.querySelector('.container-map > #img-map').setAttribute('class', id);
};

button.forEach((key) => {
  key.addEventListener('click', (e) => {
    removeStyles();
    e.target.setAttribute('class', 'buttonClicked');
    addNewMap(e.target.id);
  });
});
