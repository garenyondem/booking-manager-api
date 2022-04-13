import { Schema, Document, Model, model, Types } from "mongoose";
import * as TimeframeSchema from "../schemas/timeframe.schema";
import { ITable } from "./table.model";

export interface IReservation extends Document {
    _id: Types.ObjectId;
    timeframe: TimeframeSchema.ITimeframeSchema;
    size?: number;
    tableId: ITable["_id"];
}

export interface IReservationModel extends Model<IReservation> {}

const ReservationSchema: Schema = new Schema(
    {
        timeframe: {
            type: TimeframeSchema.default,
            required: true,
        },
        size: {
            type: Number,
            default: 1,
            max: 5,
            required: false,
        },
        tableId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

class ReservationClass {}

ReservationSchema.loadClass(ReservationClass);

export const ReservationModel = model<IReservation>(
    "Reservation",
    ReservationSchema
) as IReservationModel;
