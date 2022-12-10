//déclaration infos heros


/*const liste = [];
liste.push(maDiv4, maDiv5, maDiv6, maDiv7);
*/

//decla variables pv heros

valeurPvHero1 = document.getElementById("valeurPvHero1");
valeurPvHero2 = document.getElementById("valeurPvHero2");
valeurPvHero3 = document.getElementById("valeurPvHero3");
valeurPvHero4 = document.getElementById("valeurPvHero4");

//decla variables pa heros

valeurPaHero1 = document.getElementById("valeurPaHero1");
valeurPaHero2 = document.getElementById("valeurPaHero2");
valeurPaHero3 = document.getElementById("valeurPaHero3");
valeurPaHero4 = document.getElementById("valeurPaHero4");

//decla des images

maDiv4 = document.getElementById("maDiv4");
maDiv5 = document.getElementById("maDiv5");
maDiv6 = document.getElementById("maDiv6");
maDiv7 = document.getElementById("maDiv7");




/*/decla de stats

statHero1 = document.getElementById("statHero1");
statHero2 = document.getElementById("statHero2");
statHero3 = document.getElementById("statHero3");
statHero4 = document.getElementById("statHero4");
*/




//declaration des infos monstres

//decla variables vie monstres

valeurPvEnnemi1 = document.getElementById("valeurPavEnnemi");
valeurPvEnnemi2 = document.getElementById("valeurPvEnnemi2");
valeurPvEnnemi3 = document.getElementById("valeurPvEnnemi3");

//decla des images monstres

maDiv1 = document.getElementById("maDiv");
maDiv2 = document.getElementById("maDiv2");
maDiv3 = document.getElementById("maDiv3");

//decla cases monstres

case1 = document.getElementById("case1");
case2 = document.getElementById("case2");
case3 = document.getElementById("case3");

//decla variables boutons

choixAttaque = document.getElementById("choixAttaque");
choixDefense = document.getElementById("choixDefense");
choixSpecial = document.getElementById("choixSpecial");
finirLeTour = document.getElementById("finirLeTour");

choix = document.getElementById("choix");
finirLeTour = document.getElementById("finirLeTour");

//declaration variable boite de dialogue

contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");


//debut du combat

var action1 = false
var action2 = false
var action3 = false
var action4 = false

var attaque1 = false

// Choix entre Attaquer, Special et Defense (pas reussi a le faire)

choix.style.visibility='hidden';

// Cases qui font apparaitre les PV ennemis en passant la souris dessus
case1.style.visibility='hidden';
case2.style.visibility='hidden';
case3.style.visibility='hidden';






