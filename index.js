import "./index.css";
import jsLogo from "./assets/js.png";

const h1 = document.createElement("h1");
h1.innerText = "I love JavaScript";

const img = document.createElement("img");
img.src = jsLogo;

document.querySelector("body").append(h1);
document.querySelector("body").append(img);
