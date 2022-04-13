import { Schema, Document, Model, model, Types } from "mongoose";
import { IReservation } from "./reservation.model";
import { IRestaurant } from "./restaurant.model";

export interface ITable extends Document {
    _id: Types.ObjectId;
    reservations?: IReservation[];
    size: number;
    restaurantId: IRestaurant["_id"];
}

export interface ITableModel extends Model<ITable> {}

const TableSchema: Schema = new Schema(
    {
        reservations: [Schema.Types.ObjectId],
        size: {
            type: Number,
            default: 1,
            max: 5,
            required: false,
        },
        restaurantId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

class TableClass {}

TableSchema.loadClass(TableClass);

export const TableModel = model<ITable>("Table", TableSchema) as ITableModel;
