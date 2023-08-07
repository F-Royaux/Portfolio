// const createStar = () => {
let star = [0];
let ranTaille = [0];
let randPositionY = [0];
let randPositionX = [0];
let hypot = [0];
let rotateStarY =[0];
let body = document.querySelector('body');

//boucle pour mettre les étoiles

//fonction boucle hyperespace

//manipulation du dom; boutton and listener boucle create star
let starButton = document.querySelector("#starButton");
let croix = document.querySelector("#croix");
let buttonHyperespace = document.querySelector("#buttonHyperespace");
console.log(buttonHyperespace)
starButton.addEventListener("click", function () {
    for (i = 0; i < 110; i++) {
        star[i] = document.createElement("div");
        body.appendChild(star[i]);
        star[i].classList.add("starBasic");
        star[i].classList.toggle("starScintille");
        //taille des étoiles
        do {
            ranTaille[i] = Math.floor(Math.random() * 5);
            star[i].style.width = `${ranTaille[i]}px`;
            star[i].style.height = `${ranTaille[i]}px`;
        } while (ranTaille[i] < 2);
        //gestion du delay animation box shadow
        star[i].style.animationDelay = `${Math.random() * 4}s`;

        //position des étoiles; le do while utilise pythagore pour les exclure d'un cercle au centre
        do {
            randPositionY[i] = Math.floor(Math.random() * 100);
            star[i].style.bottom = `${randPositionY[i]}vh`;
            randPositionX[i] = Math.floor(Math.random() * 100);
            star[i].style.left = `${randPositionX[i]}vw`;
            //calcul des cotés adjacents
            if (randPositionX[i] < 50) {
                coteAdjacentX = (50 - randPositionX[i]) * -1;
            } else {
                coteAdjacentX = randPositionX[i] - 50;
            }

            //calcul des côtés opposé
            if (randPositionY[i] < 50) {
                coteOpposeY = (50 - randPositionY[i]) * -1;
            } else {
                coteOpposeY = randPositionY[i] - 50;
            }
            hypot[i] = Math.hypot(coteOpposeY, coteAdjacentX)
        } while (hypot[i] < 8);
    };
    for (i = 110; i < 150; i++) {
        star[i] = document.createElement("div");
        body.appendChild(star[i]);
        star[i].classList.add("starBasic");
        star[i].classList.toggle("starScintille");

        //taille des étoiles
        do {
            ranTaille[i] = Math.floor(Math.random() * 5);
            star[i].style.width = `${ranTaille[i]}px`;
            star[i].style.height = `${ranTaille[i]}px`;
        } while (ranTaille[i] < 2);
        //gestion du delay animation box shadow
        star[i].style.animationDelay = `${Math.random() * 4}s`;

        //position des étoiles; le do while utilise pythagore pour les exclure d'un cercle au centre
        do {
            do {
                randPositionY[i] = Math.floor(Math.random() * 100);
                star[i].style.bottom = `${randPositionY[i]}vh`;
                randPositionX[i] = Math.floor(Math.random() * 100);
                star[i].style.left = `${randPositionX[i]}vw`;
                //calcul des cotés adjacents
                if (randPositionX[i] < 50) {
                    coteAdjacentX = (50 - randPositionX[i]) * -1;
                } else {
                    coteAdjacentX = randPositionX[i] - 50;
                }

                //calcul des côtés opposé
                if (randPositionY[i] < 50) {
                    coteOpposeY = (50 - randPositionY[i]) * -1;
                } else {
                    coteOpposeY = randPositionY[i] - 50;
                }
                hypot[i] = Math.hypot(coteOpposeY, coteAdjacentX)
            } while (hypot[i] < 8)
        }
        while (hypot[i] > 14)
        //fin boucle create star

    }
    starButton.classList.toggle("hidden");
    croix.classList.toggle("hidden");
    buttonHyperespace.classList.toggle("hidden");
});
// croix.addEventListener("click", function() { Location.reload });



