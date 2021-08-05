const express = require('express');
const fetch = require('node-fetch');

const api = express();

function getCepFromViaCep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

api.get('/:cep', (req, res) => {
    const cep = req.params.cep;

    getCepFromViaCep(cep)
    .then(x => x.json())
    .then(x => {
        res.json(x);
    });

});

api.listen(3333, () => {
    console.log('server is ON');
})