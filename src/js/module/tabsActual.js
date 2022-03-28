export function changeTab() {

  const actualTabs = document.querySelector('.actual__tabs');
  const allTabs = document.querySelectorAll('.actual__tab');

  const actualContent = document.querySelectorAll('.actual__content');


  actualTabs.addEventListener('click', (e) => {


    let tabValue = e.target.dataset.tab;


    if (e.target.classList.contains('actual__tab')) {
      allTabs.forEach(elem => {
        elem.classList.remove('actual__tab_active');
      })


      e.target.classList.add('actual__tab_active');

      actualContent.forEach(item => {
        if (item.dataset.tab === tabValue) {
          item.classList.add('actual__content_active');
          
        } else {
          item.classList.remove('actual__content_active');
        }
      })
    }
  })

}