if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"P|",
					"P |",
					"P U|",
					"P U |",
					"P U S|",
					"P U S |",
					"P U S H|",
					"P U S H |",
					"P U S H Y|",
					"P U S H Y |",
					"P U S H Y Y|",
					"P U S H Y Y |",
					"P U S H Y Y Y|",
					"P U S H Y Y Y |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}