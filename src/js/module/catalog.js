export function selectProduct() {
  const currentItem = document.querySelectorAll('.shop__item-name');


  currentItem.forEach((elem) => {

    elem.addEventListener('click', () => {


      if (elem.classList.contains('shop__item-name_active')) {
        elem.classList.remove('shop__item-name_active')
        const parent = elem.nextElementSibling;
        parent.classList.remove('shop__item-list_active')
      } else {
        currentItem.forEach((item) => {
          item.classList.remove('shop__item-name_active')
          const parent = item.nextElementSibling;
          parent.classList.remove('shop__item-list_active')
        })
        elem.classList.add('shop__item-name_active')
        const parent = elem.nextElementSibling;
        parent.classList.add('shop__item-list_active')
      }


    })
  })
}