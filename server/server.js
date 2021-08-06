require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = process.env.PORT;

const api = express();

api.use(cors());

const getCepFromViaCep = (cep) => fetch(`https://viacep.com.br/ws/${cep}/json/`);

api.get('/:cep', (req, res) => {
    const cep = req.params.cep;

    getCepFromViaCep(cep)
    .then(x => x.json())
    .then(x => {
        res.json(x);
    });

});

api.listen(PORT, () => {
    console.log(`server is ON, port: ${PORT}`);
})