const numbers = document.querySelectorAll('[data-count-to]');
const ourNumbers = document.querySelector('.our-numbers');

ourNumbers.onmouseenter = () => {
  numbers.forEach((number, key) => {
    const total = [6, 1400, 100, 120, 270, 130];
    let start = 0;
    if (total[key] > 6) {
      const increment = Math.floor(total[key] / 50);
      const count = setInterval(() => {
        start += increment;
        number.innerHTML = start;
        if (start > total[key]) {
          number.innerHTML = total[key];
          clearInterval(count);
        }
      }, 23);
    } else {
      const count = setInterval(() => {
        start += 1;
        number.innerHTML = start;
        if (start > total[key]) {
          number.innerHTML = total[key];
          clearInterval(count);
        }
      }, 180);
    }
  });
};
