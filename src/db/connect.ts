import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import log from "../logger";

const connect = () => {
  const dbURI = config.get("dbURI") as string;
  const dbOptions = config.get("mongoOptions");

  return mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => log.info("Database connected."))
    .catch((e) => {
      log.error("db error", e);
      process.exit(1);
    });
};

export default connect;
