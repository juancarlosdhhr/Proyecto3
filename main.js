

import './style.css'
import Header from './componentes/Header/Header'
import Main from './componentes/Main/Main'
import Footer from './componentes/Footer/Footer'


/* const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; */
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
 
const buildWebsite = () => {
Header()
Main ()
Footer()
getPhotos("space")
};

const getPhotos = async (keyword, photoNum) => {
const data =  await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${photoNum}&client_id=${CLIENT_ID}`   
);
const results = await data.json();
const photos = results.results;
console.log(photos);
printPhotos(photos);
};

//Cuando arranque la pagina va a sacar fotos de naturaleza y 20 resultados
getPhotos("Landscape", "10");

 const printPhotos = (photos) =>{
const container = document.querySelector("#results");
const message = document.querySelector("#message");

if(photos.length === 0){
container.innerHTML = "";
const message =document.querySelector("#message");
message.textContent = "Ups! No hemos encontrado ningún resultado. Busca otra cosa..."
} else {

//Vaciamos el contendor para que no se sumen las fotos a las ya existentes.
//También vaciamos el texto del mensaje si todo funciona bien

container.innerHTML = "";
message.textContent = "He encontrado " + photos.length + " fotos:";

for (const photo of photos) {//Creamos un bucle que recorra cada una de las fotos
const li = document.createElement("li"); //creamos un li por cada foto
li.innerHTML = `
<img src="${photo.urls.regular}" alt = "${photo.alt_description}";" />
`;

container.appendChild(li);
} 
}
};

//Vamos a buscar el botón y le vamos a decir que cuando hagamos click sobre él pasen cosas


//Primero pintamos toda la web
buildWebsite();

//Después le damos el listener al botón que ahora sí existe
document.querySelector("#searchBtn").addEventListener("click", () =>  {
    const value = document.querySelector("#searchInput").value;
    
    //Hacemos que vuelva a ejecutar getPhotos, pero en este caso nos quedamos con el value
    getPhotos(value);
    });