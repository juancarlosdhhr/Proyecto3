
import "./Header.css";

//Creamos la plantilla de lo que va a tener dentro el Header

const template = () => `
<h1>Pinterest</h1>
<input type="text" id="searchInput" placeholder="Ex: Dogs" />
<button id="searchBtn" >Search</button>
`;

//Todo esto conforma el componente Header y lo que hace el componente Header es buscar la etiqueta Header y le incluye el template.

const Header = () => {
document.querySelector("header").innerHTML = template();
};

export default Header;