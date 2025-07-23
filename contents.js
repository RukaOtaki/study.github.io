function scrollLeft() {
  const container = document.querySelector('.scroll-container');
  container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.querySelector('.scroll-container');
  container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
}