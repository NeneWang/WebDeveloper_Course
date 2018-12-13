var colors = generateRandomColors(6);
var maxBlocks=6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var gameFinished=false;


var resetButton = document.querySelector("#resetButton");


var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



var game ={}

game.init=function(){
	init();
}

game.init();


easyBtn.addEventListener("click", function(){
	
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	maxBlocks=3;

	resetGame();

});


hardBtn.addEventListener("click", function(){


	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	maxBlocks=6;
	resetGame();
});

resetButton.addEventListener("click", function(){

	resetGame();
});

function resetGame(){
	 gameFinished=false;
	colors=generateRandomColors(maxBlocks);
	messageDisplay.textContent="";
pickedColor=pickColor();

colorDisplay.textContent=pickedColor;
for(var i =0;i<squares.length;i++){
	if(!colors[i]){
			squares[i].style.display="none";
		}else{
			squares[i].style.display="block";
		}
	squares[i].style.backgroundColor=colors[i];

}
h1.style.backgroundColor="steelblue";
resetButton.textContent="New Colors"
}


function init(){

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];


	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(gameFinished){
			resetGame();t
		}
		if(clickedColor === pickedColor) {
			messageDisplay.textContent="correct";
			resetButton.textContent="PLAY AGAIN ?"
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			gameFinished=true;

		} else {
			this.style.backgroundColor="#232323";
			messageDisplay.textContent = "Try Again";

		}

	});
}
}



function changeColors(color){
	//loo thought all sqares to change colors

	for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	//pick random color
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];

}


function generateRandomColors(num){
//Make An array
//Add num random colors to array
//return array

var arr=[]
for(var i = 0; i<num;i++){
	//Get random color and push into arr
	arr.push(randomColor());

}

return arr;


}

function randomColor(){
//Pick red form 0 to 255 and others xd.
var red=Math.floor(Math.random()*256)
var green=Math.floor(Math.random()*256)
var blue=Math.floor(Math.random()*256)

var rgbColor="rgb("+red+", "+green+", "+blue+")";
return rgbColor;

	}