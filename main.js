let thanksCard = document.querySelector(`.thanksCard`);
let ratingCard = document.querySelector(`.ratingCard`);
let rating = document.querySelector(`.rating`);
let submitButton = document.querySelector(`button`);
let container = document.querySelector(`.container`);
let theRate = null;

thanksCard.remove();

for (i=1; i<=5 ; i++){
    let rate = document.createElement(`div`);
    rate.className = `rate`;
    rate.innerHTML = `${i}`;
    rate.onclick = function(){
        rating.childNodes.forEach(function(el){
            el.className = `rate`;
        })
        this.classList.add(`active`);
        theRate = this.innerHTML;
        
    }
    rating.appendChild(rate);
}

submitButton.onclick = function(){
    if (theRate != null){
        ratingCard.remove();
        container.appendChild(thanksCard);
        thanksCard.style.display = `flex`;
        let rt = document.querySelector(`span`);
        rt.innerHTML = `${theRate}`;

    }
}








