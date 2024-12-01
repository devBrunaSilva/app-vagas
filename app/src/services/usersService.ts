import api from './api';

async function login(email: string, senha: string) {
  try {
    const response = await api.post('/usuarios/login', { email, senha });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao autenticar');
  }
}

async function register(nome: string, email: string, senha: string) {
  try {
    const response = await api.post('/usuarios', {
      nome,
      email,
      senha,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Erro ao registrar usuário'
    );
  }
}

async function getAll() {
  try {
    return await api.get('/usuarios');
  } catch (error) {
    console.error('Error: ', error);
  }
}

async function get(id) {
  try {
    return await api.get(`/usuarios/${id}`);
  } catch (error) {
    console.error('Error: ', error);
  }
}

export default {
  getAll,
  get,
  login,
  register,
};
