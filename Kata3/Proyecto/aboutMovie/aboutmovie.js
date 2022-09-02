var searchIcon = document.getElementsByClassName("search-box__icon")[0];
var searchBox = document.getElementsByClassName("search-box")[0];
var API_KEY='dc218bef31b94aab191090c157f2930d';


searchIcon.addEventListener("click", activateSearch);
init();
// Animacion boton de busqueda
function activateSearch() {  
  searchBox.classList.toggle("active");
}

//Generacion de la pagina
function init(){
    const parsedUrl = new URL(window.location.href);
    var id =parsedUrl.searchParams.get("id"); 
    aboutMovie(id);
    castMovie(id);
    genresMovie(id);
}
// Informacion sobre la pelicula
async function aboutMovie(id){
    let getParentElement = document.getElementById('aboutMovie');
    let movieInfo;
    await getMovie(id).then(movie =>
        {
            movieInfo=movie;
        }
        ).catch(error => console.log(error));

    const createSection = document.createElement('section')
     let urlimagen = `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`;
      //<section class="product"> </section>
     createSection.innerHTML = `
         <img src="${urlimagen}" alt="">
         <h1>${movieInfo.title}</h1> 
         <h4>${movieInfo.overview}</h4> 
         `
     getParentElement.appendChild(createSection);
}
// Informacion sobre los actores
async function castMovie(id){
    let getParentElement = document.getElementById('sections');
    let castArray;
    await getCast(id).then(Cast =>
        {
            castArray=Cast.cast;
        }
        ).catch(error => console.log(error));
    var i=0;
    const createSection = document.createElement('section');
    createSection.classList.add('sections');
    createSection.innerHTML = `<span class="tags-label">Elenco:</span>`
    while (i<=15 && i<castArray.length){
        let urlActor= `../aboutactor/aboutactor.html?id=${castArray[i].id}`
        if(i!=15){
            
            createSection.innerHTML += `<span class="tag-item"> <a href=${urlActor}>${castArray[i].original_name}, </a></span>`
            
        }else{
            
            createSection.innerHTML += `<span class="tag-item"><a href=${urlActor}> ${castArray[i].original_name}</a></span>`    
        }
        i++
    }
    getParentElement.appendChild(createSection);
}
// Informacion sobre los generos de la pelicula
async function genresMovie(id){
    let generos;
    await getMovie(id).then(genres =>
        {
            generos=genres.genres;
        }
        ).catch(error => console.log(error));
    let getParentElement = document.getElementById('sections');
    const createSection = document.createElement('section');
    createSection.classList.add('sections');
    createSection.innerHTML = `<span class="tags-label">Generos:</span>`
    for(let i=0;i<generos.length;i++){
        if(i != generos.length-1 ){
            createSection.innerHTML += `<span class="tag-item"> ${generos[i].name},</span>`
        }else{
            createSection.innerHTML += `<span class="tag-item"> ${generos[i].name}</span>`
        }
    }
    getParentElement.appendChild(createSection); 
}
//Peticion para obtener la informacion de la pelicula
async function getMovie(id) {
     let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es`;
    
    try {
        let response = await axios.get(url);
        
        return response.data
    } catch (e) {
        return []
    }
}
//Peticion para obtener los actores
async function getCast(id) {
    let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es`;
   
   try {
       let response = await axios.get(url); 
       return response.data
   } catch (e) {
       return []
   }
}



