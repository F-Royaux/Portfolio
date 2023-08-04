const createStar = () => {
console.log("ok")
let star = [0];
let ranTaille = 0;
let randPositionY = 0;
let randPositionX = 0;
let body = document.querySelector('body');
console.log(body);
for (let i = 0; i < 150; i++) {
    console.log(`boucle ${i}`);
    star[i] = document.createElement("div");
    body.appendChild(star[i]);

    star[i].classList.add("starBasic");

 //taille des étoiles
    do {
        ranTaille = Math.floor(Math.random() * 5);
        star[i].style.width = `${ranTaille }px`;
        star[i].style.height = `${ranTaille}px`;
    } while (ranTaille < 2);
//gestion du box shadow
star[i].style.animationDelay = `${Math.random()*4}s`;

 //position des étoiles
    do {
        randPositionY = Math.floor(Math.random() * 100);
        star[i].style.bottom = `${randPositionY}vh`;
    } while (randPositionY > 45 && randPositionY < 55);


    do {
    randPositionX = Math.floor(Math.random() * 100);
    star[i].style.left = `${randPositionX}vw`;
    console.log(star[i]);
} while (randPositionX > 45 && randPositionX < 55);
star[i].classList.toggle("starScintille");
};
};
let starButton = document.querySelector("#starButton");
let croix = document.querySelector("#croix");
let buttonHyperespace = document.querySelector("#buttonHyperespace");

starButton.addEventListener("click", function () { 
    createStar() ;
    starButton.classList.toggle("hidden");
    croix.classList.toggle("hidden");
    buttonHyperespace.classList.toggle("hidden");
});
// croix.addEventListener("click", function() { Location.reload });