// debut js hyperespace
// variables pour l'initiaisation des paramétres de lanimation
let coteAdjacentX = 0;
let coteOpposeY = 0;
let rotateStar = [0.0];
//variables Dom pour interaction
let bouttonDroitAccueil = document.querySelector("#bouttonDroitAccueil");
let header = document.querySelector("#header");
let titreAccueil = document.querySelector("#titreAccueil");
let lienProjet = document.querySelector("#lienProjet");
let lienApropos = document.querySelector("#lienApropos");
buttonHyperespace.addEventListener("click", function () {
    // cacher les élements de la page
    bouttonDroitAccueil.classList.toggle("hidden");
    header.classList.toggle("hidden");
    buttonHyperespace.classList.toggle("hidden");
    //animation sur le titre
    // titreAccueil.style.position = ("fixed");
    titreAccueil.classList.toggle("titrePosition");
    function titreTranslate() {
        setTimeout(() => {
            titreAccueil.animate(
                [
                    { transform: `translateX(-50%) rotateX(10deg) translateY(0) scaleX(1)` },
                    { transform: `translateX(-50%) rotateX(35deg) translateY(-300px) scaleX(1.5)` },
                ],
                {
                    duration: 750,
                }
            )

        }, 3000); // Délai de 3 secondes avant le début de l'animation
        setTimeout(() => {
            titreAccueil.classList.toggle("hidden");
        }, 3750)
    }
    titreTranslate();
    setTimeout(() => {
        lienApropos.classList.toggle("hidden");
        lienProjet.classList.toggle("hidden");

    }, 3000);
    // je garde une boucle for pour pouvoir réutiliser les coordonés des étoiles, randomPosition X et Y
    for (i = 0; i < 150; i++) {
        star[i].classList.remove("starScintille");
        star[i].style.animationDelay = `0s`;

        //calcul des cotés adjacents
        if (randPositionX[i] < 50) {
            coteAdjacentX = (50 - randPositionX[i]) * -1;
        } else {
            coteAdjacentX = randPositionX[i] - 50;
        }

        //calcul des côtés opposé
        if (randPositionY[i] < 50) {
            coteOpposeY = (50 - randPositionY[i]) * -1;
        } else {
            coteOpposeY = randPositionY[i] - 50;
        }
        //calcul de l'angle par rapport au cante; le -1 pour aller dans la bonne direction
        rotateStar[i] = Math.atan(coteOpposeY / coteAdjacentX) * - 1;


        //calcul de l'angle pour le 3D
        rotateStarY[i] = Math.atan(100 / hypot[i]);

        //transformOrigin pour étendre les étoiles par la suite sur le coté au lieu du milieu
        //probléme avec l'origine du coté gauche (x<50): le scale semble se raprocher du centre
        //toute les étoiles semble prendre (100 0)
        if (randPositionX[i] < 50) {
            star[i].style.transformOrigin = (`100% 0%`);
        } else {
            star[i].style.transformOrigin = ("0% 0%");
        }
        //animation des étoiles qui s'étirent
        star[i].animate(
            [
                { transform: `rotate(${rotateStar[i]}rad) rotateY(${rotateStarY[i]}rad) scaleX(1)` },
                { transform: `rotate(${rotateStar[i]}rad) rotateY(${rotateStarY[i]}rad) scaleX(200)` },
            ],
            {
                duration: 3000,
            },
        );

        function starTranslate(starActuelle, rotate, rotateY, coorx) {
            setTimeout(() => {
                let delayhp = Math.random() * 500;
                if (coorx < 50) {
                    starActuelle.animate(
                        [
                            { transform: `rotate(${rotate}rad) rotateY(${rotateY}rad) scaleX(200) translate(0)` },
                            { transform: `rotate(${rotate}rad) rotateY(${rotateY}rad) scaleX(200) translate(-10px)` },
                        ],
                        {
                            duration: 500,
                            iterations: Infinity,
                            delay: delayhp,
                        }
                    );
                } else {
                    starActuelle.animate(
                        [
                            { transform: `rotate(${rotate}rad) rotateY(${rotateY}rad) scaleX(200) translate(0)` },
                            { transform: `rotate(${rotate}rad) rotateY(${rotateY}rad) scaleX(200) translate(10px)` },
                        ],
                        {
                            duration: 500,
                            iterations: Infinity,
                            delay: delayhp,
                        }
                    );
                }
            }, 2500); // Délai de 3 secondes avant le début de l'animation
        }
        starTranslate(star[i], rotateStar[i], rotateStarY[i], randPositionX[i]);
    };
});