<<<<<<< HEAD
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
=======
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");

// Open modal
for (let card of cards) {
  card.addEventListener("click", function() {
    const card_id = card.getAttribute("id");
    modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${card_id}`;
    modalOverlay.classList.add("active");
  })
}

// Close modal
document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("maximize");
  modalOverlay.querySelector("iframe").src = ``;
  
})

// Modal maximized
document.querySelector(".maximize").addEventListener("click", function() {
  if (modal.classList.contains("maximize")) {
    modal.classList.remove('maximize')
  } else {
    modal.classList.add("maximize")
  }
})

>>>>>>> 71412f5285e2f47cdead986bae7c7b593e3b75ca
