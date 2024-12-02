const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');
const { encode } = require('../lib/jwt');


router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const data = await usuarioRepository.findAll();

  if(!data || !email || !senha) {
    return res.status(404).json({ error: 'User not found' })
  };

  const userData = data.find((u) => u.dataValues.email === email && u.dataValues.senha === senha);
  
  if(userData) {
    const user = {
      id: userData.dataValues.id,
      email: userData.dataValues.email,
      name: userData.dataValues.nome,
      senha: userData.dataValues.senha
    }
    const token = encode(user)
   
    return res.json({ token });
  };
  
  return res.status(404).json({ error: 'User not found' })
});

// Get all users
router.get('/', (req, res) => {
  res.json({ usuarios: usuarioRepository.findAll() });
});

// Get user by id
router.get('/:id', (req, res) => {
  const user = usuarioRepository.findById(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create a new user
router.post('/', (req, res) => {
  const user = usuarioRepository.create(req.body);
  console.log(user)
  res.json({ user });
});

// Update a user
router.put('/:id', async (req, res) => {
  const user = await usuarioRepository.update(req.params.id, req.body);

  if (user) {
    const userData = {
      id: user.dataValues.id,
      email: user.dataValues.email,
      name: user.dataValues.nome,
      senha: user.dataValues.senha
    }
    const token = encode(userData)
   
    return res.json({ token });
  } 
  
  return res.status(404).json({ error: 'User not found' });
  
});

// Delete a user
router.delete('/:id', (req, res) => {
  const user = usuarioRepository.remove(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
