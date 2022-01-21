import express from "express";
import config from "config";

const port = config.get("port") as number;
const dbURI = config.get("dbURI") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server started running at port ${port}`);
});