// cliquer sur le premier hero (cliquer sur "hero1" et non l'image)
maDiv4.onclick = function() {

    if (action1 == false){

    
        choix.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez choisi Florizarre. Que voulez vous faire ?";



        choixAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";

            // Attaque monstre 1 (on y retrouve souvent un bug)
            maDiv.onclick = function() {
                valeurPvEnnemi1 = parseInt(valeurPvEnnemi1) - 75;
                choix.style.visibility = 'visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats ! C'est super efficace.";
                choix.style.visibility='hidden';
                    if(valeurPvEnnemi1.innerHTML > 0){
                    setTimeout(function(){
                            valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                            }, 2.0 * 1000);
                    }
                    // Ces "if", present dans chaque code de verification des PV ennemis sont des tentatives de disparition des sprites lors des morts adversaire. Ceux-ci n'ont malheureusement jamais fonctionne.
                    if (valeurPvEnnemi1.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                       // maDiv.style.visibility='hidden';
                    }
                //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats ! C'est super efficace.";
                attaque1=true;
                action1 = true;
            }
            // Attaque sur le monstre 2
            maDiv2.onclick = function() {               

                valeurPvEnnemi2.innerHTML = parseInt(valeurPvEnnemi2.innerHTML) - 25;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 25 points de degats. Ce n'est pas tres efficace.";
                choix.style.visibility='hidden';
                    if (valeurPvEnnemi2.innerHTML > 0){
                        setTimeout(function(){
                            valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                        }, 2.0 * 1000);
                    }  
                    if (valeurPvEnnemi2.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                       // maDiv2.style.visibility='hidden';
                    }
                //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 25 points de degats. Ce n'est pas tres efficace.";
                //contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                attaque1= true;
                action1 = true;
            }
            // Attaque sur le monstre 3
            maDiv3.onclick = function() {
                
                valeurPvEnnemi3.innerHTML = parseInt(valeurPvEnnemi3.innerHTML) - 50;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 50 points de degats.";
                choix.style.visibility='hidden';
                    if (valeurPvEnnemi3.innerHTML > 0){
                        setTimeout(function(){
                            valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                        }, 2.0 * 1000);      
                    }
                    if (valeurPvEnnemi3.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        //maDiv3.style.visibility='hidden';  
                    }
                    // On passe l'action en true pour valider la realisation de l'action.
                attaque1 = true;
                action1 = true;
            }
            
                if (action1 = true) {
                    choix.style.visibility='hidden';
            
        }
        }
  

    }
    /* Gestion Attk Spe
 if ((action1 == false) && (valeurPaHero1)){

    
        choix.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez choisi Florizarre. Que voulez vous faire ?";



        choixSpecial.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi l'attaque speciale. Qui voulez vous attaquer ?";

            
            maDiv.onclick = function() {
                valeurPvEnnemi1 = ((parseInt(valeurPvEnnemi1) - 75)*2);
                choix.style.visibility = 'visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 150 points de degats ! C'est super efficace.";
                choix.style.visibility='hidden';
                    if(valeurPvEnnemi1.innerHTML > 0){
                    setTimeout(function(){
                            valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                            }, 2.0 * 1000);
                    }
                    if (valeurPvEnnemi1.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                       // maDiv.style.visibility='hidden';
                    }
                //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats ! C'est super efficace.";
                attaque1=true;
                action1 = true;
            }
            
            maDiv2.onclick = function() {               

                valeurPvEnnemi2.innerHTML = ((parseInt(valeurPvEnnemi2.innerHTML) - 25)*2);
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 50 points de degats. Ce n'est pas tres efficace.";
                choix.style.visibility='hidden';
                    if (valeurPvEnnemi2.innerHTML > 0){
                        setTimeout(function(){
                            valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                        }, 2.0 * 1000);
                    }  
                    if (valeurPvEnnemi2.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                       // maDiv2.style.visibility='hidden';
                    }
                //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 25 points de degats. Ce n'est pas tres efficace.";
                //contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                attaque1= true;
                action1 = true;
            }

            maDiv3.onclick = function() {
                
                valeurPvEnnemi3.innerHTML = ((parseInt(valeurPvEnnemi3.innerHTML) - 50)*2);
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 100 points de degats.";
                choix.style.visibility='hidden';
                    if (valeurPvEnnemi3.innerHTML > 0){
                        setTimeout(function(){
                            valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Florizarre subit 10 points de degats !";
                        }, 2.0 * 1000);      
                    }
                    if (valeurPvEnnemi3.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        //maDiv3.style.visibility='hidden';  
                    }
                attaque1 = true;
                action1 = true;
            }
            
                if (action1 = true) {
                    choix.style.visibility='hidden';
            
        }
        }
  

    }
    */
}
// Choix du deuxieme hero en cliquant dessus (image)
maDiv5.onclick = function() {

    if (action2 == false){
        console.log(action2)

        choix.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez choisi Dracaufeu. Que voulez vous faire ?";

        choixAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";
            
            maDiv.onclick = function() {

                valeurPvEnnemi1.innerHTML = parseInt(valeurPvEnnemi1.innerHTML) - 30;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 30 points de degats. Ce n'est pas tres efficace.";
                choix.style.visibility='hidden';
                if (valeurPvEnnemi1.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 15;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Dracaufeu subit 15 points de degats !";
                    }, 2.0 * 1000); 
                }

                if(valeurPvEnnemi1.innerHTML <= 0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                   // maDiv.style.visibility='hidden';
                }
                action2 = true;
            }
            
            maDiv2.onclick = function() {

                valeurPvEnnemi2.innerHTML = parseInt(valeurPvEnnemi2.innerHTML) - 80;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 80 points de degats. C'est super efficace.";
                choix.style.visibility='hidden';
                if (valeurPvEnnemi2.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 20;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Dracaufeu subit 20 points de degats !";
                    }, 2.0 * 1000); 
                    action2 = true;
                }
                

                if(valeurPvEnnemi2.innerHTML <= 0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                   // maDiv2.style.visibility='hidden';
                    action2 = true;
                }
            }

            maDiv3.onclick = function() {

                valeurPvEnnemi3.innerHTML = parseInt(valeurPvEnnemi3.innerHTML) - 50;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 50 points de degats.";
                choix.style.visibility='hidden';
                if (valeurPvEnnemi3.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 15;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Dracaufeu subit 15 points de degats !";
                    }, 2.0 * 1000); 
                action2 = true;
            }
            
                if(valeurPvEnnemi3.innerHTML <= 0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                   // maDiv3.style.visibility='hidden';
                    action2 = true
                }
                if (action2 = true){
                    choix.style.visibility = 'hidden';
                }           

            

        }


    }
}

    /* Gestion Attk Spe
    if ((action1 == false) && (valeurPaHero2 != 0)){

        
            choix.style.visibility='visible';
            contenuBoiteDialogue.innerHTML = "Vous avez choisi Florizarre. Que voulez vous faire ?";



            choixSpecial.onclick = function() {

                contenuBoiteDialogue.innerHTML = "Vous avez choisi l'attaque speciale. Qui voulez vous attaquer ?";

                
                maDiv.onclick = function() {
                    valeurPvEnnemi1 = ((parseInt(valeurPvEnnemi1) - 75)*2);
                    choix.style.visibility = 'visible';
                    contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 150 points de degats ! C'est super efficace.";
                    choix.style.visibility='hidden';
                        if(valeurPvEnnemi1.innerHTML > 0){
                        setTimeout(function(){
                                valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 10;
                                choix.style.visibility='visible';
                                contenuBoiteDialogue.innerHTML = "Dracaufeu subit 10 points de degats !";
                                }, 2.0 * 1000);
                        }
                        if (valeurPvEnnemi1.innerHTML <= 0){
                            contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        // maDiv.style.visibility='hidden';
                        }
                    //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats ! C'est super efficace.";
                    valeurPaHero2 -= 1;
                    action1 = true;
                }
                
                maDiv2.onclick = function() {               

                    valeurPvEnnemi2.innerHTML = ((parseInt(valeurPvEnnemi2.innerHTML) - 25)*2);
                    choix.style.visibility='visible';
                    contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 50 points de degats. Ce n'est pas tres efficace.";
                    choix.style.visibility='hidden';
                        if (valeurPvEnnemi2.innerHTML > 0){
                            setTimeout(function(){
                                valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 10;
                                choix.style.visibility='visible';
                                contenuBoiteDialogue.innerHTML = "Dracaufeu subit 10 points de degats !";
                            }, 2.0 * 1000);
                        }  
                        if (valeurPvEnnemi2.innerHTML <= 0){
                            contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        // maDiv2.style.visibility='hidden';
                        }
                    //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 25 points de degats. Ce n'est pas tres efficace.";
                    //contenuBoiteDialogue.innerHTML = "Dracaufeu subit 10 points de degats !";
                    valeurPaHero2 -= 1;
                    action1 = true;
                }

                maDiv3.onclick = function() {
                    
                    valeurPvEnnemi3.innerHTML = ((parseInt(valeurPvEnnemi3.innerHTML) - 50)*2);
                    choix.style.visibility='visible';
                    contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 100 points de degats.";
                    choix.style.visibility='hidden';
                        if (valeurPvEnnemi3.innerHTML > 0){
                            setTimeout(function(){
                                valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 10;
                                choix.style.visibility='visible';
                                contenuBoiteDialogue.innerHTML = "Dracaufeu subit 10 points de degats !";
                            }, 2.0 * 1000);      
                        }
                        if (valeurPvEnnemi3.innerHTML <= 0){
                            contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                            //maDiv3.style.visibility='hidden';  
                        }
                    valeurPaHero2 -= 1;
                    action1 = true;
                }
                
                    if (action1 = true) {
                        choix.style.visibility='hidden';
                
            }
            }
    

        }
        */
}

