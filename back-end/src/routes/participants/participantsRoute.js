import addParticipant from "./addParticipant.js";

const participantsRoute = (app) => {
    app.post('/participants', addParticipant);
}

export default participantsRoute;
