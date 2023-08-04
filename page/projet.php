<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="utf-8">
    <title>Projet F.Royaux</title>
    <link href="../index.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="element.css"> -->
    <script src="../boutton.js" defer></script> 
</head>

<body>
<?php include("../component/nav.php") ?>

    <button class="bouttonGauche buttonNav" id="bouttonGaucheProjet">
        <a href="../Index.php"><img class="imgbutton" src="../image/chevron-right-solid.svg"></a>
    </button>
    <button class="bouttonDroit buttonNav" id="bouttonDroitProjet">
        <a href="./Apropos.php"><img class="imgbutton" src="../image/chevron-right-solid.svg"></a>
    </button>
    <main class="projet">
        <h2 id="mesoeuvres">quelques unes de mes oeuvres: </h2>
        <section class="sectionProjet">
            <div class="card" id="cardPortfolio">
                <a href="./Accueil.php">
                    <img class="cardimg" id="PortfolioImg" src="../image/porfolio.PNG" alt="Portfolio F.Royaux">
                    <div class="container">
                        <h4><b>Portfolio F.Royaux</b></h4>
                    </div>
                </a>
            </div>
            <div class="card">
                <img class="cardimg" src="../image/Fake/element-1.png" alt="Fake">
                <div class="container">
                    <h4><b>c'est du Fake</b></h4>

                </div>
            </div>
            <div class="card">
                <img class="cardimg" src="../image/Fake/element-2.png" alt="Fake">
                <div class="container">
                    <h4><b>c'est du Fake</b></h4>

                </div>
            </div>
            <div class="card">
                <img class="cardimg" src="../image/Fake/element-3.png" alt="Fake">
                <div class="container">
                    <h4><b>c'est du Fake</b></h4>

                </div>
            </div>
            <div class="card">
                <img class="cardimg" src="../image/Fake/element-4.png" alt="Fake">
                <div class="container">
                    <h4><b>c'est du Fake</b></h4>

                </div>

            </div>
            <div class="card">
                <img class="cardimg" src="../image/Fake/element-5.png" alt="Fake">
                <div class="container">
                    <h4><b>c'est du Fake</b></h4>

                </div>

            </div>

        </section>
    </main>

</body>

</html>