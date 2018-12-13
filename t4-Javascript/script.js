var todos=["BuyNewTurtle"];

var input=prompt("What would you like to do?");



window.setTimeout(function() {
	ask();
}, 500);

function ask(){
	while(input!=="quit"){
	if(input ==="list"){
	console.log(todos);
}else if(input==="new"){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
}
input=prompt("What would you like to do?");
}
console.log("OK, you quitted the app.");

}
var movies=[
{name:"In Bruges",watched:true,rating:5},
{name:"Londres",watched:false,rating:4.5}
]

movies.forEach(function(movie){
	var message="";
	if(movie.watched){
		message+="yo have watched ";
	}
	else{
		message+="yo havent seen ";
	}
	message+=movie.name;
	message+=" of rating : "+movie.rating;
	console.log(message);
});