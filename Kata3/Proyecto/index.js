// Datos de la API
let apiUrl = 'https://api.themoviedb.org/3/';
let imgUrl = 'https://image.tmdb.org/t/p/original';
let apiKey = '24091d786fad771efd80bf59c07d2a31';
let lenguaje = 'es-MX';
let popularRequest = `${apiUrl}movie/popular?api_key=${apiKey}&languaje=es-MX`;
let genreRequest = `${apiUrl}genre/movie/list?api_key=${apiKey}&languaje=es-MX`;
let moviesArray = [];

async function apiMovieRequest(request){
    // Realizamos la peticion para obtener las peliculas
    let response = await axios.get(request);
    // Obtenemos solo el arreglo con la informacion de las peliculas
    let result = response.data.results
    result.length = 15;
    // Insertamos las peliculas en nuestro arreglo de peliculas
    arrayMovies(result);
    return result;
}

async function apiGenreRequest(request){
    // Realizamos la peticion para obtener los generos
    let response = await axios.get(request);
    // Obtenemos solo el arreglo con la informacion de las peliculas
    let result = response.data.genres
    result.length=5;

    return result
}

function arrayMovies(array){
    if(moviesArray.length == 0){
        for(let item of array){
            moviesArray.push(item);
        }
    }else{
        array.find(element => {
            var exist = moviesArray.filter(function(exist) {
                return exist.id === element.id;
            });
            if(exist.length == 0){
                moviesArray.push(element);
            }
        })
    }
}

async function pintarPopulares(){
// Se realiza la peticion a la api para las peliculas mas populares
    await apiMovieRequest(popularRequest).then((response) => {
        let popularDiv = document.getElementById('carousel');
        for(let movie of response){
            let createDiv = document.createElement('div');
            createDiv.classList.add('movie');
            let urlAboutMovie= `aboutMovie/aboutmovie.html?id=${movie.id}`
            createDiv.innerHTML = `
                <a href=${urlAboutMovie}><img src='${imgUrl}${movie.poster_path}' alt=''></a>
            `
            popularDiv.appendChild(createDiv);
        }

    const fila = document.querySelector('.carousel-container');
    const peliculas = document.querySelectorAll('.movie');
    const flechaIzquierda = document.getElementById('popular-left');
    const flechaDerecha = document.getElementById('popular-right');

    // Event Listener para la flecha derecha.
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;
    });

    // Event Listener para la flecha izquierda.
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;
    });
});
}

async function pintarGenerales(){
    await apiGenreRequest(genreRequest).then(async (response) =>{
        var movies;
        // Obtenemos el arreglo de generos
        let genres = response;
        // Recorremos nuestro arreglo generos para la busqueda de listas
        for(let genre of genres){
            // Hacemos la peticion por genero
            let request = `${apiUrl}discover/movie?api_key=${apiKey}&language=es-MX&sort_by=popularity.desc&with_genres=${genre.id}`;
            // Obtenemos el elemento (div) en el que se insertaran los cambios
            const containerDiv = document.getElementById('container');
            // Creamos el div para el titulo de los carruseles
            const tittleDiv = document.createElement('h3');
            tittleDiv.innerHTML = `Peliculas del genero ${genre.name}`;
            containerDiv.appendChild(tittleDiv);
            // Creamos el div que contendra el nuevo carrusel
            const createDivContainer = document.createElement('div');
            createDivContainer.classList.add('main-cointainer')
            // Creamos el elemento (boton izq) para el movimiento izquierdo del carrusel
            const createButtonLeft = document.createElement('button');
            createButtonLeft.setAttribute('role', 'button');
            createButtonLeft.setAttribute('id', `${genre.name}-arrow-left`);
            createButtonLeft.classList.add('left');
            createDivContainer.appendChild(createButtonLeft);
            // Creamos el elemento para el carrusel
            const createDivCarousel = document.createElement('div');
            createDivCarousel.setAttribute('id',`${genre.name}-carousel`)
            createDivCarousel.classList.add('carousel-container');
            const createCarousel = document.createElement('div');
            createCarousel.setAttribute('id', `${genre.name}-carousel`);
            createCarousel.classList.add('carousel');
        await apiMovieRequest(request).then((response) => {
                for(let movie of response){
                    let createDiv = document.createElement('div');
                    createDiv.classList.add('movie');
                    let urlAboutMovie= `aboutMovie/aboutmovie.html?id=${movie.id}`
                    createDiv.innerHTML = `
                        <a href=${urlAboutMovie}><img src='${imgUrl}${movie.poster_path}' alt=''></a>
                    `
                    createCarousel.appendChild(createDiv);
                }
            })
            createDivCarousel.appendChild(createCarousel);
            createDivContainer.appendChild(createDivCarousel);
            containerDiv.appendChild(createDivContainer);
            // Creamos el elemento (boton der) para el movimiento izquierdo del carrusel
            const createButtonRight = document.createElement('button');
            createButtonRight.setAttribute('role', 'button');
            createButtonRight.setAttribute('id', `${genre.name}-arrow-right`);
            createButtonRight.classList.add('right');
            createDivContainer.appendChild(createButtonRight);

            const fila = document.getElementById(`${genre.name}-carousel`);
            const flechaIzquierda = document.getElementById(`${genre.name}-arrow-left`);
            const flechaDerecha = document.getElementById(`${genre.name}-arrow-right`);

            // Event Listener para la flecha derecha.
            flechaDerecha.addEventListener('click', () => {
                fila.scrollLeft += fila.offsetWidth;
            });

            // Event Listener para la flecha izquierda.
            flechaIzquierda.addEventListener('click', () => {
                fila.scrollLeft -= fila.offsetWidth;
            });
        }
    })
}

pintarPopulares();
pintarGenerales();
