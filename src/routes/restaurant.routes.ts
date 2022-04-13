import Koa from "koa";
import Router from "koa-router";

const routerOpts: Router.IRouterOptions = {
    prefix: "/restaurant",
};

const router: Router = new Router(routerOpts);

router.post("/", async (ctx: Koa.Context) => {
    console.log("create restaurant");
    ctx.body = "POST";
});

router.post("/time-windows", async (ctx: Koa.Context) => {
    console.log("create time windows for this restaurant");
    ctx.body = "POST";
});

router.get("/time-windows", async (ctx: Koa.Context) => {
    console.log("get time windows of this restaurant");
    ctx.body = "GET ALL";
});

export default () => router.routes();
