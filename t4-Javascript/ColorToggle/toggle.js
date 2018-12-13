var button = document.querySelector("button");

// button.addEventListener("click",function(){
// 	//alert("clicked");
// 	//document.body.style.background="purple";
// 	if(document.body.style.background!="purple"){
// 		document.body.style.background="purple";
// 	}else{
// 		document.body.style.background="white";
// 	}
// });

button.addEventListener("click",function(){
	document.body.classList.toggle("purple");
});