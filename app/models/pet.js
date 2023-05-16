module.exports = (sequelize, Sequelize) => {
  const Pet  = sequelize.define("pet", {
    nomepet: { type: Sequelize.STRING },
    fotocardpet: { type: Sequelize.STRING },
    sexopet: { type: Sequelize.STRING },
    descricao: { type: Sequelize.TEXT },
    idadepet: { type: Sequelize.INTEGER },
    porte: { type: Sequelize.STRING },
    raca: { type: Sequelize.STRING },
    personalidade: { type: Sequelize.STRING },
    abrigonome: { type: Sequelize.STRING },
    tipo: { type: Sequelize.STRING },
    especie: { type: Sequelize.INTEGER }
  });

  return Pet;
};
