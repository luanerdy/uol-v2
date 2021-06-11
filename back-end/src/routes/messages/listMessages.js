import messages from '../../data/messages.js';

const listMessages = (req, res) => {
    res.send(messages);
};

export default listMessages;
