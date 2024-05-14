import express from "express";
import { newSequelize } from "./config/index.js";
import router from "./routes/users.routes.js";
import path from "path";
import { Url } from "url";
import { uploads } from "./utils/multer.config.js";

const app = express();
app.use(express.json());
 app.use(express.urlencoded());
 app.use(express.static(path.join(process.cwd(), "uploads")));
try {
  await newSequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(router);

app.use("/*", (req, res) => {
  return res.status(404).send({
    status: 404,
    message: req.baseUrl + " is not found",
  });
});
app.listen(9090, console.log(9090));
