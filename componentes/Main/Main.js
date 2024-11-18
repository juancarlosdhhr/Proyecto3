import "./Main.css";

const template = () => {`
<h2 id="message"></h2>
<ul id="resultS"></ul>
    
`

const Main = () => {
document.querySelector("main").innerHTML = template();

}

}