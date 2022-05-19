const API_URL = "https://www.omdbapi.com";
const API_KEY = "236cec3f";
const filmTitle = document.querySelector('#filmTitle');
const filmType = document.querySelector('#filmType');
const film__container = document.querySelector('.film__container');
const btn__search = document.querySelector('#btn__search');

const paginatorPrev = document.querySelector('#paginatorPrev');
const paginatorNext = document.querySelector('#paginatorNext');
const paginator = document.querySelector('.paginator');
let pageCounter = 1;
let lastPageNumber;

const container_data = document.querySelector('.container_data');

// КНОПКИ ПРОЛИСТЫВАНИЯ СТРАНИЦ --
paginatorPrev.addEventListener('click', () => {
    pageCounter--;
    if (pageCounter === 1) paginatorPrev.disabled = true;
    if (pageCounter < lastPageNumber) paginatorNext.disabled = false;

    getFilmsByTitle(getFilmTitle(), getFilmType(), pageCounter)
        .then((data) =>{
            const films = data.Search;
            showFilms(films);
        });
})
// КНОПКИ ПРОЛИСТЫВАНИЯ СТРАНИЦ ++
paginatorNext.addEventListener('click', () => {
    pageCounter++;
    if (pageCounter > 1) paginatorPrev.disabled = false;
    if (pageCounter === lastPageNumber) paginatorNext.disabled = true;

    getFilmsByTitle(getFilmTitle(), getFilmType(), pageCounter)
        .then((data) =>{
            const films = data.Search;
            showFilms(films);
        });
})

function getFilmsByTitle(title, type, page) {
    return fetch(`${API_URL}/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}`)
        .then((response) => response.json())
}

// Детальное описание фильма
function getMovieById(id) {
    return fetch(`${API_URL}/?apikey=${API_KEY}&i=${id}`)
        .then((response) => response.json())
}

// функция которая возвращает название фильма
function getFilmTitle() {
    return filmTitle.value;
}

// функция которая возвращает тип фильма
function getFilmType() {
    return filmType.value;
}

// функция которая выводит список фильмов по введенному названию
function showFilms(films) {
    let filmsItem = '';

    for (let film of films) {
      filmsItem += `
          <div class="container__inner">
              <img class="filmPoster" src="${film.Poster}" alt="poster">
              <div class="container__title">
                  <span class="filmType">${film.Type}</span>
                  <h4 class="filmName">${film.Title}</h4>
                  <span class="filmYear">year of issue: ${film.Year}</span>
                  <button id="btn_details" class="btn__green" data-id="${film.imdbID}"><span>Details ...</span></button>
              </div>
          </div>
      `
    }
    film__container.innerHTML = filmsItem;
    const showInfoButtons = document.querySelectorAll('#btn_details');

    for (let btn of showInfoButtons) {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            console.log(this.dataset.id);
            getMovieById(id)
                .then((movie) => {
                  showSelectedMovie(movie);
                })
        })
    }
}

function showSelectedMovie(movie) {
    let detailsInner = '';
    detailsInner = `
        <div class="container__details">
            <img src="${movie.Poster}" alt="">
            <div class="inner__datails">
                <div class="inner_item">
                    <p>Title:</p><p>${movie.Title}</p>
                </div>
                <div class="inner_item">
                    <p>Released:</p><p>${movie.Released}</p>
                </div>
                <div class="inner_item">
                    <p>Genre:</p><p>${movie.Genre}</p>
                </div>
                <div class="inner_item">
                    <p>Coutry:</p><p>${movie.Country}</p>
                </div>
                <div class="inner_item">
                    <p>Director:</p><p>${movie.Director}</p>
                </div>
                <div class="inner_item">
                    <p>Writer:</p><p>${movie.Writer}</p>
                </div>
                <div class="inner_item">
                    <p>Actors:</p><p>${movie.Actors}</p>
                </div>
                <div class="inner_item">
                    <p>Awards:</p><p>${movie.Awards}</p>
                </div>
            </div>
        </div>
    `
    container_data.innerHTML = detailsInner;
    container_data.style.display = "block";
    container_data.addEventListener('click', () => {
        container_data.style.display = "none";
    })
}

filmTitle.addEventListener('keydown', () => {
    if(event.keyCode == 13) {
        getFilmsByTitle(getFilmTitle(), getFilmType(), pageCounter)
        .then((data) =>{
            const films = data.Search;
            lastPageNumber = Math.ceil(data.totalResults / 10);
            console.log(lastPageNumber);
            showFilms(films);
            paginator.style.display = "block";
            paginatorNext.disabled = false;
        });
    }
})

//ОТПРАВЛЕНИЕ ЗАПРОСА И ПОЛУЧЕНИЕ СПИСКА ФИЛЬМОВ
btn__search.addEventListener('click', () => {
    getFilmsByTitle(getFilmTitle(), getFilmType(), pageCounter)
        .then((data) =>{
            const films = data.Search;
            lastPageNumber = Math.ceil(data.totalResults / 10);
            showFilms(films);
            paginator.style.display = "block";
            paginatorNext.disabled = false;

            console.log(films);
        });
    });