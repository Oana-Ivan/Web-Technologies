window.onload = function() {
	var text = document.createElement("p");
	text.innerHTML = "te roooooooooooooooog";
	var main = document.body.getElementsByTagName("main")[0];
	main.insertBefore(text,main.firstChild);
}