// Choix troisieme hero en cliquant sur l'image
maDiv6.onclick = function(){

    if (action3 == false){
        choix.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez choisi Tortank. Que voulez vous faire ?";

        choixAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";
            
            maDiv.onclick = function() {

                valeurPvEnnemi1.innerHTML = parseInt(valeurPvEnnemi1.innerHTML) - 90;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 90 points de degats. C'est super efficace.";
                choix.style.visibility='hidden';
                if(valeurPvEnnemi1.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero3.innerHTML = parseInt(valeurPvHero3.innerHTML) - 15;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Tortank subit 15 points de degats !";
                    }, 2.0 * 1000); 
                action3 = true;
            }
            if (valeurPvEnnemi1.innerHTML <= 0){
                contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                //maDiv.style.visibility='hidden';
                action3 = true;
            }
            }
            
            
            maDiv2.onclick = function() {
                valeurPvEnnemi2.innerHTML = parseInt(valeurPvEnnemi2.innerHTML) - 60;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 60 points de degats. C'est super efficace.";
                choix.style.visibility='hidden';
                if(valeurPvEnnemi2.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero3.innerHTML = parseInt(valeurPvHero3.innerHTML) - 25;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Tortank subit 25 points de degats !";
                    }, 2.0 * 1000); 
                action3 = true;
            }
                if(valeurPvEnnemi2.innerHTML <= 0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                    //maDiv2.style.visibility='hidden';
                    action3 = true;
            
            }
        }

            maDiv3.onclick = function() {
                valeurPvEnnemi3.innerHTML = parseInt(valeurPvEnnemi3.innerHTML) - 10;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 10 points de degats. Ce n'est vraiment pas tres efficace.";
                choix.style.visibility='hidden';
                if (valeurPvEnnemi3.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero3.innerHTML = parseInt(valeurPvHero3.innerHTML) - 15;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Tortank subit 15 points de degats !";
                    }, 2.0 * 1000); 
                action3 = true;
            }
                if (valeurPvEnnemi3.innerHTML<=0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, t'es trop fort !";
                   // maDiv3.style.visibility='hidden';
                    action3 = true;

            if (action3 = true) {
                choix.style.visibility='hidden';
            
            }

        }

    }
        }
}
    /* Gestion Attk Spe
    if ((action1 == false) && (valeurPaHero3 != 0)){
            choix.style.visibility='visible';
            contenuBoiteDialogue.innerHTML = "Vous avez choisi Florizarre. Que voulez vous faire ?";
            choixSpecial.onclick = function() {
                contenuBoiteDialogue.innerHTML = "Vous avez choisi l'attaque speciale. Qui voulez vous attaquer ?";
                maDiv.onclick = function() {
                    valeurPvEnnemi1 = ((parseInt(valeurPvEnnemi1) - 75)*2);
                    choix.style.visibility = 'visible';
                    contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 150 points de degats ! C'est super efficace.";
                    choix.style.visibility='hidden';
                        if(valeurPvEnnemi1.innerHTML > 0){
                        setTimeout(function(){
                                valeurPvHero3.innerHTML = parseInt(valeurPvHero3.innerHTML) - 10;
                                choix.style.visibility='visible';
                                contenuBoiteDialogue.innerHTML = "Tortank subit 10 points de degats !";
                                }, 2.0 * 1000);
                        }
                        if (valeurPvEnnemi1.innerHTML <= 0){
                            contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        // maDiv.style.visibility='hidden';
                        }
                    //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats ! C'est super efficace.";
                    valeurPaHero3 -= 1;
                    action1 = true;
                }
                
                maDiv2.onclick = function() {               
                    valeurPvEnnemi2.innerHTML = ((parseInt(valeurPvEnnemi2.innerHTML) - 25)*2);
                    choix.style.visibility='visible';
                    contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 50 points de degats. Ce n'est pas tres efficace.";
                    choix.style.visibility='hidden';
                        if (valeurPvEnnemi2.innerHTML > 0){
                            setTimeout(function(){
                                valeurPvHero3.innerHTML = parseInt(valeurPvHero3.innerHTML) - 10;
                                choix.style.visibility='visible';
                                contenuBoiteDialogue.innerHTML = "Tortank subit 10 points de degats !";
                            }, 2.0 * 1000);
                        }  
                        if (valeurPvEnnemi2.innerHTML <= 0){
                            contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        // maDiv2.style.visibility='hidden';
                        }
                    //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 25 points de degats. Ce n'est pas tres efficace.";
                    //contenuBoiteDialogue.innerHTML = "Tortank subit 10 points de degats !";
                    valeurPaHero3 -= 1;
                    action1 = true;
                }

                maDiv3.onclick = function() {
                    valeurPvEnnemi3.innerHTML = ((parseInt(valeurPvEnnemi3.innerHTML) - 50)*2);
                    choix.style.visibility='visible';
                    contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 100 points de degats.";
                    choix.style.visibility='hidden';
                        if (valeurPvEnnemi3.innerHTML > 0){
                            setTimeout(function(){
                                valeurPvHero3.innerHTML = parseInt(valeurPvHero3.innerHTML) - 10;
                                choix.style.visibility='visible';
                                contenuBoiteDialogue.innerHTML = "Tortank subit 10 points de degats !";
                            }, 2.0 * 1000);      
                        }
                        if (valeurPvEnnemi3.innerHTML <= 0){
                            contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                            //maDiv3.style.visibility='hidden';  
                        }
                    valeurPaHero3 -= 1;
                    action1 = true;
                }
                
                    if (action1 = true) {
                        choix.style.visibility='hidden';
                
            }
            }
    

        }
        */
}

