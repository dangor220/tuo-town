export function searchCity() {
  
  let userInput = document.querySelector('.search__city');
  let cityList = document.querySelector('.search__city-list');

  userInput.addEventListener('input', function() {
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    let token = "faf80fa969b2fe89d4890aa7aefe4e5099320ab4";
    
   
    let query = userInput.value;

    let options = {
          method: "POST",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + token
          },
          body: JSON.stringify({query: query})
      }
    


      fetch(url, options)
      .then(response => response.text())
      .then(result => {
        cityList.textContent = '';
        let arrAdress = JSON.parse(result).suggestions;

        for (let item of arrAdress) {
          cityList.innerHTML += `<li>${item.value}</li>`
        }

      })
      .catch(error => console.log("error", error));

    

  });

 
}
