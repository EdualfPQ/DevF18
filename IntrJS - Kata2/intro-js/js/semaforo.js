var initialColor;
var intervalTime;

function repeatFunction(){
    intervalTime = setInterval(changeColor, 3000);
}

function changeColor(){
    if(initialColor == "Green"){
        initialColor = "Yellow"
    }else if(initialColor == "Yellow"){
        initialColor = "Red"
    }else{
        initialColor = "Green"
    }
    console.log(initialColor);
}

repeatFunction();