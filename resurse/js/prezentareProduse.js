window.onload = function() {
	var sect = document.createElement("section");
	var main = document.body.getElementsByTagName("main")[0];
	main.insertBefore(sect, main.firstChild);
	sect.style.padding = "5%";
	
	var h = document.createElement("h3");
	h.innerHTML = "Filtre produse";
	sect.appendChild(h);
	
	var pFiltru = document.createElement("p");
	pFiltru.innerHTML = "Selectați tipul de ambalaj";
	sect.appendChild(pFiltru);
	
	var inputRadio1 = document.createElement("input");
	inputRadio1.type = "radio"; 
	inputRadio1.name = "radio";
	inputRadio1.checked = true;
	sect.appendChild(inputRadio1);
	// inputRadio.style.display = "block";
	
	var txt1 = document.createTextNode("hartie");
	sect.appendChild(txt1);
	
	var inputRadio2 = document.createElement("input");
	inputRadio2.type = "radio"; 
	inputRadio2.name = "radio";
	sect.appendChild(inputRadio2);
	// inputRadio.style.display = "block";
	
	var txt2 = document.createTextNode("plasa");
	sect.appendChild(txt2);
	
	var inputRadio3 = document.createElement("input");
	inputRadio3.type = "radio"; 
	inputRadio3.name = "radio";
	sect.appendChild(inputRadio3);
	// inputRadio.style.display = "block";
	
	var txt3 = document.createTextNode("celofan");
	sect.appendChild(txt3);
	
	var btnFiltru = document.createElement("button");
	btnFiltru.innerHTML = "Filtreaza";
	sect.appendChild(btnFiltru);
	btnFiltru.style.display = "block";
	
	btnFiltru.onclick = function() {
		var continut = document.getElementById("continut");
		if (inputRadio1.checked == true) {
			var aranjamente = document.querySelectorAll(".cls1");
			for (var i = 0; i < aranjamente.length; i++) {
				var ambalaj = aranjamente[i].querySelectorAll(".ambalaj")[0];
				if (ambalaj.innerHTML != txt1.nodeValue) {
					//aranjamente[i].style.display = "none";
					continut.removeChild(aranjamente[i]);
				}
			}
		}
		else if (inputRadio2.checked == true) {
			var aranjamente = document.querySelectorAll(".cls1");
			for (var i = 0; i < aranjamente.length; i++) {
				var ambalaj = aranjamente[i].querySelectorAll(".ambalaj")[0];
				if (ambalaj.innerHTML != txt2.nodeValue) {
					aranjamente[i].style.display = "none";
				}
			}
			
		} else {
			var aranjamente = document.querySelectorAll(".cls1");
			for (var i = 0; i < aranjamente.length; i++) {
				var ambalaj = aranjamente[i].querySelectorAll(".ambalaj")[0];
				if (ambalaj.innerHTML != txt3.nodeValue) {
					aranjamente[i].style.display = "none";
				}
			}
			
		}
		alert("Se afiseaza doar produse cu ambalajul selectat. Pentru a alege un alt ambalaj, reincarcati pagina.");
	}
	
	/*var inputText = document.createElement("input");
	inputText.type = "text"; 
	sect.appendChild(inputText);
	inputText.style.display = "block";*/
	
	var pRange1 = document.createElement("p");
	pRange1.innerHTML = "Selectați nivelul maxim al pretului";
	sect.appendChild(pRange1);
	
	var pRange2 = document.createElement("p");
	var inputRange = document.createElement("input");
	inputRange.type = "range"; 
	inputRange.min = "20";
	inputRange.max = "70";
	inputRange.name = "nume";
	sect.appendChild(inputRange);
	inputRange.style.display = "block";
	pRange2.innerHTML = inputRange.value;
	sect.appendChild(pRange2);
	
	inputRange.onchange = function() {
			pRange2.innerHTML = inputRange.value;
	}
	
	var btnFiltruPret = document.createElement("button");
	btnFiltruPret.innerHTML = "Filtreaza dupa pret";
	sect.appendChild(btnFiltruPret);
	btnFiltruPret.style.display = "block";
	
	btnFiltruPret.onclick = function() {
		var continut = document.getElementById("continut");
		if (inputRadio1.checked == true) {
			var aranjamente = document.querySelectorAll(".cls1");
			for (var i = 0; i < aranjamente.length; i++) {
				var pret = aranjamente[i].querySelectorAll(".pret")[0];
				if (pret.innerHTML > inputRange.value) {
					//aranjamente[i].style.display = "none";
					continut.removeChild(aranjamente[i]);
				}
			}
		}
	}
	
	var txtarea = document.createElement("textarea");
	sect.appendChild(txtarea);
	txtarea.style.display = "block";
	var btnTxtArea = document.createElement("button");
	btnTxtArea.innerHTML = "Ce ai scris mai sus?";
	sect.appendChild(btnTxtArea);
	btnTxtArea.style.display = "block";
	btnTxtArea.onclick = function() {
		alert(txtarea.value);
	}
	
	var txtSelect = document.createTextNode("Numărul de flori: ");
	sect.appendChild(txtSelect);
	var select1 = document.createElement("select");
	var opt1 = document.createElement("option");
	opt1.value = "11";
	opt1.innerHTML = "11";
	select1.appendChild(opt1);
	var opt2 = document.createElement("option");
	opt2.value = "15";
	opt2.innerHTML = "15";
	select1.appendChild(opt2);
	var opt3 = document.createElement("option");
	opt3.value = "29";
	opt3.innerHTML = "29";
	select1.appendChild(opt3);
	sect.appendChild(select1);
	
	var btnSelect = document.createElement("button");
	btnSelect.innerHTML = "Filtreaza dupa numărul de flori";
	sect.appendChild(btnSelect);
	btnSelect.style.display = "block";
	btnSelect.onclick = function() {
		// console.log(select1.value);
		var continut = document.getElementById("continut");
		if (inputRadio1.checked == true) {
			var aranjamente = document.querySelectorAll(".cls1");
			for (var i = 0; i < aranjamente.length; i++) {
				var nrFlori = aranjamente[i].querySelectorAll(".nrFlori")[0];
				if (nrFlori.innerHTML != select1.value) {
					continut.removeChild(aranjamente[i]);
				}
			}
		}
	}
	
	var body = document.getElementsByTagName("body")[0];
	/*body.onkeydown = function(e) {
		if (e.ctrlKey && e.keyCode == 105) 
			body.style.backgroundColor = "red"; 
	}*/
	var negru = 0;
	body.onkeypress = function() {
		if (!negru) {body.style.backgroundColor = "black"; negru = 1;}
		else {body.style.backgroundColor = "white"; negru = 0;}
	}
	
	var butoane = document.getElementsByTagName("button");
	for (var i = 0; i < butoane.length; i++) {
		butoane[i].style.backgroundColor = "#A66060";
		butoane[i].style.color = "white";
	}
	
	
	var inputCheck1 = document.createElement("input");
	inputCheck1.type = "checkbox"; 
	inputCheck1.name = "chk1";
	inputCheck1.value = "1";
	inputCheck1.checked = false;
	sect.appendChild(inputCheck1);
	var txtCheck = document.createTextNode("Aranjamente cu vaza inclusa.");
	sect.appendChild(txtCheck); 
	inputCheck1.onchange = function() {
		console.log(inputCheck1.checked);
		//if (inputCheck1.checked == true) {
			var continut = document.getElementById("continut");
			var aranjamente = document.querySelectorAll(".cls1");
			for (var i = 0; i < aranjamente.length; i++) {
				var vaza = aranjamente[i].querySelectorAll(".vaza")[0];
				if (!vaza) {
					continut.removeChild(aranjamente[i]);
				}
			}
		//}
	}
	
	var btnCoord = document.createElement("button");
	btnCoord.innerHTML = "Coordonatele acestui buton";
	sect.appendChild(btnCoord);
	btnCoord.style.display = "block";
	var p = document.createElement("p");
	p.innerHTML = "  ";
	sect.appendChild(p);
	var afisareP = 0;
	btnCoord.onclick = function() {
		var x = event.clientX;
		var y = event.clientY;
		if (afisareP == 0) {
			p.innerHTML = "coord x: " + x + "coord Y" + y;
			afisareP = 1;
		}
		else {
			p.innerHTML = " ";
			afisareP = 0;
		}
	}
	/*
	var inputCheck2 = document.createElement("input");
	inputCheck2.type = "checkbox"; 
	inputCheck2.name = "chk2";
	inputCheck2.value = "2";
	sect.appendChild(inputCheck2);
	inputCheck2.style.display = "block";
	*/
	
	/*
	var btnCalcul = document.createElement("button");
	btnCalcul.innerHTML = "ceva";
	sect.appendChild(btnCalcul);
	btnCalcul.style.display = "block";
	*/
	
}