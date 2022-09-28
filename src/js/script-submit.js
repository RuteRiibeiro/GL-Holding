const contact = async (event) => {
  event.preventDefault();
  const sliderContent = document.querySelector('.errors');

  let name = event.target[0].value;
  if (name) name = String(name[0].toUpperCase() + name.substr(1).toLowerCase());
  const phoneNumber = Number(event.target[1].value);
  const email = String(event.target[2].value);
  const subject = String(event.target[3].value);
  const message = String(event.target[4].value);

  if (!name || !phoneNumber || !email || !subject || !message) {
    sliderContent.style.visibility = 'visible';
    sliderContent.innerHTML = `<span>Preencha todos os campos!<span/>`;
  } else {
    await fetch('http://localhost:3000/mensagem', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, phoneNumber, email, subject, message }),
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
      .catch(() =>
        alert('Aconteceu um erro no servidor, tente novamente mais tarde!')
      );
  }
};
