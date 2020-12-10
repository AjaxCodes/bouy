import express from 'express';
import mongoose from "mongoose";
import { start } from 'repl';




const config = ("config");
const app = express();
const port = process.env.PORT || 5000;


function connectDB() {
  mongoose
    .connect(
        config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => {
      console.log(`Could not connect to MongoDB. ERROR: ${err}`);
      process.exit(1);
    });
}
app.get("/", (req,res) => res.status(200).send("hello world"));
app.listen(port, () => console.log(`listening on localhost:${port}`));


connectDB;


