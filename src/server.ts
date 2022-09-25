import express from "express";
import axios from "axios";

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

    var lat = '-22.718105';
    var lon = '-47.321735';

    axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
        + lat + 
        "," 
        + lon + 
        "&key=AIzaSyBl9AlhHBo4OKOUkgejh9nCdnSjJfMcE4Q")
        .then(response => {
            if(response.data.error_message){
                return res.json(response.data.error_message);

            }else{
                return res.json(response.data.results[0].formatted_address);
            }
        })
        .catch(erro => {
            return res.json(erro);
        })
})

app.listen(port, ()=> {
    console.info("api rodando")
});