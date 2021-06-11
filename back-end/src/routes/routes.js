import participants from "./participants/participantsRoute.js";
import messages from "./messages/messagesRoute.js";
import status from "./status/statusRoute.js";

const routes = (app) => {
    participants(app);
    messages(app);
    status(app);
};

export default routes;
