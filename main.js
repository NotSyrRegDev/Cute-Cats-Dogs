
let btnActveCats = document.getElementById('btn_cats');
let btnActveDogs = document.getElementById('btn_dogs');



function chooseTheAnimal(param) {

    if (param == 'cats') {
        btnActveCats.classList.add('active');
        btnActveDogs.classList.remove('active');
        clearRows();
        fetchCats();   
    }

    if (param == 'dogs') {
        btnActveCats.classList.remove('active');
        btnActveDogs.classList.add('active');
        clearRows();
        fetchDogs();   
    }

    if (param == 'default') {

        btnActveCats.classList.remove('active');
        btnActveDogs.classList.add('active');
        clearRows();
        fetchDogs();    
    }

}


function clearRows() {
    document.querySelector('#ul_images').innerHTML = ''
}


function fetchDogs() {
    const url = 'https://dog.ceo/api/breed/hound/images';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        const listItems = images.map(image => {
          const href = `https://dog.ceo/img/${image}`;
          return `<li><a href="${href}" class="thumbnail"><span class="frame"><img src="${image}" alt="Turpis egestas" /></span></a></li>`;
        });
        document.querySelector('#ul_images').innerHTML = listItems.join('');
      });
    
}

function fetchCats() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_lZXjKFZGqwz8nw0gJVfnAWQVztKjC7DnSXiX4W8qRUW7mT88vXOnZr0uAibUy8hA';
   
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const listItems = data.map(image => {
            return `<li><a href="${image.url}" class="thumbnail"><span class="frame"><img src="${image.url}" alt="Turpis egestas" /></span></a></li>`;
          });
          
          document.querySelector('ul').innerHTML = listItems.join('');
       // document.querySelector('#ul_images').innerHTML = listItems.join('');
      });
    
}


