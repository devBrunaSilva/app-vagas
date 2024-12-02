const Usuario = require('../models/usuario');

async function findAll() {
  return await Usuario.findAll();
}

async function findById(id) {
  return await Usuario.findByPk(id);
}

async function create({ nome, email, senha }) {
  return await Usuario.create({ nome, email, senha });
}

async function remove(id) {
  const user = await Usuario.findByPk(id);
  if (user) {
    await user.destroy();
    return user;
  }
  return null;
}

async function update(id, { nome, email, senha }) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error('Usuário não encontrado');
  }

  if (email && email !== usuario.email) {
    const emailExists = await Usuario.findOne({ where: { email } });
    if (emailExists) {
      throw new Error('Email já cadastrado');
    }
  }

  if (nome) usuario.nome = nome;
  if (email) usuario.email = email;
  if (senha) usuario.senha = senha;

  await usuario.save();
  return usuario;
}


module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
