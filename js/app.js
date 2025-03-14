
// richiamo contenitore card dall html
const mainContainer = document.getElementById('main-container')
console.log(mainContainer)

// ajax
axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        const imgArray = response.data
        console.log(imgArray)
        imgArray.forEach(element => {
            const { title, url, id } = element
            console.log(title, url, id);
            mainContainer.innerHTML += `<div class="card position-relative">
                <img src="${(url)}" alt="immagine numero ${(id)}">
                <p class="fst-italic">${(title)}</p>
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
    })