module.exports = (sequelize, Sequelize) => {
  const Abrigo  = sequelize.define("abrigo", {
    nome: { type: Sequelize.STRING },
    descricao: { type: Sequelize.TEXT },
    gestor: { type: Sequelize.STRING },
    cnpj: { type: Sequelize.INTEGER },
    endereco: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    whatsapp: { type: Sequelize.INTEGER }
  });

  return Abrigo;
};
