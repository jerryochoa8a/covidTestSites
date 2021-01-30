const express = require('express');
const cors = require('cors') // This is new
const app = express();
const axios= require('axios');




app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

////////////////   one hospital     /////////////////
app.get('/getOne/:id', function (req, res, next) {
    axios.get("https://api.yelp.com/v3/businesses/" + req.params.id,
            {headers: {Authorization: 'Bearer ' } })
                    .then(response => {  //the auth key will change every 7 days!!!!
                        // console.log(response.data);
                        console.log('-----' + req.params.id + '-------') //req.params.zip gets the zip var from "app.get"  + req.params.lat + 
                        res.json({returned_data: response.data});
            })
            .catch(err => console.log(err));
})

app.get('/lat/:lat/long/:long', function (req, res, next) {
    axios.get("https://api.yelp.com/v3/businesses/search?term=covid&latitude="+ req.params.lat +"&longitude="+ req.params.long,
            {headers: {Authorization: 'Bearer hPjOFcIIhHBc9gmUo9UIC-ySfb20hos1d0swBH2ri1HUEnto-C2mjbgcIYOLzoy-R9gi7ILtVmKwoz6MXbgt0MVYcaYfsv_rCMVPlV4jd-7AGsT5zDfdt_eO3F3PXnYx' } })
                    .then(response => {  //the auth key will change every 7 days!!!!
                        console.log(response.data);
                        // console.log('-----' + req.params.zip + '-------') //req.params.zip gets the zip var from "app.get"  + req.params.lat + 
                        res.json({returned_data: response.data});
            })
            .catch(err => console.log(err));
})


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})