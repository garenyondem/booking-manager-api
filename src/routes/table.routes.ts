import Koa from "koa";
import Router from "koa-router";

const routerOpts: Router.IRouterOptions = {
    prefix: "/restaurant",
};

const router: Router = new Router(routerOpts);

router.post("/", async (ctx: Koa.Context) => {
    console.log("create table to this restaurant");
    ctx.body = "POST";
});

router.get("/", async (ctx: Koa.Context) => {
    console.log("get tables of restaurant");
    ctx.body = "GET ALL";
});

export default () => router.routes();
