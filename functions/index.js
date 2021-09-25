const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

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

app.post('/BulkAnalysis', async (req, res) => {
    const promises = [];
    const posts = db.collection('Posts').get();
    const postIds = [];
    posts.forEach(post => {
        promises.push(db.collection('Posts').doc(post.id).collection('Comments').get());
        postIds.push(post.id)
    })
    let count = 0;
    const promises2 = [];
    const comments_collection = await Promise.all(promises);
    comments_collection.forEach(comments => {
        comments.forEach(comment => {
            if (comment.data().Prediction === undefined) {
                promises2.push();
            }
        })
        count += 1;
    })
})

exports.Sentiment = functions.https.onRequest(app);