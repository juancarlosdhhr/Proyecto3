
import "./Main.css";
const template = () => `
<h2 id="message"></h2>
<ul id="results"></ul>
<div id="results"></div> <!-- Aquí se mostrarán las fotos -->
<div id="pagination">
  <button id="prevPage">Anterior</button>
  <span id="pageNumber">Página 1</span>
  <button id="nextPage">Siguiente</button>
</div>

    
`;

//Crearemos una función adicional
const listeners = () => {

}
//Dicha función la ejecutaremos a continuación dentro de nuestro Main

const Main = () => {
document.querySelector("main").innerHTML = template();

}





export default Main;

