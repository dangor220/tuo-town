export function spoiler() {

  const navInfo = document.querySelectorAll('.social__navigation');
  const contactInfo = document.querySelector('.contact__wrapper');

  if (window.innerWidth <= 425) {
    
    navInfo.forEach(elem => {
      elem.classList.add('social__navigation_hide')
    })
    contactInfo.classList.add('social__navigation_hide')
    
  }
}