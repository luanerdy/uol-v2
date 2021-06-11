import listMessages from "./listMessages.js";
import addMessage from "./addMessage.js";

const messagesRoute = (app) => {
    app.get('/messages', listMessages);
    app.post('/messages', addMessage);
}

export default messagesRoute;
