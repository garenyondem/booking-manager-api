import Koa from "koa";
import Router from "koa-router";

const routerOpts: Router.IRouterOptions = {
    prefix: "/restaurant",
};

const router: Router = new Router(routerOpts);

router.post("/", async (ctx: Koa.Context) => {
    console.log("create reservation for this table this restaurant");
    ctx.body = "POST";
});

router.get("/", async (ctx: Koa.Context) => {
    console.log("get reservations for this table this restaurant");
    ctx.body = "GET ALL";
});

router.put("/:reservationId", async (ctx: Koa.Context) => {
    console.log("edit the reservation of this table this restaurant");
    ctx.body = "GET ALL";
});

router.delete("/:reservationId", async (ctx: Koa.Context) => {
    console.log("delete this reservation on this table in this restaurant");
    ctx.body = "DELETE";
});

export default () => router.routes();
