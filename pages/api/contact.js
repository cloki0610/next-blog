import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@')) {
            res.status(422).json({ message: 'E-mail Invalid.' });
            return;
        }
        if (!name || name.trim() === '') {
            res.status(422).json({ message: 'Name Input Invalid.' });
            return;
        }
        if (!message || message.trim() === '') {
            res.status(422).json({ message: 'Message Input Invalid.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        // Connect MongoDB
        let client;
        try {
            client = await MongoClient.connect(process.env.DB_URL);
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }
        const db = client.db();

        // Insert form data
        try {
            const result = await db.collection('blog-messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed.' });
            return;
        }

        client.close();
        res.status(201).json({
            message: 'Message Successfully Received.'
        });
    }
};

export default handler;