// Choix quatrieme hero en cliquant sur l'image (bug sur le deuxieme tour ?)
maDiv7.onclick = function() {

    if (action4 == false){

        choix.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez choisi une jolie evolution d'Evoli. Que voulez vous faire ?";

        choixAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";
            
            maDiv.onclick = function() {
                valeurPvEnnemi1.innerHTML = parseInt(valeurPvEnnemi1.innerHTML) - 75;
                choix.style.visibility = 'visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats. C'est super efficace.";
                choix.style.visibility = 'hidden';
                if (valeurPvEnnemi1.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 15;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Le joli Evoli subit 15 points de degats !";
                    }, 2.0 * 1000);
                }
                action4 = true;
                if (valeurPvEnnemi1.innerHTML<= 0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                   // maDiv.style.visibility='hidden';
                    action4 = true;
            }
        }
            
            maDiv2.onclick = function() {
                valeurPvEnnemi2.innerHTML = parseInt(valeurPvEnnemi2.innerHTML) - 80;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 80 points de degats. C'est super efficace.";
                choix.style.visibility='hidden';
                if (valeurPvEnnemi2.innerHTML>0){
                    setTimeout(function(){
                        valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 30;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Le joli Evoli subit 15 points de degats ! Attention !";
                    }, 2.0 * 1000); 
                    action4 = true;
                }
                
                if (valeurPvEnnemi2.innerHTML<=0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                    //maDiv2.style.visibility='hidden';
                    action4 = true;
            }
        }

            maDiv3.onclick = function() {
                valeurPvEnnemi3.innerHTML = parseInt(valeurPvEnnemi3.innerHTML) - 65;
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 65 points de degats. C'est super efficace.";
                choix.style.visibility='hidden';
                if (valeurPvEnnemi3.innerHTML > 0){
                    setTimeout(function(){
                        valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 15;
                        choix.style.visibility='visible';
                        contenuBoiteDialogue.innerHTML = "Le joli Evoli subit 15 points de degats !";
                    }, 2.0 * 1000);
                    action4 = true; 
                }
                if (valeurPvEnnemi3.innerHTML<=0){
                    contenuBoiteDialogue.innerHTML = "Le Pokemon est battu, un de moins !";
                    //maDiv3.style.visibility='hidden';
                    action4 = true;
            }
        }
