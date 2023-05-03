module.exports = (sequelize, Sequelize) => {
  const Pet  = sequelize.define("pet", {
    nome: { type: Sequelize.STRING },
    descricao: { type: Sequelize.TEXT },
    idade: { type: Sequelize.INTEGER },
    porte: { type: Sequelize.STRING },
    raca: { type: Sequelize.STRING },
    personalidade: { type: Sequelize.STRING },
    especie: { type: Sequelize.INTEGER }
  });

  return Pet;
};
