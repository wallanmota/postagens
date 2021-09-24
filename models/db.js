const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemadecadastro', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(function(){
    console.log('DB conectado')
}).catch(function(erro){
    console.log('Erro ao conectar no DB: ' + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}