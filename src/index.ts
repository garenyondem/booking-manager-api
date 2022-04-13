import app from "./app";
import config from "./config";
import routes from "./routes";

app.use(routes());

app.listen(config.servicePort, () => {
    console.info(`🚀 Http server is listening on http://127.0.0.1/${config.servicePort}`);
});
