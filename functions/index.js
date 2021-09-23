const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors({ origin: true }));

const axios = require('axios');
const { response } = require("express");

app.post('/Predict', async (req, res) => {
    data = req.body;
    console.log(data.text);
    axios.post(`http://127.0.0.1:8000/predict`, data).then(response => {
        console.log(response.data);
        res.json(response.data);
    }).catch(err => {
        console.log(err.code)
        res.json(false);
    })

})



exports.Sentiment = functions.https.onRequest(app);