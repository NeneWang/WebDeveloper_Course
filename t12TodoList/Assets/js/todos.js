$("ul").on("click","li",function(){
	//alert("Clicked");

	//If li is gray we are going to malke it gray
console.log($(this).css("color"));

 
$(this).toggleClass("completed");
	
});

$("ul").on("click","span",function(){
	//alert("clicked on a span!");
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
})


$("input[type='text']").keypress(function(event){
if(event.which === 13){
//console.log("You HIT Enger");
 var todoText = $(this).val();
//Create a new li and add to ul
$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
$(this).val("");

}
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});