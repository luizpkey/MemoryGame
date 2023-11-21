const emojis = [
   "🍇","🍇","🥑","🥑","🍎","🍎","🍊","🍊","🍍","🍍","🍌","🍌","🍓","🍓","🍐","🍐"
];

let openCards=[];

let shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

for(let i=0; i<shuffledEmojis.length; i++){
   const box = document.createElement("div");
   box.className = "item";
   box.innerHTML = shuffledEmojis[i];
   box.onclick=handleClick;
   document.querySelector(".game").appendChild(box);
}

function handleClick(){
   if(openCards.length<2 && !this.classList.contains("boxOpen")) {
      this.classList.add("boxOpen");
      openCards.push(this);
   }

   if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
   }
}

function checkMatch(){
   const firstCard = openCards[0];
   const secondCard = openCards[1];
   if (!secondCard){
      return
   }

   if (firstCard.innerHTML === secondCard.innerHTML) {
      firstCard.classList.add("match");
      secondCard.classList.add("match");
   } else {
      firstCard.classList.remove("boxOpen");
      secondCard.classList.remove("boxOpen");
   }
   openCards = [];
   if (document.querySelectorAll(".match").length == emojis.length) {
      alert("Parabéns, voce venceu!");
   }
}
