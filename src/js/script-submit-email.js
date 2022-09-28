const contactEmail = async (event) => {
  event.preventDefault();
  const sliderContent = document.querySelector('.email-error');

  const email = event.target[0].value;

  if (!email) {
    sliderContent.style.visibility = 'visible';
    sliderContent.innerHTML = `<span>Digite um email!<span/>`;
  } else {
    await fetch('http://localhost:3000/contato', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sliderContent.innerHTML = '';
          sliderContent.style.visibility = 'hidden';
          alert(data.success);
        } else if (data.errors) {
          sliderContent.style.visibility = 'visible';
          sliderContent.innerHTML = `<span>${data.errors}<span/>`;
        }
      })
      .catch((E) => {
        return alert(
          'Aconteceu um erro no servidor, tente novamente mais tarde!'
        );
      });
  }
};
