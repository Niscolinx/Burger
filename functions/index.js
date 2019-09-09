//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({ original: original });
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
    console.log(req, res, 'from firebase')
});

const cors = require('cors')
const corsHandler = cors({ origin: true });

exports.pingFunctionWithCorsAllowed = functions.https.onRequest((request, response) => {
    corsHandler(request, response, () => {
        response.send(`Ping from Firebase (with CORS handling)! ${new Date().toISOString()}`);
        const info = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return dispatch => {
            dispatch(authStart())
            let url = 'https:dentitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4'
            if (!isLogin) {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkxoSmDMAvGH5Uyd2XQuk6ghxHOTjhSB4'
            }
            console.log(url)
            axios.post(url, info)
                .then(res => {
                    console.log(res)
                    alert('success')
                    dispatch(authSuccess(res.data))
                })
                .catch(err => {
                    console.log(err)
                    alert('error')
                    dispatch(authFailed(err))
                })
        });
});
