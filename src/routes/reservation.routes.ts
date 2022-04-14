import Koa from "koa";
import Router from "koa-router";
import { ReservationModel } from "../models/reservation.model";
import { TableModel } from "../models/table.model";

const router: Router = new Router();

router.post("/", async (ctx: Koa.Context) => {
    const { restId, tableId } = ctx.params;
    const { timeframe, size } = ctx.request.body;

    const newReservation = new ReservationModel();
    newReservation.timeframe = timeframe;
    newReservation.tableId = tableId;
    newReservation.size = size;
    await newReservation.save();

    await TableModel.findByIdAndUpdate(tableId, {
        $addToSet: { reservations: newReservation.id },
    });

    ctx.body = { reservation: newReservation };
});

router.get("/", async (ctx: Koa.Context) => {
    const { restId, tableId } = ctx.params;
    const reservations = await ReservationModel.find({ tableId: tableId });
    ctx.body = { reservations };
});

router.put("/:reservationId", async (ctx: Koa.Context) => {
    const { restId, tableId, reservationId } = ctx.params;
    const { timeframe, size } = ctx.request.body;

    const updatedReservation = await ReservationModel.findByIdAndUpdate(
        reservationId,
        {
            $set: {
                size,
                timeframe,
            },
        },
        { new: true }
    );

    ctx.body = { reservation: updatedReservation };
});

router.delete("/:reservationId", async (ctx: Koa.Context) => {
    const { restId, tableId, reservationId } = ctx.params;

    await ReservationModel.findByIdAndDelete(reservationId);
    await TableModel.findByIdAndUpdate(tableId, {
        $pull: { reservations: reservationId },
    });

    ctx.body = { removed: true };
});

export default () => router.routes();
