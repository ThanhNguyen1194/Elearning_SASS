

// truncateCardTitle
window.addEventListener("load",function(){
    truncateCardTitle();
});

function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var textNew = truncateString(text,50);
        cardList[i].innerHTML = textNew;
    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    }else{
        return str;
    }
}
// sidebar Mini

// var toggleBtn = 