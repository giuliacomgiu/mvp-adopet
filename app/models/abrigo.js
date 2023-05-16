module.exports = (sequelize, Sequelize) => {
  const Abrigo  = sequelize.define("abrigo", {
    nomeabrigo: { type: Sequelize.STRING },
    descricao: { type: Sequelize.STRING },
    responsavel: { type: Sequelize.STRING },
    cnpj: { type: Sequelize.STRING },
    endereco: { type: Sequelize.STRING },
    cidade: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    senha: { type: Sequelize.STRING },
    celular: { type: Sequelize.STRING },
    instg: { type: Sequelize.STRING },
    fbook: { type: Sequelize.STRING },
    outras: { type: Sequelize.STRING },
    fotoabrigo: { type: Sequelize.STRING }
  });

  return Abrigo;
};
