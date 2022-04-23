export function getBasket() {

  let basket = {};
  let sumProduct = 0;

  const catalog = document.querySelectorAll('.catalog__goods');
  const basketIcon = document.querySelectorAll('.user__icon-basket');
  const basketItem = document.querySelectorAll('.user__item-basket');

  window.addEventListener("load", function () {
    if (localStorage.getItem('basket') && localStorage.getItem('sumProductInBasket')) {

      basketIcon.forEach(elem => {
        elem.classList.add('user__icon_active');
      })

      basketItem.forEach(elem => {
        elem.classList.add('user__item_active');
        elem.textContent = localStorage.getItem('sumProductInBasket');
      })


      // basketIcon.classList.add('user__icon_active');
      // basketItem.classList.add('user__item_active');

      // basketItem.textContent = localStorage.getItem('sumProductInBasket');

      sumProduct = +localStorage.getItem('sumProductInBasket');

      basket = JSON.parse(localStorage.getItem('basket'));


      if (window.location.href.includes('basket')) {
        let totalSum = 0;

        for (let product in basket) {
          totalSum += basket[product].price
        }

        document.querySelector('.basket-product-endsum').textContent = `${totalSum} р.`
      }



    }
  });


  catalog.forEach(elem => {
    elem.addEventListener('click', (e) => {

      if (e.target.classList.contains('catalog__goods-add')) {

        sumProduct += 1;

        basketIcon.forEach(elem => {
          elem.classList.add('user__icon_active');
        })
  
        basketItem.forEach(elem => {
          elem.classList.add('user__item_active');
          elem.textContent = sumProduct;
        })

        // basketItem.textContent = sumProduct;

        let nameProduct = elem.querySelector('.catalog__goods-name').innerText;
        let priceProduct = elem.querySelector('.catalog__goods-value').textContent;
        let imageProduct = elem.querySelector('.catalog__good-product');
        let priceOneProduct = elem.querySelector('.catalog__goods-value').innerText;

        priceProduct = parseFloat(priceProduct.replace(/\s/g, ''));

        if (basket[nameProduct]) {
          basket[nameProduct].price += priceProduct;
          basket[nameProduct].value += 1;
        } else {
          basket[nameProduct] = {};
          basket[nameProduct].price = priceProduct;
          basket[nameProduct].value = 1;
          basket[nameProduct].image = imageProduct.outerHTML;
          basket[nameProduct].priceOneProduct = parseFloat(priceOneProduct.replace(/\s/g, ''));
        }

        localStorage.setItem('basket', JSON.stringify(basket))
        localStorage.setItem('sumProductInBasket', sumProduct)
      }
    })
  })




}


export function generateBasketPage() {

  let basketList = document.querySelector('.basket__product-list');
  let objProduct = JSON.parse(localStorage.getItem('basket'));


  for (let item in objProduct) {

    basketList.insertAdjacentHTML('afterbegin', `
    
    <div class="basket__product-item">
        <div class="basket__product-image">
          ${objProduct[item].image}
        </div>
        <div class="basket__product-name">
          ${item}
        </div>
        <div class="basket__product-info">
          <div class="basket__product-amount">
            <button class="basket__product-del">-</button>
            <span class="basket__product-count">
            ${objProduct[item].value}
            </span>
            <button class="basket__product-add">+</button>
          </div>
          <div class="basket__product-price"><span>${objProduct[item].price}</span>р.</div>
      </div>
      <button class="basket__product-deleted"><img src="assets/img/page__basket/product__pannel/deleted.svg" alt="del">
      </button>
    </div>
    
    `)
  }

}


