import { createStar } from "./createStar";

// import(createStar);

let starButton = document.querySelector("#starButton")
starButton.addEventListener( "click", import(createStar) )