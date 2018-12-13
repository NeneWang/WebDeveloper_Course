var colors = [


"rgb(255,0,0)",
"rgb(255,255,0)",
"rgb(0,0,255)",
"rgb(0,255,255)",
"rgb(0,0,255)",
"rgb(255,0,255)"


]

var squares = document.querySelectorAll(".square");

var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent=pickedColor;

for(var i =0;i<squares.length;i++){
//Add inicial color to squares

	squares[i].style.backgroundColor = colors[i];


//Add click listener to sqares
squares[i].addEventListener("click",function(){
	//grab color of clicked square
	//alert("clicked");
	var clickedColor = this.style.backgroundColor;
//colorDisplay.textContent=clickedColor;
	//Compare color to picked color
	if(clickedColor === pickedColor){
		alert("Correct");
	}else{
		alert(pickedColor);
	}


});


}