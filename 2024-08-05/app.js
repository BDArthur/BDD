const express = require('express');

const app = express();

const users = [
    { id: 1, name: 'Arthur', status: 'Disponivel' },
    { id: 2, name: 'Ruhtra', status: 'Ocupado' },
    {  id: 3, name: 'Aids', status: 'Ausente'}
]

app.get('/api/users', (req, res) => {
    console.log(req.query);

    const status = req.query.status;
    if (status) {
        return res.status(200).json(users.filter(user => user.status === status));
    }
});

app.get('/api/users/id', (req, res) => {
    console.log(req.params);
    
    const id = parseInt(req.params.id);
    console.log(id);

    if (isNan(id)) {
        return res.status(400).json({ error: 'O "id" do usuário deve ser um numero.'});
    }

    const user = users.find(user => user.id === id);
    console.log(user);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.'});
    }

    return res.status(200).json(user);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});