import { resetContent, scrollDisplay, createDivCard } from "./utils.js";

const url_base = 'https://fr.arkhamdb.com/'
const url_player_cards = 'api/public/cards/'

export class Investigators{
  constructor(){
    resetContent();
    this.url = url_base + url_player_cards;
    fetch((url_base + url_player_cards))
    .then((response) => { return response.json(); })
    .then((response) => { this.createCards("Toute la collection",response); })
    .catch((error) => { console.error(error); });
    this.createSideMenu()
  }

  createCards(title, cards){
    console.log(cards)
    resetContent();
    let content = document.getElementById('content');
    let div_title = document.createElement('h1');
    div_title.textContent = title;
    div_title.style.width = "100%";
    content.appendChild(div_title)
    for (let card of cards){
      if (card.imagesrc){
        createDivCard(card.code, (url_base + card.imagesrc), card.name,card.text, card.flavor)
      }
    }
    scrollDisplay()
  }

  createSideMenu(){
    let menu = [{"text":"Investigateurs","search":"investigator"}]
    for (let item of menu){
      let sidebar = document.getElementById('sidebar');
      let button = document.createElement('button');
      button.textContent = item.text;
      sidebar.appendChild(button)
    }
  }
}