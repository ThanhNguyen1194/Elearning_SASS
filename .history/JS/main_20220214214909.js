function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;

    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    }else{
        return str;
    }
}