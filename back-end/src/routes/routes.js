import participants from "./participants/participantsRoute.js";
import messages from "./messages/messagesRoute.js";

const routes = (app) => {
    participants(app);
    messages(app);
};

export default routes;
