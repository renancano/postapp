const Sequelize = require("sequelize");

//Conexão com o Banco de Dados MySQL
const sequelize = new Sequelize("sql10377226", "sql10377226", "2uAnWMIIbn", {
	host: "sql10.freesqldatabase.com",
	dialect: "mysql2",
	define: {
		timestamps: false
	}
});

//Verificando erro no banco de dados
sequelize.authenticate().then(function(){
	console.log("Conectado com Sucesso");
}).catch(function(erro){
	console.log("Falha ao se conectar: " + erro);
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}