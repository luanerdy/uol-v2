import participants from '../../data/participants.js';
import messages from '../../data/messages.js';
import dayjs from 'dayjs';

const addMessage = (req, res) => {
    const user = req.get('user');
	const participant = participants.find((p) => p.name === user);

	const message = req.body;
	const validTypes = ['message', 'private_message'];

	if (
		!message.to ||
		!message.text ||
		!validTypes.includes(message.type) ||
		!participant
	) {
		res.sendStatus(400);
		return;
	}

    message.from = user;
    message.time = dayjs().format('HH:MM:ss')

	messages.push(message);

	res.sendStatus(200);
};

export default addMessage;