// Tentative pour retourner au début du deuxieme tour (fonctionne)
            if (action4 = true) {
                choix.style.visibility='hidden';
                action1 = false;
                action2 = false;
                action3 = false;
                action4 = false;
            }
                
        }
    }
    /* Gestion Attk Spe
 if ((action4 == false) && (valeurPaHero4 != 0)){

    
        choix.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez choisi  Givrali. Que voulez vous faire ?";



        choixSpecial.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi l'attaque speciale. Qui voulez vous attaquer ?";

            
            maDiv.onclick = function() {
                valeurPvEnnemi1 = ((parseInt(valeurPvEnnemi1) - 75)*2);
                choix.style.visibility = 'visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 150 points de degats ! C'est super efficace.";
                choix.style.visibility='hidden';
                    if(valeurPvEnnemi1.innerHTML > 0){
                    setTimeout(function(){
                            valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Givrali le nouvel Evoli subit 10 points de degats !";
                            }, 2.0 * 1000);
                    }
                    if (valeurPvEnnemi1.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                       // maDiv.style.visibility='hidden';
                    }
                //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 75 points de degats ! C'est super efficace.";
                valeurPaHero4 -= 1;
                action4 = true;
            }
            
            maDiv2.onclick = function() {               

                valeurPvEnnemi2.innerHTML = ((parseInt(valeurPvEnnemi2.innerHTML) - 25)*2);
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 50 points de degats. Ce n'est pas tres efficace.";
                choix.style.visibility='hidden';
                    if (valeurPvEnnemi2.innerHTML > 0){
                        setTimeout(function(){
                            valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Givrali le nouvel Evoli subit 10 points de degats !";
                        }, 2.0 * 1000);
                    }  
                    if (valeurPvEnnemi2.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                       // maDiv2.style.visibility='hidden';
                    }
                //contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 25 points de degats. Ce n'est pas tres efficace.";
                //contenuBoiteDialogue.innerHTML = "Givrali le nouvel Evoli subit 10 points de degats !";
               valeurPaHero4 -= 1;
                action4 = true;
            }

            maDiv3.onclick = function() {
                
                valeurPvEnnemi3.innerHTML = ((parseInt(valeurPvEnnemi3.innerHTML) - 50)*2);
                choix.style.visibility='visible';
                contenuBoiteDialogue.innerHTML = "Le pokemon sauvage subit 100 points de degats.";
                choix.style.visibility='hidden';
                    if (valeurPvEnnemi3.innerHTML > 0){
                        setTimeout(function(){
                            valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 10;
                            choix.style.visibility='visible';
                            contenuBoiteDialogue.innerHTML = "Givrali le nouvel Evoli subit 10 points de degats !";
                        }, 2.0 * 1000);      
                    }
                    if (valeurPvEnnemi3.innerHTML <= 0){
                        contenuBoiteDialogue.innerHTML = "Le Pokemon est battu ! Hourra !";
                        //maDiv3.style.visibility='hidden';  
                    }
                valeurPaHero4 -= 1;
                action4 = true;
            }
            
                if (action1 = true) {
                    choix.style.visibility='hidden';
            
        }
        }
  

    }
    */
}


