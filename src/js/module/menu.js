export function showMenu() {

  const headerBlur = document.querySelector('.header');
  const bodyActive = document.querySelector('body');

  const menu = document.querySelector('.menu__item_catalog');
  const menuItem = document.querySelector('.menu__catalog');
  const menuArrow = document.querySelector('.menu__arrow');

  menuArrow.addEventListener('click', (e) => {
    console.log(e.target);
    menuItem.classList.remove('menu__catalog_show');
    headerBlur.classList.remove('header__blur_disabled');
    bodyActive.classList.remove('body__menu_active')
  })

  menu.addEventListener('click', (e) => {
    console.log(bodyActive);
    e.preventDefault();
    menuItem.classList.add('menu__catalog_show');
    headerBlur.classList.add('header__blur_disabled');
    bodyActive.classList.add('body__menu_active')
  })

  menuItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__catalog-link') || e.target.classList.contains('menu__info-link')) {
      menuItem.classList.remove('menu__catalog_show');
      headerBlur.classList.remove('header__blur_disabled');
      bodyActive.classList.remove('body__menu_active')
    }
  })
  

}
