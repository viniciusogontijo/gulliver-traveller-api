import express from "express";

const app = express();
const port =  process.env.PORT || 3333;

app.get('/hotel', (req, res) => {
    return res.json([
        {id:1, nama:'Hotel Teste 1'},
        {id:2, nama:'Hotel Teste 2'},
        {id:3, nama:'Hotel Teste 3'}
    ])
})

app.listen(port, ()=> {
    console.info("api rodando")
});