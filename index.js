const Express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


const app = Express();


//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Rotas
    app.get('/', function(req, res){
        //{order: [['id', 'DESC']]} = ordem de postagem recente p/ antiga (ASC = antiga p/ recente)
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('layouts/home', {posts: posts})
        });
     
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

    app.get('/del/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso!')
        }).catch(function(erro){
            res.send('Esta postagem não existe' + erro)
        })
    })




app.listen(5000, function(){
    console.log('Server rodando na URL http://localhost/5000');
})
