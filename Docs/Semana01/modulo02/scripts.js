const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${card.getAttribute('id')}`;
    modal.classList.remove('maximize');
  })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', ()=>{
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
});

modal.querySelector('.maximize').addEventListener('click', () => {
  modal.classList.contains('maximize') ? modal.classList.remove('maximize') : modal.classList.add('maximize');
});
