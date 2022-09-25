import express from "express";

const app = express();
const port =  process.env.PORT || 3333;

app.get('/all', (req, res) => {
    return res.json([
        {id:1, nama:'Hotel Teste 1'},
        {id:2, nama:'Hotel Teste 2'},
        {id:3, nama:'Hotel Teste 3'}
    ])
})

app.get('/getlocation', (req, res)=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        },
        error => {
            console.log(error.message);
        } 
        )
    } else{
        console.log("Sem suporte");
    }

})

app.listen(port, ()=> {
    console.info("api rodando")
});