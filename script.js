document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const cardWidth = 296;

  function scrollCarousel(direction) {
    carousel.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  // Você também pode adicionar os eventos aqui, se preferir:
  document.querySelector('.arrow-left').addEventListener('click', () => scrollCarousel(-1));
  document.querySelector('.arrow-right').addEventListener('click', () => scrollCarousel(1));
});
