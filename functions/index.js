const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("./comment-evaluation-system-firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});