export function deletedProduct() {
  const delBtn = document.querySelectorAll('.basket__product-deleted');

  delBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      const basket = JSON.parse(localStorage.getItem('basket'));
      const nameDelProduct = elem.parentElement.querySelector('.basket__product-name').innerText;

      const basketItem = document.querySelectorAll('.user__item-basket');
      const basketIcon = document.querySelectorAll('.user__icon-basket');


      let newValue = basket[nameDelProduct].value;

      let newSumProduct = localStorage.getItem('sumProductInBasket') - newValue


      localStorage.setItem('sumProductInBasket', newSumProduct);

      if (newSumProduct === 0) {

        basketIcon.forEach(elem => {
          elem.classList.remove('user__icon_active');
        })
  
        basketItem.forEach(elem => {
          elem.classList.remove('user__item_active');
          elem.textContent = '';
        })
        
        localStorage.clear();
      } else {

        basketItem.forEach(elem => {
          elem.textContent = newSumProduct;
        })
      }
      delete basket[nameDelProduct];

      localStorage.setItem('basket', JSON.stringify(basket))

      elem.parentElement.outerHTML = '';

      let totalSum = 0;

      for (let product in basket) {
        totalSum += basket[product].price
      }

      document.querySelector('.basket-product-endsum').textContent = `${totalSum} р.`
    });
  })
}

export function addOrDelProduct() {

  const basketItem = document.querySelectorAll('.user__item-basket');





  const btnDel = document.querySelectorAll('.basket__product-del');
  const btnAdd = document.querySelectorAll('.basket__product-add');

  btnDel.forEach(elem => {


    elem.addEventListener('click', () => {
      let valueSum = +localStorage.getItem('sumProductInBasket');
      let nameProduct = elem.parentElement.parentElement.parentElement.querySelector('.basket__product-name').innerText;
      let basketLocal = JSON.parse(localStorage.getItem('basket'));

      if (basketLocal[nameProduct].value === 1) {
        elem.disabled = true;
      } else {
        basketLocal[nameProduct].value -= 1;
        basketLocal[nameProduct].price = basketLocal[nameProduct].priceOneProduct * basketLocal[nameProduct].value;
        localStorage.setItem('basket', JSON.stringify(basketLocal));
        localStorage.setItem('sumProductInBasket', valueSum - 1);
      }


      let priceValue = elem.parentElement.parentElement.querySelector('.basket__product-price');

      priceValue.innerHTML = `${basketLocal[nameProduct].priceOneProduct * basketLocal[nameProduct].value} <span>р.</span>`;


      basketItem.forEach(elem => {
        elem.textContent = localStorage.getItem('sumProductInBasket');
      })

      elem.parentElement.querySelector('.basket__product-count').textContent = basketLocal[nameProduct].value;

      let totalSum = 0;

      for (let product in basketLocal) {
        totalSum += basketLocal[product].price
      }

      document.querySelector('.basket-product-endsum').textContent = `${totalSum} р.`

    })
  })
  btnAdd.forEach(elem => {

    elem.addEventListener('click', () => {
      let valueSum = +localStorage.getItem('sumProductInBasket');
      elem.parentElement.querySelector('.basket__product-del').disabled = false;

      let nameProduct = elem.parentElement.parentElement.parentElement.querySelector('.basket__product-name').innerText;
      let basketLocal = JSON.parse(localStorage.getItem('basket'));


      basketLocal[nameProduct].value += 1;
      basketLocal[nameProduct].price = basketLocal[nameProduct].priceOneProduct * basketLocal[nameProduct].value;

      localStorage.setItem('basket', JSON.stringify(basketLocal))


      localStorage.setItem('sumProductInBasket', valueSum + 1);
      basketItem.forEach(elem => {
        elem.textContent = localStorage.getItem('sumProductInBasket');
      })
      

      elem.parentElement.querySelector('.basket__product-count').textContent = basketLocal[nameProduct].value;


      let priceValue = elem.parentElement.parentElement.querySelector('.basket__product-price');

      priceValue.innerHTML = `${basketLocal[nameProduct].priceOneProduct * basketLocal[nameProduct].value} <span>р.</span>`;

      basketItem.forEach(elem => {
        elem.textContent = localStorage.getItem('sumProductInBasket');
      })

      elem.parentElement.querySelector('.basket__product-count').textContent = basketLocal[nameProduct].value;

      let totalSum = 0;

      for (let product in basketLocal) {
        totalSum += basketLocal[product].price
      }

      document.querySelector('.basket-product-endsum').textContent = `${totalSum} р.`

    })



  })


}