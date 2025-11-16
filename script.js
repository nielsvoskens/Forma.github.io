// Controla la apertura exclusiva de los elementos FAQ para mantener la interfaz limpia.
const faqItems = document.querySelectorAll('.faq-list details');

faqItems.forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      faqItems.forEach((item) => {
        if (item !== details) {
          item.removeAttribute('open');
        }
      });
    }
  });
});
