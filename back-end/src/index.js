import app from "./app.js";
import routes from "./routes/routes.js";
import checkUsers from "./utils/checkUsers.js";

routes(app);

app.listen(4000);

// setInterval(checkUsers, 15000);
console.log("server rodando");
