<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <title>Florian Royaux</title>
    <link href="/index.css" rel="stylesheet">
    <link href="//db.onlinewebfonts.com/c/7a81d93db4e1f347665f1d3666b71ac1?family=Sanvito+Pro+Display" rel="stylesheet" type="text/css" />
    <script src="/JS/createStar.js" defer></script>
</head>

<body>
<?php include("./component/nav.php") ?>

    <button class="bouttonDroit buttonNav" id="bouttonDroitAccueil">
        <a href="page/projet.php"><img class="imgbutton" src="./image/chevron-right-solid.svg"></a>
    </button>
    <main>
        <section id="sectionAccueil">
            <h2 id="titreAccueil">Je m'apelle <em>Florian Royaux</em>, </br><span class=marge></span>Je suis <strong>
                    développeur web.</strong></span></h2>
            <!-- <p> je m'apelle <em>Florian Royaux</em> je suis <strong> developpeur web</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
                Id quis voluptatum qui voluptas impedit tempore ex aspernatur, atque facere ducimus dolore!<br>
                Recusandae ipsum harum quia quos laudantium dolorum. Unde, saepe?</p> -->
        </section>
        <div id="boxButtonAnimation">
            <button id="starButton">Mettre des étoiles dans le ciel</button>
            <button id="croix" class="hidden"><a href="/Index.php">x</a></button>
            <button id="buttonHyperespace" class="hidden">WIP</button>
        </div>
    </main>

</body>

</html>