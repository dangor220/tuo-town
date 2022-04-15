export function selectProduct() {
  const currentItem = document.querySelectorAll('.shop__item-name');


  currentItem.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.classList.toggle('shop__item-name_active')
      const parent = elem.nextElementSibling;
      parent.classList.toggle('shop__item-list_active')
    })
  })
}