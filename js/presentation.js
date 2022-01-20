import { resetContent, resetSidebar, scrollDisplay } from "./utils.js";

export class Presentation{
  constructor(){
    resetContent();
    resetSidebar();
    this.createSideMenu()
    this.general()
  }

  createSideMenu(){
    
  }

  general(){
    let title = document.createElement('h1');
    title.textContent = "Horreur à Arkham";
    let div = document.createElement('div');
    div.classList.add('presentation-card');
    div.innerHTML = 
    "<p><i>Extrait de l'article <a href='https://fr.wikipedia.org/wiki/Horreur_%C3%A0_Arkham_:_Le_Jeu_de_cartes'>wikipedia</a></i></p><p>Horreur à Arkham : Le Jeu de Cartes, est un jeu de cartes évolutif dans le monde de Lovecraft et du mythe de Cthulhu où les joueurs incarnent des investigateurs chargés de résoudre des mystères en essayant de ne pas tomber dans la folie.</p><p>C'est un jeu coopératif où les joueurs incarnent chacun un personnage et luttent ensemble contre un scénario. Ce scénario comporte des lieux, des monstres, des événements. Les scénarios peuvent s'enchainer pour former une campagne.</p><p>Le scénario est constitué par un ensemble de cartes qui seront dévoilées au fur et à mesure du jeu.</p><p>Les personnages ont chacun un ensemble de cartes (deck) qui constituent leurs compétences et équipements. Chaque personnage peut améliorer son deck au fur et à mesure d'un scénario.</p><p>Ce jeu est édité par <a href='https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/'>Fantasy Flight Games</a> </p>";

    let div_mentions = document.createElement('div');

    div_mentions.innerHTML = "<p>Les informations présentées sur ce site concernent le jeu de cartes Horreur à Arkham. Les textes et images, sont la création et la propriété de Fantasy Flight Games.</p><p>Ce site utilise l'API communautaire librement accessible <a href='https://fr.arkhamdb.com/api/'>https://fr.arkhamdb.com/api/</a> </p>"
    div_mentions.classList.add('presentation-card');
    let content = document.getElementById('content');
    content.appendChild(title);
    content.appendChild(div);
    content.appendChild(div_mentions);
  }

}