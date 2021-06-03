const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Its alive on http://localhost:${PORT}`)
);

app.use(express.json());

app.get('/tshirts', (req, res) => {
    res.status(200).send({
        tshirt: 'red shirt',
        size: 'large'
    })
});


app.post('/tshirts/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res.status(418).send({ message: ' We need a logo!' });
    }
    res.send({
        tshirt: `red shirt with your ${logo} and ID of ${id}`
    })
});