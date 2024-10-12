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
    black:
      "https://drive.google.com/file/d/15BbARC3E-8YMcXRL-e0ZPXJtU5J55JLx/view?usp=drive_link",
    oColored:
      "https://drive.google.com/file/d/1FJxEnUBGJgP_oy2r-RlgS23mpb33po1d/view?usp=drive_link",
    oBlack:
      "https://drive.google.com/file/d/1QoLw60JAxKUopz0U_nEDj4maaMlfqNUv/view?usp=drive_link",
    redCross:
      "https://drive.google.com/file/d/1JuX1T6OogHhFdtqp3lCexuPzjR2Z1a3k/view?usp=drive_link",
    red: "https://drive.google.com/file/d/1X1aMZ7sTiyqTHRTG4Fz-1mPMZwHO61F2/view?usp=drive_link",
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
