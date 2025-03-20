const express = require('express');
const router = express.Router();
const dialogflow = require('@google-cloud/dialogflow');

// Initialize Dialogflow client
const sessionClient = new dialogflow.SessionsClient({
    keyFilename: 'path/to/your/service-account-key.json' // You'll need to replace this with your actual service account key path
});

const projectId = 'your-project-id'; // Replace with your Dialogflow project ID
const sessionId = 'session-' + Date.now();

router.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        // Create session path
        const sessionPath = sessionClient.projectAgentSessionPath(
            projectId,
            sessionId
        );

        // Create request
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: 'en-US',
                },
            },
        };

        // Send request to Dialogflow
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;

        // Send response back to client
        res.json({
            response: result.fulfillmentText
        });
    } catch (error) {
        console.error('Error in chat route:', error);
        res.status(500).json({
            error: 'Failed to process message'
        });
    }
});

module.exports = router; 