import messages from '../../data/messages.js';

const listMessages = (req, res) => {
	let messagesToSend = messages.filter(
		(m) =>
			m.to === 'Todos' ||
			m.to === req.get('user') ||
			m.from === req.get('user') ||
            m.type === 'message'
	);
	const limit = req.query.limit;

	if (limit) {
		messagesToSend = messagesToSend.slice(-parseInt(limit));
	}

	res.send(messagesToSend);
};

export default listMessages;
