// for reference -> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#syntax

var length = document.querySelectorAll(".drum").length;


for( i=0; i<length; i++ ){

document.querySelectorAll("button")[i].addEventListener("click" ,  function (){ 

	// audio 
	// var crash = new Audio("sounds/crash.mp3");
	// crash.play();

	var innerHtml = this.innerHTML;
	sound(innerHtml);
	activate(innerHtml);

});
}

document.addEventListener("keydown",function(event){

	var key = event.key;
	sound(key);
	activate(key);	


});


function sound(key){

// for switch case reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

		switch(key) {

	  	case 'w':
	    var crash = new Audio("sounds/crash.mp3");
		crash.play();
	    break;

		case 'a':
	    var kickBass = new Audio("sounds/kick-bass.mp3");
		kickBass.play();
	    break;

	    case 's':
	   	var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
	    break;

	    case 'd':
	    var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
	    break;

	    case 'j':
	    var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
	    break;

	    case 'k':
	    var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
	    break;

	    case 'l':
	    var snare = new Audio("sounds/snare.mp3");
		snare.play();
	    break;

	  	default:
	  	console.log(key + " " + " not configuired key , pressed !")

}

}

function activate(key){

	
var selectedClass = document.querySelector("." + key).classList;
selectedClass.add("pressed");


// https://www.w3schools.com/jsref/met_win_settimeout.asp

setTimeout(
	function(){

	selectedClass.remove("pressed");

	}
,100)


	
}




