import { Scenarii } from "./js/scenarii.js"
import { PlayerCards } from "./js/player_cards.js"
import { Presentation } from "./js/presentation.js"

class App{
  constructor(){
    this.initMenu()
    new Presentation();
  }

  initMenu(){
    let menu_content = [{"text":"PRÉSENTATION","class":"new Presentation()"},{"text":"INVESTIGATEURS", "class":"new PlayerCards()"},{"text":"SCÉNARII","class":"new Scenarii()"}]
    console.log(menu_content)
    let div_menu = document.getElementById('menu')
    for (let item of menu_content ){
      let div = document.createElement('button');
      div.classList.add('btn');
      div.textContent = item.text;
      div.addEventListener("click", function(){eval(`${item.class}`)});
      div_menu.appendChild(div)
    }
  }
}

let app = new App() 