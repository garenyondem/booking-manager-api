import mongoose from "mongoose";
import config from "../config";

if (config.nodeEnv == "development") {
    mongoose.set("debug", true);
}

const init = async () => {
    await mongoose.connect(config.dbUri);
};

export default init;
