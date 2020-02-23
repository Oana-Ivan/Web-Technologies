const express = require('express');
var app = express();
const fs = require('fs');
const session = require('express-session')
const formidable = require('formidable');
const crypto = require('crypto');

const util = require('util');

// initializari socket.io
const http = require('http')
const socket = require('socket.io'); //trebuie instalat
const server = new http.createServer(app);  
var io = socket(server);
io = io.listen(server);//asculta pe acelasi port ca si serverul

var conexiune_index;
io.on("connection", (socket) => {  
    console.log("Conectare!");
	conexiune_index = socket;
    socket.on('disconnect', () => {conexiune_index=null;console.log('Deconectare')});
});
serverPass = "tralala";


app.set('view engine', 'ejs'); // folosirea ejs
app.use(express.static(__dirname));
app.use('/css', express.static('css')); // folder negenerat de node
app.use('/uploads', express.static('uploads')); // folder negenerat de node
app.use('/resurse', express.static('resurse'));

// pentru conecatre
function getJson(numeFis){
	let textFis = fs.readFileSync(numeFis);//pun continutul fisierului useri.json in rawdata
	return JSON.parse(textFis);//obtin obiectul asociat json-ului
}
// pentru inregistrare
function saveJson(obJson, numeFis){
	let data = JSON.stringify(obJson);//transform in JSON
	fs.writeFileSync(numeFis, data);//scriu JSON-ul in fisier (inlocuind datele vechi)
}

app.use(session({
  secret: 'abcdefg',//folosit de express session pentru criptarea id-ului de sesiune
  resave: true,
  saveUninitialized: false
}));

// cerere catre index
app.get('/', function(req, res) {
    res.render('html/index', {user: req.session.username});
});

app.get('/index', function(req, res) {
    res.render('html/index', {user: req.session.username});
});

app.get('/Logout', function(req, res) {
    req.session.destroy();//distrug sesiunea cand se intra pe pagina de logout
	res.render('html/Logout');
});


/*
app.post('/login', function(req, res)
{
	let u = fs.readFileSync('useri.JSON');
	let uO = JSON.parse(u);
	for(let i = 0;i < aranjamente.length;i++)
	{
		if(uO.useri[i]["username"] == req.body.username)
		{
			var password = Crypt(req.body.parola);
			if(password != uO.bilete[i]["password"])
				res.render('log.ejs', {pass:'wrong'});
			else {
				req.session.username=uO.bilete[i]["nume"];
				res.redirect('/');
				
			}
		}
	}
	
});*/
app.post('/index', function(req, res) { 
	var form = new formidable.IncomingForm(); // obiect de tip form cu care parsez datele venite de la utilizator
	form.parse(req, function(err, fields, files) {
		jsfis = getJson('useri.json')
		var cifru = crypto.createCipher('aes-128-cbc', 'mypassword');
		var encrParola = cifru.update(fields.parola, 'utf8', 'hex');
		encrParola += cifru.final('hex');
		let user = jsfis.useri.find(function(x){
			return (x.username == fields.username && x.parola == encrParola );
		});
		
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(encrParola);
			req.session.username=user;//setez userul ca proprietate a sesiunii
		}
		console.log(req.session.username);
		res.render('html/index',{user: req.session.username}); // req.session apare in toate get si post in toate rander
	});


}); 


app.get('/inregistrare', function(req, res) {
    res.render('html/inregistrare', {user: req.session.username});
});

app.post('/inregistrare', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) { // files nu pt proiect

		let rawdata = fs.readFileSync('useri.json');
		let jsfis = JSON.parse(rawdata); // parse transforma in obiect js
		var cifru = crypto.createCipher('aes-128-cbc', 'mypassword'); //cp
		var encrParola= cifru.update(fields.parola, 'utf8', 'hex');
		encrParola+=cifru.final('hex');
		console.log(fields.parola+ " "+encrParola); //cp
		// jsfis.useri vector
		jsfis.useri.push({id:jsfis.lastId, username:fields.username, nume:fields.nume, parola: encrParola});
		jsfis.lastId++;
		res.render('html/inregistrare', {user: req.session.username, rsstatus:"ok"}); 

		saveJson(jsfis,'useri.json');
    });
	
});

app.get('/PrezentareProduse', function(req, res) {
    
	let rawdata = fs.readFileSync('aranjamente.json');
	let jsfis = JSON.parse(rawdata);
	console.log(jsfis.aranjamente);
	res.render('html/PrezentareProduse',{aranjamente:jsfis.aranjamente, user: req.session.username});
});



	
app.use(function(req,res){
    res.status(404).render('html/404');
});
// trebuie sa fie ultima

app.get("/*", function(req, res) {
	console.log("1");
	res.render("html" + req.path, {user: req.session.username});
});
app.listen(8080);
console.log('Serverul a pornit pe portul 8080');