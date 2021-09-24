const Express = require('express');
const Handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('./models/db');
const Post = require('./models/Post');


const app = Express();


//Config
    //Template engine
    app.engine('handlebars', Handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Rotas
    app.get('/', function(req, res){
        res.render('layouts/home')
    })

    app.get('/cadastro', function(req, res){
        res.render('layouts/formulario');
    });

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/');
        }).catch(function(erro){
            res.send('Erro ao criar post ' + erro);
        })
    })




app.listen(5000, function(){
    console.log('Server rodando na URL http://localhost/5000');
})
