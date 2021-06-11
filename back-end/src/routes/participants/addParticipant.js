import participants from '../../data/participants.js';
import messages from '../../data/messages.js';
import dayjs from 'dayjs';

const addParticipant = (req, res) => {
	const nameInUse = participants.find((p) => p.name === req.body.name);

	if (!req.body.name || nameInUse) {
		res.sendStatus(400);
	}

	const participant = {
		name: req.body.name,
		lastStatus: Date.now(),
	};

	const message = {
		from: req.body.name,
		to: 'Todos',
		text: 'entra na sala...',
		type: 'status',
		time: dayjs().format('HH:MM:ss'),
	};

	participants.push(participant);
	messages.push(message);

	res.sendStatus(200);
};

export default addParticipant;
