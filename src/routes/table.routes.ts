import Koa from "koa";
import Router from "koa-router";
import { RestaurantModel } from "../models/restaurant.model";
import { TableModel } from "../models/table.model";

const router: Router = new Router();

router.post("/", async (ctx: Koa.Context) => {
    const restaurantId = ctx.params.restId;

    const newTable = new TableModel();
    newTable.restaurantId = restaurantId;
    await newTable.save();

    await RestaurantModel.findByIdAndUpdate(restaurantId, {
        $push: { tables: newTable.id },
    });

    ctx.body = { table: newTable };
});

router.get("/", async (ctx: Koa.Context) => {
    const restaurantId = ctx.params.restId;

    const tables = await TableModel.find({ restaurantId: restaurantId });

    ctx.body = { tables: [tables] };
});

export default () => router.routes();
