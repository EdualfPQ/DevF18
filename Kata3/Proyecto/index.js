// Datos de la API
let apiUrl = 'https://api.themoviedb.org/3/';
let imgUrl = 'https://image.tmdb.org/t/p/original';
let apiKey = '24091d786fad771efd80bf59c07d2a31';
let languaje = 'es-MX';

 async function apiRequest(){
    // Realizamos la peticion para obtener las peliculas mas populares
    let response = await axios.get(`${apiUrl}movie/popular?api_key=${apiKey}&languaje=es-MX&page=1`);
    // Obtenemos solo el arreglo con la informacion de las peliculas
    let topMovies = response.data.results
    topMovies.length = 15;
   
    return topMovies;
}

apiRequest().then((response) => {
    let popularDiv = document.getElementById('carousel');
    for(let movie of response){
        let createDiv = document.createElement('div');
        createDiv.classList.add('movie');
        createDiv.innerHTML = `
            <a href='#'><img src='${imgUrl}${movie.poster_path}' alt=''></a>
        `
        popularDiv.appendChild(createDiv);
    }

    const fila = document.querySelector('.carousel-container');
    const peliculas = document.querySelectorAll('.movie');
    const flechaIzquierda = document.getElementById('left');
    const flechaDerecha = document.getElementById('right');

    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;

        const indicadorActivo = document.querySelector('.indicadores .activo');
        if(indicadorActivo.nextSibling){
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;

        const indicadorActivo = document.querySelector('.indicadores .activo');
        if(indicadorActivo.previousSibling){
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // ? ----- ----- Paginacion ----- -----
    const numeroPaginas = Math.ceil(peliculas.length / 5);
    for(let i = 0; i < numeroPaginas; i++){
        const indicador = document.createElement('button');

        if(i === 0){
            indicador.classList.add('activo');
        }

        document.querySelector('.indicadores').appendChild(indicador);
        indicador.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;

            document.querySelector('.indicadores .activo').classList.remove('activo');
            e.target.classList.add('activo');
        });
    }

    // ? ----- ----- Hover ----- -----
    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    fila.addEventListener('mouseleave', () => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    });
});

// const big = document.querySelector('.big')
// const button = document.querySelectorAll('.button')

// // Cuando CLICK en punto
//     // Saber la posición de ese punto
//     // Aplicar un transform translateX al grande

// // Recorrer TODOS los botones
// button.forEach( ( cadaBoton , i )=> {
//     // Asignamos el evento CLICK a los botones
//     button[i].addEventListener('click',()=>{

//         // Guardar la posición
//         let posicion  = i
//         // Calculando el espacio que debe DESPLAZARSE el container
//         let operacion = posicion * -50

//         // MOVEMOS el container
//         big.style.transform = `translateX(${ operacion }%)`
//     })
// })

