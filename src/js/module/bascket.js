export function getBasket() {
  
  let basket = {};
  let sumProduct = 0;

  const catalog = document.querySelectorAll('.catalog__goods');
  const basketIcon = document.querySelector('.user__icon-basket');
  const basketItem = document.querySelector('.user__item-basket');

  window.addEventListener("load",function(){
    if (localStorage.getItem('basket')) {
      basketIcon.classList.add('user__icon_active');
      basketItem.classList.add('user__item_active');

      basketItem.textContent = localStorage.getItem('sumProductInBasket');

      sumProduct = +localStorage.getItem('sumProductInBasket');

      basket = JSON.parse(localStorage.getItem('basket'));
    }
  });


  catalog.forEach(elem => {
    elem.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('catalog__goods-add')) {

          sumProduct += 1;

          basketIcon.classList.add('user__icon_active');
          basketItem.classList.add('user__item_active');

          basketItem.textContent = sumProduct;

          let nameProduct = elem.querySelector('.catalog__goods-name').innerText;
          let priceProduct = elem.querySelector('.catalog__goods-value').textContent;
          
          priceProduct = parseFloat(priceProduct.replace(/\s/g, ''));

          if (basket[nameProduct]) {
            basket[nameProduct].price += priceProduct;
            basket[nameProduct].value += 1; 
          } else {
            basket[nameProduct] = {};
            basket[nameProduct].price = priceProduct;
            basket[nameProduct].value = 1; 
          }

          localStorage.setItem('basket', JSON.stringify(basket))
          localStorage.setItem('sumProductInBasket', sumProduct)
        }
      })
  })

  
  
 
}