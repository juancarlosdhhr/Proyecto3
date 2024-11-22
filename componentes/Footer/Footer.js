import "./Footer.css";

//Creamos una función que retorne el html

const template = () =>  `
<p> Copyright 2024 - Pinterest</p>
`;


//Creamos otra función llamada Footer para que se llame iguial que el componente, que lo que  hace es que busca
//con un QuerySelector la etiqueta que ya existe del footer, y le mete dentro el template

const Footer = ()  => {
document.querySelector("footer").innerHTML = template();
};

export default Footer;
