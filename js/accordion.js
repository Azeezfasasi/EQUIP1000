function toggleAccordion(clickedItem) {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    if (item !== clickedItem.parentNode) {
      item.classList.remove('active');
    }
  });

  clickedItem.parentNode.classList.toggle('active');
}