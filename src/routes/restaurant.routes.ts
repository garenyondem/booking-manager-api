import Koa from "koa";
import Router from "koa-router";
import { RestaurantModel } from "../models/restaurant.model";

const router: Router = new Router();

router.post("/", async (ctx: Koa.Context) => {
    const { timeframes } = ctx.request.body;

    const newRestaurant = new RestaurantModel();
    newRestaurant.timeframes = timeframes;
    await newRestaurant.save();

    ctx.body = { restaurant: newRestaurant };
});

router.get("/", async (ctx: Koa.Context) => {
    const restaurants = await RestaurantModel.find();
    ctx.body = { restaurants };
});

export default () => router.routes();
