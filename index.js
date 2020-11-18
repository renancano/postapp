const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

const Post = require("./models/Post");


//CONFIG *******************************************************************

	//Template Engine
		app.engine('handlebars', handlebars({defaultLayout: 'main'}));
		app.set('view engine', 'handlebars');

	//Body Parser
		app.use(bodyParser.urlencoded({extended: false}));
		app.use(bodyParser.json());	

//FINAL CONFIG ************************************************************



//ROTAS
app.get("/", function(req, res){
	Post.findAll().then(function(posts){
		res.render('home', {posts: posts});
	});
	
})

app.post("/busca", function(req, res){
	Post.findAll({where: {'idPostagem': req.body.busca}}).then(function(posts){
		res.render('home', {posts: posts});
	});
	
})

app.get("/cad", function(req, res){
	res.render('formulario');
});

app.post("/add", function(req, res){

	Post.create({
		titulo: req.body.titulo,
		conteudo: req.body.conteudo
	}).then(function(){
		res.redirect("/");
	}).catch(function(erro){
		res.send("Ouve um erro: " + erro);
	});


	
});




//teste



/*

app.listen(3000, function(){
	console.log("Servidor Rodando.");
}); 

*/