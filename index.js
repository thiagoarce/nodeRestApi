const express = require('express');

const app = express();

app.listen(3333, () => {
    console.log('servidor rodando na porta 3333')
});

app.get('/atendimentos', (req, res) => {
res.send('vocë está em atendimentos')
})