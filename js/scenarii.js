import { resetContent, scrollDisplay } from "./utils.js";

export class Scenarii{
  constructor(){
    resetContent()
    for (let i = 0; i < 40; i++) {
      let card = document.createElement("div");
      card.classList.add('card');
      let title = document.createElement("h2");
      title.textContent = "Card " + i;
      let text = document.createElement("p");
      text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita eum suscipit eaque, laborum dolores maiores provident reprehenderit? Unde accusantium a eveniet quos possimus laudantium corporis minus veniam sapiente ipsa !"
      card.appendChild(title);
      card.appendChild(text);
      document.getElementById('content').appendChild(card)
    }
    scrollDisplay()
  }

}