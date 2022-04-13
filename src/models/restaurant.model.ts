import { Schema, Document, model, Model, Types } from "mongoose";
import * as TimeframeSchema from "../schemas/timeframe.schema";
import { ITable } from "./table.model";

export interface IRestaurant extends Document {
    _id: Types.ObjectId;
    timeframes: TimeframeSchema.ITimeframeSchema[];
    tables?: ITable[];
}

export interface IRestaurantModel extends Model<IRestaurant> {}

const RestaurantSchema = new Schema(
    {
        timeframes: {
            type: [Schema.Types.ObjectId],
            required: true,
        },
        tables: [Schema.Types.ObjectId],
    },
    {
        timestamps: true,
        versionKey: false,
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    }
);

class RestaurantClass {}

RestaurantSchema.loadClass(RestaurantClass);

export const RestaurantModel = model<IRestaurant>(
    "Restaurant",
    RestaurantSchema
) as IRestaurantModel;
