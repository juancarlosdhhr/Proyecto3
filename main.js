

import './style.css';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

let currentPage = 1; // Página inicial

const buildWebsite = () => {
  Header();
  Main();
  Footer();
  getPhotos("space", 20, "landscape"); // Llamada inicial con orientación 'landscape'

};



const getPhotos = async (keyword, photoNum, orientation, order_by) => {
  // Corregir la llamada a la API para obtener las fotos
  const data = await fetch(`https://api.unsplash.com/search/photos?page=${currentPage}&query=${keyword}&per_page=${photoNum}&orientation=${orientation}&order_by=${order_by}&client_id=${CLIENT_ID}`);
  
  // Convertir la respuesta en JSON
  const results = await data.json(); // Corregir la sintaxis
  const photos = results.results; // Ahora 'results' es el objeto que contiene las fotos
  
  console.log(photos);
  printPhotos(photos); // Pasamos las fotos a la función printPhotos
};

// Cuando arranque la página va a sacar fotos de naturaleza y 20 resultados
getPhotos("Landscape", 20, "landscape");

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";
    message.textContent = "Ups! No hemos encontrado ningún resultado. Busca otra cosa...";
  } else {
    // Vaciamos el contenedor para que no se sumen las fotos a las ya existentes
    // También vaciamos el texto del mensaje si todo funciona bien
    container.innerHTML = "";
    message.textContent = "We found " + photos.length + " pictures:";

    for (const photo of photos) {
      if (photo.urls && photo.urls.regular) { // Validar si existe 'urls.regular'
        const li = document.createElement("li");
        li.innerHTML = `<img src="${photo.urls.regular}" alt="${photo.alt_description || 'Sin descripción'}" />`;
        container.appendChild(li);
      } else {
        console.warn("Foto sin URL válida:", photo);
      }
    }
  }
};



// Primero pintamos toda la web
buildWebsite();

// Después le damos el listener al botón que ahora sí existe
document.querySelector("#searchBtn").addEventListener("click", () => {
    //Almaceno el valor del input de texto
  const value = document.querySelector("#searchInput").value;
  //Almaceno el valor del select de la orientation
  const orientationValue = document.querySelector("#orientationInput").value;
  
  //Almaceno el valor del select de filtro por numero de fotos 
  const photoNumValue = document.querySelector("#countInput").value;

  //Almaceno el valor del select del filtro por relevancia
  const relevantValue = document.querySelector("#orderByInput").value;
  

  
  
  getPhotos(value, photoNumValue, orientationValue, relevantValue); // Hacer la búsqueda con los valores correctos
});
 



