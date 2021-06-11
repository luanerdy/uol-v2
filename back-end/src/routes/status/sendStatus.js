import participants from '../../data/participants.js';

const sendStatus = (req, res) => {
	const user = req.get('user');
	const participant = participants.find((p) => p.name === user);

	if (!participant) {
		res.sendStatus(400);
		return;
	}

	participant.lastStatus = Date.now();

	res.sendStatus(200);
};

export default sendStatus;
