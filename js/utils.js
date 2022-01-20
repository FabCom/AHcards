export function resetContent(){
  let content = document.getElementById("content");
  content.innerHTML = ""
}

export function scrollDisplay(){
  const observer = new IntersectionObserver( observables => {
    console.log(observables);
    for(let observable of observables){
      if (observable.intersectionRatio > 0.5){
        observable.target.getElementsByClassName('card-img')[0].src = observable.target.getElementsByClassName('card-img')[0].src_off;
        observable.target.classList.remove("hidden");
      } else {
        observable.target.classList.add("hidden");
      }
    }
  },{
    threshold:[0.5]
  })
  
  const cards = document.getElementsByClassName("card");
  // console.log(cards)
  for(let card of cards) {
    card.classList.add("hidden");
    observer.observe(card)
  }
}

export function createDivCard(id, img, title, text, fluff, action){
    let div = document.createElement("div");
    div.classList.add('card');
    div.id = id;

    let div_title = document.createElement('div');
    div_title.classList.add('card-title');
    let div_title_content = document.createElement('h2');
    div_title_content.innerHTML = title;
    div_title.appendChild(div_title_content);

    let div_body = document.createElement("div");
    div_body.classList.add('card-body')

    let div_left_side = document.createElement('div');
    div_left_side.classList.add('left-side');
    let div_img = new Image();
    div_img.src_off = img;
    div_img.classList.add('card-img');
    div_left_side.appendChild(div_img);

    div_body.appendChild(div_left_side)


    let div_right_side = document.createElement('div');
    div_right_side.classList.add('right-side');
    let right_side_text = document.createElement('p');
    right_side_text.innerHTML = text;
    div_right_side.appendChild(right_side_text);
    div_body.appendChild(div_right_side);

    let div_action = document.createElement('div');
    div_action.classList.add('card-action')
    let btn_action = document.createElement('button');
    btn_action.addEventListener("click", function(){openCardModal(id)});
    btn_action.textContent = "voir"
    div_action.appendChild(btn_action);

    div.appendChild(div_title);
    div.appendChild(div_body);
    div.appendChild(div_action);

    document.getElementById('content').appendChild(div);
}

function openCardModal(id_card){
  let card = document.getElementById(id_card);
  let copy_card = card.cloneNode(true);
  let modal = document.createElement('div');
  modal.classList.add('modal');
  let close = document.createElement('span');
  close.classList.add('close');
  close.addEventListener("click", function(){document.getElementsByClassName('modal')[0].remove()})
  close.innerHTML = "&times;"
  modal.appendChild(close);
  modal.appendChild(copy_card);
  let content = document.getElementById('content')
  content.appendChild(modal)

}
