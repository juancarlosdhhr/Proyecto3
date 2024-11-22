
import "./Header.css";

//Creamos la plantilla de lo que va a tener dentro el Header

const template = () => `
<h1 id="PinterestHome">Pinterest</h1>
<input type="text" id="searchInput" placeholder="Ex: Dogs" />

<select id="countInput">
<option value="10">10</option>
<option value="20">20</option>
<option value="30">30</option>
</select>

<select id="orderByInput">
  <option value="relevant">Relevant</option>
  <option value="latest">Latest</option>
</select>


<select id="orientationInput">
<option value="squarish">Squarish</option>
<option value="landscape">Landscape</option>
<option value="portrait">Portrait</option>
</select>

<button id="searchBtn" >Search</button>
`;

//Todo esto conforma el componente Header y lo que hace el componente Header es buscar la etiqueta Header y le incluye el template.

const Header = () => {
document.querySelector("header").innerHTML = template();

// Recarga la página completa al hacer clic en el logotipo
document.querySelector("#PinterestHome").addEventListener("click", () => {
  location.reload();
});
};


export default Header;