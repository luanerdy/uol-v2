import participants from '../../data/participants.js';

const listParticipants = (req, res) => {
    res.send(participants);
};

export default listParticipants;
