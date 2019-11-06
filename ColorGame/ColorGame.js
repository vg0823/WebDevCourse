var colors = generateRandomColors(6);
console.log(colors);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");

for( var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        console.log(pickedColor);
        if( clickedColor === pickedColor ){
            //messageDisplay.textContent = "Correct";
            changeColors( pickedColor );
        } else{
            //messageDisplay.textContent = "Wrong choice! Try again.";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors( pickedColor ){
    for ( var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor( ){
    var rannum = Math.floor(Math.random()*6 + 1);
    return colors[rannum];
}

function generateRandomColors(num){
    arr = [];
    for( var i=0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*255 + 1);
    var g = Math.floor(Math.random()*255 + 1);
    var b = Math.floor(Math.random()*255 + 1);
    return "rgb(" + r + ", " + g + ", "+ b +")";
}

