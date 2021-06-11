import participants from '../data/participants.js';

function checkUsers() {
	participants = participants.filter(
		(p) => Date.now() - p.lastStatus <= 10000
	);
};

export default checkUsers;
