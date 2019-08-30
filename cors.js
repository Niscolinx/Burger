import * as cors from 'cors';
const corsHandler = cors({ origin: true });

exports.getQuestions = functions.https.onRequest(async (request, response) => {
    corsHandler(request, response, async () => {
        const questions = [];
        const querySnapshot = await db.collection('questions').get();
        const documents = querySnapshot.docs;
        documents.forEach(doc => {
            questions.push(doc.data());
        });
        response.status(200).json({ questions: questions });
    });
});