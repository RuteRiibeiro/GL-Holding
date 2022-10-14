const budget = async (event) => {
  event.preventDefault();
  const sliderContent = document.querySelector('.input-box2 .errors');
  const name = String(event.target[0].value);
  const companyName = String(event.target[1].value);
  const phoneNumber = String(event.target[2].value);
  const email = String(event.target[3].value);
  const comments = String(event.target[4].value);

  const equipment = [null];
  let time = null;
  let cont = 0;

  document.querySelectorAll('.itens input').forEach((input) => {
    if (input.checked) {
      equipment[cont] = input.value;
      cont++;
    }
  });

  document.querySelectorAll('.time-radio input').forEach((input) => {
    if (input.checked) time = input.value;
  });

  if (!name || !phoneNumber || !email || !companyName || !comments || !equipment[0] || !time) {
    sliderContent.style.visibility = 'visible';
    sliderContent.innerHTML = `<span>Preencha todos os campos!<span/>`;
  } else {
    await fetch('http://localhost:3004/orcamento', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, phoneNumber, email, equipment, time, companyName, comments }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sliderContent.innerHTML = '';
          sliderContent.style.visibility = 'hidden';
          alert(`${name}, ${data.success}`);
        } else if (data.errors) {
          if (data.errors.length > 1) {
            let p = '';
            data.errors.forEach((error) => {
              if (error) p += `<span>${error}</span>`;
            });
            sliderContent.style.visibility = 'visible';
            sliderContent.innerHTML = p;
          } else {
            sliderContent.style.visibility = 'visible';
            sliderContent.innerHTML = `<span>${data.errors}<span/>`;
          }
        }
      })
      .catch((e) => {
        alert('Aconteceu um erro no servidor, tente novamente mais tarde!');
      });
  }
};
