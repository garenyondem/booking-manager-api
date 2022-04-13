import Koa from "koa";
import HttpStatus from "http-status-codes";

class App {
    public app: Koa;

    constructor() {
        this.app = new Koa();
        this.mountMiddlewares();
    }
    private mountMiddlewares(): void {
        this.app.use(errorHandler());

        this.app.on("error", console.error);
    }
}

function errorHandler() {
    return async (ctx: Koa.Context, next: () => Promise<any>) => {
        try {
            await next();
        } catch (error) {
            ctx.status =
                error.statusCode ||
                error.status ||
                HttpStatus.INTERNAL_SERVER_ERROR;
            error.status = ctx.status;
            ctx.body = { error };
            ctx.app.emit("error", error, ctx);
        }
    }
}

export default new App().app;
