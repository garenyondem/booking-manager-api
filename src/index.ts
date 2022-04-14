import app from "./app";
import config from "./config";
import routes from "./routes";
import { default as initMongoConnections } from "./db/mongo";

init(config.servicePort.toString()).catch((err) => {
    shutdown(err);
});

async function init(port: string) {
    await initMongoConnections();

    app.use(routes());

    app.listen(port, () => {
        console.info(`🚀 Http server is listening on http://127.0.0.1/${port}`);
    });
}

process
    .on("uncaughtException", shutdown)
    .on("SIGINT", shutdown)
    .on("SIGTERM", shutdown);

function shutdown(err: any) {
    err && console.error(err);
    process.exit();
}
