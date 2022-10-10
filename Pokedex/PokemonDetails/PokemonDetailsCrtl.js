//Obtenemos los id del pokemon desde la URL
const urlId = window.location.search;
const urlParams = new URLSearchParams(urlId);
var id = urlParams.get('id');

//Hacemos la peticion para la informacion del pokemon
const service = new Service();
service.consultarPokemon(id)
    .then((result) => {
        console.log(result);
        //Obtenemos la imagen del pokemon
        const imgSpace = document.getElementById('img-space');
        const img = document.createElement('img');
        img.src = result.sprites.other["official-artwork"].front_default;
        imgSpace.appendChild(img);

        //Obtenemos la info del pokemon
        const infoSpace = document.getElementById('info-space');
        const h = document.createElement('h3');
        h.textContent = 'Tipo';
        infoSpace.appendChild(h);

        const types = document.createElement('div');
        result.types.forEach(element => {
            const type = document.createElement('span');
            type.classList.add('span-size', element.type.name);
            type.textContent = PrimeraLetraMayus(element.type.name);
            types.appendChild(type);
            infoSpace.appendChild(types)
        });
    });

function PrimeraLetraMayus(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}