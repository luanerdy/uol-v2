import participants from '../../data/participants.js';
import messages from '../../data/messages.js';
import dayjs from 'dayjs';

const addMessage = (req, res) => {
	const user = req.get('user');
	const message = req.body;
	const validTypes = ['message', 'private_message'];
	const participant = participants.find((p) => p.name === user);
	const validations =
		!message.to ||
		!message.text ||
		!validTypes.includes(message.type) ||
		!participant;

	if (validations) {
		res.sendStatus(400);
		return;
	}

	message.from = user;
	message.time = dayjs().format('HH:mm:ss');

	messages.push(message);

	res.sendStatus(200);
};

export default addMessage;
