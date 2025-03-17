
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
            mainContainer.innerHTML += `<div class="card position-relative">
                <img class="image" src="${(url)}" alt="immagine numero ${(id)}">
                <p class="date text-secondary">${(date)}</p>
                <p class="title fs-5 fw-bold mb-0 text-uppercase">${(title)}</p>
                <img class="pin position-absolute top-0 start-50 translate-middle" src="img/img/pin.svg" alt="immagine pin">
            </div>`
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

let overlay = document.getElementById('overlay');
console.log(overlay)

// evento clicco bottone
button.addEventListener("click", closeOverlay);

function closeOverlay() {
    overlay.classList.add('d-none')
};

// richiamo card
let card;

const myTimeout = setTimeout(cardList, 100);
const mySecondTimeout = setTimeout(delayEvent, 200);

function cardList() {
    card = document.querySelectorAll('.card')
    console.log(card)
}

// apertura overlay al click su card
function delayEvent() {
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener("click", openOverlay);
    }
}

function openOverlay() {
    overlay.classList.remove('d-none')
}

