var x = 0;
var y = 0;
window.onload = function() {
	var main = document.getElementsByTagName("main")[0];
	var div = document.createElement("div");
	var p = document.createElement("p");
	p.innerHTML = "Intrați acum în contul dumneavoastră!"
	var schText = setInterval( function(){
		if (x == 0) { p.innerHTML = "Utilizatorii înregistrați beneficiază de reduceri!"; x = 1; }
		else { p.innerHTML = "Intrați acum în contul dumneavoastră!"; x = 0; }
	}, 3000);
	div.appendChild(p);
	
	var btn = document.createElement("button");
	btn.innerHTML = "Oprește text";
	div.appendChild(btn);
	btn.onclick = function() {
		clearInterval(schText);
	}
	var h2 = document.getElementsByTagName("main")[0];
	main.insertBefore(div, main.firstChild);
	
	var pTimeOut = document.createElement("p");
	pTimeOut.innerHTML = "Avertisment! START va porni un setTimeOut fara sens. Apasa pe STOP ca sa il opresti.";
	div.appendChild(pTimeOut);
	
	var alertTimeOut;
	var btnStart = document.createElement("button");
	btnStart.innerHTML = "START";
	div.appendChild(btnStart);
	btnStart.onclick = function() {
		alertTimeOut = setTimeout(function() {
		alert("TimeOut fara sens, te-am avertizat");
		}, 2000);
	}
	
	var btnStop = document.createElement("button");
	btnStop.innerHTML = "STOP"; 
	div.appendChild(btnStop);
	btnStop.onclick = function() {
		clearTimeout(alertTimeOut);
	}
}