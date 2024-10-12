import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/productRoutes.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const links = [
  {
    black: "https://i.postimg.cc/kXj4n4LG/black-tuta.jpg",
    oColored: "https://i.postimg.cc/K8RY4byN/Cultural-1.jpg",
    oBlack: "https://i.postimg.cc/HLMs4tn8/Cultural2.jpg",
    redCross: "https://i.postimg.cc/GmVmyfL1/Cultural3.jpg",
    red: "https://i.postimg.cc/cHMxP4Qs/red-tuta.jpg",
  },
];

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// database section for application
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected Succesfully");
  })
  .catch((e) => {
    console.error("Error Occurred while connecting to databases");
  });

// middleware handler
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// configuring the routes
routes(app);
// get config

app.get("/", (req, res) => {
  res.send("<h1 style='color:dodgerblue'>Application is running...</h1>");
});
app.listen(port, () => {
  console.log("app is running on port:", port);
});
