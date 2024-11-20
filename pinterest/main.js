import './style.css'
import Header from '../componentes/Header/Header';
import Main from '../componentes/Main/Main';
import Footer from '../componentes/footer/footer';


const  CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
 
const buildWebsite = () => {
Header()
Main ()
Footer()
getPhotos("space")
};

const getPhotos = async (keyword) => {
const data =  await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${CLIENT_ID}`   
);
const results = await data.json();
const photos = results.results;
console.log(photos);
printPhotos(photos);
};

 const printPhotos = (photos) =>{
const container = document.querySelector("#results");
const message = document.querySelector("#message");

for (const photo of photos) {//Creamos un bucle que recorra cada una de las fotos
const li = document.createElement("li"); //creamos un li por cada foto
li.innerHTML = `
<img src=${photo.urls.regular} alt = "${photo.alt_description}" />
`

container.appendChild(li);
 } 
 }
buildWebsite();