export function selectCity() {
  const btnCity = document.querySelector('.basket__city');
  const cityPopup = document.querySelector('.city');
  const cityList = document.querySelector('.search__city-list');
  const cityClose = document.querySelector('.city__close');



  btnCity.addEventListener('click', () => {
    cityPopup.classList.add('city_active');
  })



  cityClose.addEventListener('click', () => {
    cityPopup.classList.remove('city_active');
  })

  cityList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      btnCity.textContent = e.target.textContent + ',';
      cityPopup.classList.remove('city_active');

      let city = e.target.textContent

      if (city[1] === ' ') {
        city = city.slice(2);
      }

      let KEY = '20f88c305b34fe3df670fb5c19c76ef90981cab4';
      let url = `https://api.c6v.ru/?key=${KEY}&q=getPrice&startCity=Москва&endCity=${city}&weight=50&width=50&height=50&length=50`;
      const arrive = document.querySelector('.basket__delivery-date');
      arrive.innerHTML = '';

      fetch(url)
        .then(response => response.text())
        .then(result => {
          let res = JSON.parse(result)[0].days.split('');

          let currentDate = new Date();

          let firstNumber = +currentDate.getDate() + +res[0];
          let secondNumber = +currentDate.getDate() + +res[res.length - 1];

          function getLastDayOfMonth(year, month) {
            let date = new Date(year, month + 1, 0);
            return date.getDate();
          }

          let lastDay = getLastDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

          if (lastDay < firstNumber) {
            firstNumber = firstNumber - lastDay;
          }
          if (lastDay < secondNumber) {
            secondNumber = secondNumber - lastDay;
          }

          if (firstNumber == secondNumber) {
            arrive.insertAdjacentText('beforeend', `Доставка компанией СДЭК: ${firstNumber} числа`)
          } else {
            arrive.insertAdjacentText('beforeend', `Доставка компанией СДЭК: ${firstNumber} - ${secondNumber} числа`)
          }


        })
        .catch(() => {
          arrive.insertAdjacentText('beforeend', `Дата доставки уточняется по телефону`)
        });

    }
  })
}