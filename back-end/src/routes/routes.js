import participantsRoute from "./participants/participantsRoute.js";
import messagesRoute from "./messages/messagesRoute.js";
import statusRoute from "./status/statusRoute.js";

const routes = (app) => {
    participantsRoute(app);
    messagesRoute(app);
    statusRoute(app);
};

export default routes;
