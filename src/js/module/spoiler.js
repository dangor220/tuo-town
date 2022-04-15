export function spoiler() {

  const currentItem = document.querySelectorAll('.social__item-title');


  currentItem.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.classList.toggle('social__item-title_active')
      const parent = elem.nextElementSibling;
      parent.classList.toggle('social__navigation_show')
    })
  })
}