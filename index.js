const Express = require('express');
const Sequelize = require('sequelize');
const Handlebars = require('express-handlebars');

const app = Express();


//Config
    //Template engine
    app.engine('handlebars', Handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    
    //Conexão DB
    const sequelize = new Sequelize('sistemadecadastro', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql'
    });
    sequelize.authenticate().then(function(){
        console.log('DB conectado')
    }).catch(function(erro){
        console.log('Erro ao conectar no DB: ' + erro)
    });




app.listen(5000, function(){
    console.log('Server rodando na URL http://localhost/5000');
})
