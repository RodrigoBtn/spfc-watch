const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/jogos', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.api-futebol.com.br/v1/times/24/partidas',
      {
        headers: {
          Authorization: process.env.API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar jogos', detalhe: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
