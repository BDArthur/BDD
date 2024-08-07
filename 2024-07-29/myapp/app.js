const express = require('express');

const app = express();

app.get('/hello-string', function(a, b) {
    return b.send("Hello, String!");
});

app.get('/hello-json', (req, res) => {
    const data = {
        "message": "Hello, JSON",
        "nome": "Arthur"
    }
    return res.status(201).json(data);
})

const users = [
    { id: 1, username: "Arthur", status: "Disponivel"},
    { id: 2, username: "RobiSom", status: "Ocupado"}
]

const PORT = process.env.PORT || 3000;
const onServerStart = function() {
    console.log(`Porta utilizada ${PORT}`);
};

app.listen(PORT, onServerStart);
