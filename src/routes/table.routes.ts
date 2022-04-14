import Koa from "koa";
import Router from "koa-router";
import { RestaurantModel } from "../models/restaurant.model";
import { TableModel } from "../models/table.model";

const router: Router = new Router();

router.post("/", async (ctx: Koa.Context) => {
    const { restId } = ctx.params;

    const newTable = new TableModel();
    newTable.restaurantId = restId;
    await newTable.save();

    await RestaurantModel.findByIdAndUpdate(restId, {
        $addToSet: { tables: newTable.id },
    });

    ctx.body = { table: newTable };
});

router.get("/", async (ctx: Koa.Context) => {
    const { restId } = ctx.params;

    const tables = await TableModel.find({ restaurantId: restId });

    ctx.body = { tables: [tables] };
});

export default () => router.routes();
