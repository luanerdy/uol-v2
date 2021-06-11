import listParticipants from "./listParticipants.js";
import addParticipant from "./addParticipant.js";

const participantsRoute = (app) => {
    app.get('/participants', listParticipants);
    app.post('/participants', addParticipant);
}

export default participantsRoute;
