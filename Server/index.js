import express from "express";
import mongoose from "mongoose";


const app = express();
const port = process.env.PORT || 5000;



mongoose.connect(MongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("hello world"));
app.listen(port, () => console.log(`listening on localhost:${port}`));
