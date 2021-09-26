const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    courseId = card.getAttribute('id');
    console.log(courseId);
    window.location.href = `/courses/${courseId}`;
  });
}
