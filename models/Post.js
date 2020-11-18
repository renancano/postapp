const db = require('./db');

//Definindo Tabela postagens
const Post = db.sequelize.define('postagens', {
	idPostagem: {
		type: db.Sequelize.INTEGER,
		primaryKey: true
	},
	titulo: {
		type: db.Sequelize.STRING
	},
	conteudo: {
		type: db.Sequelize.TEXT
	},
	dtPostagem: {
		type: db.Sequelize.DATE
	}
});

module.exports = Post;