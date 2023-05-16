const fs = require('fs');
const path = require('path');
const Sequelize = require("sequelize");
const dbConfig = require("../../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

Abrigo = db.abrigos = require("./abrigo.js")(sequelize, Sequelize);
Pet = db.pets = require("./pet.js")(sequelize, Sequelize);

db.abrigos.hasMany(db.pets)
db.pets.belongsTo(db.abrigos)

var dados_abrigo_path = path.join(__dirname, '..', '..', 'db', 'seeds', 'abrigos.json');
var dados_abrigos = JSON.parse(fs.readFileSync(dados_abrigo_path, 'utf8'));

var dados_pets_path = path.join(__dirname, '..', '..', 'db', 'seeds', 'pets.json');
var dados_pets = JSON.parse(fs.readFileSync(dados_pets_path, 'utf8'));

db.sequelize.sync({ force: true }).then(async () => {
  console.log("Drop and re-sync db.");

  await Abrigo.bulkCreate(dados_abrigos, { validate: true });
  await Pet.bulkCreate(dados_pets, { validate: true });
});

module.exports = db;
