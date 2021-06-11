import participants from '../data/participants.js';

let checkUsers = () => {
	participants = participants.filter(
		(p) => Date.now() - p.lastStatus <= 10000
	);
};

export default checkUsers;
