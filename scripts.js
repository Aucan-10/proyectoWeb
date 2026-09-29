const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const closeButton = document.querySelector('.modal__content--close');

button1.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});

button2.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});

button3.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('visible');
  const firstRadio = document.querySelector('#radio-1');
  if (firstRadio) firstRadio.checked = true;
});

const btnBuy = document.querySelector('.btn-buy');
const sideContentImg = document.querySelector('.side-content img');
const gameName = document.querySelector('#game-name');

btnBuy.addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="slider"]:checked');

  if (selectedRadio) {
    const radioId = selectedRadio.id;
    const cardNumber = radioId.split('-')[1];
    const selectedCard = document.querySelector(`#card-${cardNumber}`);

    if (selectedCard && sideContentImg) {
      const img = selectedCard.querySelector('img');
      sideContentImg.src = img.src;

      if (gameName) {
        gameName.textContent = selectedCard.dataset.name;
      }

      modal.classList.add('hidden');
      modal.classList.remove('visible');
    }
  }
});
