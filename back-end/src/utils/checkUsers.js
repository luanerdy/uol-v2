import participants from '../data/participants.js';

const checkUsers = () => {
	const newParticipants = participants.filter(
		(p) => Date.now() - p.lastStatus <= 10000
	);
	
	participants.length = 0;
	newParticipants.forEach(p => participants.push(p));
};

export default checkUsers;
