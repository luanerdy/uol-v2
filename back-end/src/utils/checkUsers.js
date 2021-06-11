import participants from '../data/participants.js';

const checkUsers = () => {
	participants = participants.filter(
		(p) => Date.now() - p.lastStatus <= 10000
	);
};

export default checkUsers;
