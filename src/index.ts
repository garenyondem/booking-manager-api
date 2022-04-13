import app from "./app";
import config from "./config";
import routes from "./routes";

app.use(routes());

app.listen(config.servicePort);
