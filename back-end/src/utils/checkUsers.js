import messages from '../data/messages.js';
import participants from '../data/participants.js';
import dayjs from 'dayjs';

const logout = (p) => {
	const message = {
		from: p.name,
		to: 'Todos',
		text: 'sai da sala...',
		type: 'status',
		time: dayjs().format('HH:mm:ss'),
	};

	messages.push(message);
};

const checkUsers = () => {
	const newParticipants = participants.filter((p) => {
		if (Date.now() - p.lastStatus <= 10000) {
			return true;
		}
		logout(p);
	});

	participants.length = 0;
	newParticipants.forEach((p) => participants.push(p));
};

export default checkUsers;
