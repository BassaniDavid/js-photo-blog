
// richiamo contenitore card dall html
const mainContainer = document.getElementById('main-container')
console.log(mainContainer)

// ajax
axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        const imgArray = response.data
        console.log(imgArray)
        imgArray.forEach(element => {
            const { title, date, url, id } = element
            console.log(title, url, id);

            const divCard = document.createElement('div');
            divCard.classList.add('card', 'position-relative');
            mainContainer.appendChild(divCard);

            const imgElement = document.createElement('img');
            imgElement.src = (url);
            imgElement.alt = `immagine numero ${(id)}`
            imgElement.classList.add('image');
            divCard.appendChild(imgElement);

            const parDate = document.createElement("p");
            parDate.innerHTML = (date);
            parDate.classList.add('date', 'text-secondary');
            divCard.appendChild(parDate);

            const parTitol = document.createElement("p");
            parTitol.innerHTML = (title);
            parTitol.classList.add('title', 'fs-5', 'fw-bold', 'mb-0', 'text-uppercase');
            divCard.appendChild(parTitol);

            const imgPin = document.createElement('img');
            imgPin.src = "img/img/pin.svg";
            imgPin.alt = "immagine pin"
            imgPin.classList.add('pin', 'position-absolute', 'top-0', 'start-50', 'translate-middle');
            divCard.appendChild(imgPin);

            divCard.addEventListener("click", openOverlay);

            function openOverlay() {
                overlay.classList.remove('d-none')
                divImage.innerHTML = `<img class="overlay-img" src="${url}" alt="overlay immagine ${id}">`
            }
        });

    })
    .catch(error => {
        console.error(error)
        mainContainer.innerHTML += `<div class="alert alert-danger" role="alert">
       Opsy! there seems to be a problem in the code!
       here are the details:
       ${error}
      </div>`
    }
    );


// day2

const button = document.getElementById('button');
console.log(button);

const overlay = document.getElementById('overlay');
console.log(overlay)

const divImage = document.querySelector('.div-image')
console.log(divImage)

// evento clicco bottone
button.addEventListener("click", closeOverlay);

function closeOverlay() {
    overlay.classList.add('d-none')
};

// richiamo card
let card;

function cardList() {
    card = document.querySelectorAll('.card')
    console.log(card)
};



