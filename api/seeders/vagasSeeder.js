const Vaga = require('../models/Vaga');

async function seedVagas() {
  const vagas = [
    {
      titulo: 'Desenvolvedor Full Stack',
      descricao: 'Desenvolvimento de aplicações web',
      dataCadastro: new Date(),
      telefone: '123456789',
      status: 'aberto',
      empresa: 'Tech Company',
    },
    {
      titulo: 'Analista de Sistemas',
      descricao: 'Análise e desenvolvimento de sistemas',
      dataCadastro: new Date(),
      telefone: '987654321',
      status: 'aberto',
      empresa: 'Software Solutions',
    },
    // Adicione mais vagas conforme necessário
  ];

  try {
    if (await Vaga.count() > 0) return;
    await Vaga.bulkCreate(vagas);
    console.log('Vagas seeded successfully.');
  } catch (error) {
    console.error('Error seeding vagas:', error);
  }
}

module.exports = seedVagas;