/*



// Gestion Riposte ne fonctionnant pas. J'ai tente d'utiliser une valeur true a chaque fin de tour pour que le programme considere que chaque personnage a fini d'attaquer et qu'il passe a un tour de riposte complet, mais il n'a pas l'air de comprendre que les actions sont true.
// Du coup, passage du jeu en riposte automatique.





if ((action2 == true) && (action3 == true) && (action4 == true)) {
    contenuBoiteDialogue.innerHTML = "C'est au tour des ennemis";
    finirLeTour.style.visibility='visible';

    choixFinirLeTour.onclick = function(){

        // Ennemi 1
        valeurPvHero1.innerHTML = parseInt(valeurPvHero1.innerHTML) - 10;
        // Ennemi 2
        valeurPvHero2.innerHTML = parseInt(valeurPvHero2.innerHTML) - 10;
        // Ennemi 3
        valeurPvHero4.innerHTML = parseInt(valeurPvHero4.innerHTML) - 10;
        contenuBoiteDialogue.innerHTML = "Les monstres se sont vengés !";

        // Retour boucle de tour
        var action1 = false;
        var action2 = false;
        var action3 = false;
        var action4 = false;

        finirLeTour.style.visibility='hidden';

    }

}

*/ 



// Gestion affichage des morts
if (valeurPvHero1.innerHTML <= 0) {
    valeurPvHero1.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Le Heros 1 as ete tue.";
}
if (valeurPvHero2.innerHTML <= 0) {
    valeurPvHero2.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Le Heros 2 as ete tue.";
}
if (valeurPvHero3.innerHTML <= 0) {
    valeurPvHero3.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Le Heros 3 as ete tue.";
}
if (valeurPvHero4.innerHTML <= 0) {
    valeurPvHero4.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Le Heros 4 as ete tue.";
}



// Affichage vie Pokemon ennemi 1
document.getElementById("maDiv").onmouseover = function()
{mouseOver1()};
document.getElementById("maDiv").onmouseout = function()
{mouseOut1()};

function mouseOver1() {
    document.getElementById("case1").style.visibility='visible';
}

function mouseOut1() {
    document.getElementById("case1").style.visibility='hidden';
}

// Affichage vie Pokemon ennemi 2
document.getElementById("maDiv2").onmouseover = function()
{mouseOver2()};
document.getElementById("maDiv2").onmouseout = function()
{mouseOut2()};

function mouseOver2() {
    document.getElementById("case2").style.visibility='visible';
}

function mouseOut2() {
    document.getElementById("case2").style.visibility='hidden';
}

// Affichage vie Pokemon ennemi 3
document.getElementById("maDiv3").onmouseover = function()
{mouseOver3()};
document.getElementById("maDiv3").onmouseout = function()
{mouseOut3()};

function mouseOver3() {
    document.getElementById("case3").style.visibility='visible';
}

function mouseOut3() {
    document.getElementById("case3").style.visibility='hidden';
}
