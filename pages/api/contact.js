const handler = (req, res) => {
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

        // Store in database
        const newMessage = {
            email,
            name,
            message,
        };

        res.status(201).json({
            message: 'Message Successfully Received.'
        });
    }
};

export default handler;