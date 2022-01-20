import { resetContent, scrollDisplay, createDivCard, resetSidebar } from "./utils.js";

const url_base = 'https://fr.arkhamdb.com/'
const url_player_cards = 'api/public/cards/'

export class PlayerCards{
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
    div_title.style.textAlign = "center";
    content.appendChild(div_title)
    for (let card of cards){
      if (card.imagesrc){
        createDivCard(card.code, (url_base + card.imagesrc), card.name,card.text, card.flavor)
      }
    }
    scrollDisplay()
  }

  createSideMenu(){
    resetSidebar();
    let root = this;
    let sidebar = document.getElementById('sidebar');
    let menu = [
      {"text":"Investigateurs","key_search":"type_code", "key_value":"investigator"},
      {"text":"Soutiens","key_search":"type_code", "key_value":"asset"},
      {"text":"Événements","key_search":"type_code", "key_value":"event"},
      {"text":"Compétences","key_search":"type_code", "key_value":"skill"},
      {"text":"Traîtrises","key_search":"type_code", "key_value":"treachery"},
      
    ]
    for (let item of menu){
      let button = document.createElement('button');
      button.textContent = item.text;
      button.addEventListener("click", function(){root.searchCards(item.text, item.key_search, item.key_value)})
      sidebar.appendChild(button)
    }
    let div_search = document.createElement('div');
    div_search.classList.add('card-search');
    let text = document.createElement('p');
    text.textContent = "Recherche par nom : ";
    div_search.appendChild(text);
    let input = document.createElement("input");
    input.id = 'searchInput';
    div_search.appendChild(input);
    let btn = document.createElement('button');
    btn.textContent = "ok";
    btn.addEventListener("click", function(){root.searchCards(("Résultats pour " + document.getElementById('searchInput').value), "name", document.getElementById('searchInput').value)})
    div_search.appendChild(btn);
    sidebar.appendChild(div_search)
  }

  searchCards(text, key, value){
    let cards = [];
    fetch((url_base + url_player_cards))
    .then((response) => { return response.json(); })
    .then((response) => { 
      for (let item of response){
        if (eval(`item.${key}`).includes(value)){
          cards.push(item)
        }
      }
      this.createCards(text,cards); 
    })
    .catch((error) => { console.error(error); });
  }
}