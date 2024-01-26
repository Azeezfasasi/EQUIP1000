function toggleAccordion(clickedItem) {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    if (item !== clickedItem.parentNode) {
      item.classList.remove('active');
      const arrow = item.querySelector('.arrow');
      arrow.textContent = '►';
    }
  });

  clickedItem.parentNode.classList.toggle('active');
  const arrow = clickedItem.querySelector('.arrow');
  arrow.textContent = clickedItem.parentNode.classList.contains('active') ? '▼' : '►';
}