import app from "./app.js";
import routes from "./routes/routes.js";

routes(app);

app.listen(4000);
console.log("server rodando");
