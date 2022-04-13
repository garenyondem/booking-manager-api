import Koa from "koa";
import Router from "koa-router";


const router: Router = new Router();

router.post("/", async (ctx: Koa.Context) => {
    console.log("create table to this restaurant");
    ctx.body = "POST";
});

router.get("/", async (ctx: Koa.Context) => {
    console.log("get tables of restaurant");
    ctx.body = "GET ALL";
});

export default () => router.routes();
