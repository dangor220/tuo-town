export function followLink() { 
  const tabs = document.querySelectorAll('.catalog__item');
  const menuTabs = document.querySelectorAll('.menu__catalog-link');
  const footerLinks = document.querySelectorAll('.social__link');

  tabs.forEach(elem => {
     elem.addEventListener('click', () => {
      let selectProductElem = elem.dataset.catalog;
      localStorage.setItem('selectProductElem', selectProductElem);
    })
  })

  menuTabs.forEach(elem => {
    elem.addEventListener('click', () => {
     let selectProductElem = elem.dataset.catalog;
     localStorage.setItem('selectProductElem', selectProductElem);
   })
 })

 footerLinks.forEach(elem => {
  elem.addEventListener('click', () => {
   let selectProductElem = elem.dataset.catalog;
   localStorage.setItem('selectProductElem', selectProductElem);
 })
})

}