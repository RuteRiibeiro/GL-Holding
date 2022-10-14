const body = document.querySelector('body');
const sliderContent = document.querySelector('.slider-content');
const containerInput = document.querySelector('.container-input');
let percent = '';

const listOfInputs = (margin, imageWidth) => {
  const numberImgs = Math.round((body.clientWidth - margin) / imageWidth);
  const numberInputs = 10 / numberImgs;
  percent = (100 * (numberImgs * imageWidth)) / (body.clientWidth - margin);

  if (numberInputs > 1) {
    let listInputs = `
      <label class="input">
        <input name="slide" type="radio" checked>
        <span class="checkmark"></span>
      </label>
    `;
    for (let i = 1; i < numberInputs; i++) {
      listInputs += `
        <label class="input">
          <input name="slide" type="radio" >
          <span class="checkmark"></span>
        </label>
      `;
    }
    containerInput.innerHTML = listInputs;
  }
};

const createInputs = () => {
  if (body.clientWidth <= 900) {
    listOfInputs(29, 235);
  }
  if (body.clientWidth > 900 && body.clientWidth <= 1320) {
    listOfInputs(29, 295);
  }
  if (body.clientWidth > 1320) {
    listOfInputs(141, 365);
  }
};

createInputs();
window.addEventListener('resize', createInputs());

const input = document.querySelectorAll('.slider input');

input.forEach((item, key) => {
  item.onclick = () => {
    console.log("🚀 ~ file: script-slider.js ~ line 48 ~ input.forEach ~ item", item)
    
    if (item.checked) {
      for (let i = 0; i < input.length; i++) {
        const transform = i * percent;
        if (key === i) {
          sliderContent.style.transform = `translateX(-${transform}%)`;
        }
      }
    }
  };
});
