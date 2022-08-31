var searchIcon = document.getElementsByClassName("search-box__icon")[0];
var searchBox = document.getElementsByClassName("search-box")[0];
var API_KEY='dc218bef31b94aab191090c157f2930d';


searchIcon.addEventListener("click", activateSearch);
init();
function activateSearch() {  
  searchBox.classList.toggle("active");
}

function init(){
    const parsedUrl = new URL(window.location.href);
    let id =parsedUrl.searchParams.get("id");
    aboutActor(id);
    listMovies(id);
    
}
async function listMovies(id){
  let moviesArray;
  let getParentElement = document.getElementById('carruseles');
  let imgUrl = 'https://image.tmdb.org/t/p/w200';
  await getMovies(id).then(movies =>
    {
          moviesArray=movies.cast;
    }
    ).catch(error => console.log(error));
    
    const numeroDeRenglones = Math.ceil(moviesArray.length / 5);
    let index= 0;
    
    for(let i = 0; i < numeroDeRenglones; i++){
      const createSection = document.createElement('section');
      let flag=true;
      let contador=0;
      while (flag){
        if(moviesArray[index].poster_path !=null){
          createSection.classList.add('carrousel');
          let urlAboutMovie= `../aboutMovie/aboutmovie.html?id=${moviesArray[index].id}`
          createSection.innerHTML += `
              <a href=${urlAboutMovie}><img src='${imgUrl}${moviesArray[index].poster_path}' class='movie' alt=''></a>`
          contador++;
        }
        if(contador==5 || index==moviesArray.length-1){
          flag=false;
        }
        index++;
      }
      getParentElement.appendChild(createSection);
    }

}
async function aboutActor(id){
  let name;
  await getDetailsActor(id).then(actor =>
    {
          name=actor.name;
    }
    ).catch(error => console.log(error));
  let getParentElement = document.getElementById('Actor');
  const createSection = document.createElement('section');
  createSection.innerHTML = `<h1>Peliculas donde actua <span class="resaltar"> ${name}</span></h1> `
  getParentElement.appendChild(createSection);
  
  

}

async function getMovies(id) {
  let url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=es`;
 
 try {
     let response = await axios.get(url); 
     return response.data
 } catch (e) {
     return []
 }
}

async function getDetailsActor(id){
  let url = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=es`;
  try {
    let response = await axios.get(url); 
    return response.data;
  } catch (e) {
    return [];
}
}