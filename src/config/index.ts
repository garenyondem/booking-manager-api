import dotenv from "dotenv";

const envFound = dotenv.config();
if (!envFound) {
    console.error("Couldn't find .env file or is not specified");
    process.exit();
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT ? +process.env.PORT : 5454;

export default {
    nodeEnv: process.env.NODE_ENV,
    servicePort: PORT,
    dbUri: process.env.MONGO_URI || "",
};
