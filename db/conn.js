const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    dialect: 'mysql'
});


try {
    sequelize.authenticate()
    console.log("Conectamos com MySQL com sucesso!")
} catch (err) {
    console.log('Não foi possível conectar: ' + err);
}

module.exports = sequelize;