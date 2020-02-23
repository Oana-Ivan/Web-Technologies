window.onload = function() {
	var continut = document.getElementById("continut");
	var zborImage = document.getElementById("zbor");
	
	var btn = document.createElement("button");
	btn.innerHTML = "Zboara!";
	continut.appendChild(btn);
	btn.onclick = function() {
		var pos = -200;
		var zbor = setInterval( f, 5);
		function f() {
			if (pos == 1000) {
				clearInterval(zbor);
			} else {
				pos++;
				zborImage.style.marginLeft = pos + "px";
			}
		} 		
	}
}