import sendStatus from "./sendStatus.js";

const statusRoute = (app) => {
    app.post('/status', sendStatus);
}

export default statusRoute;
