import express from "express";
import mongoose from "mongoose";
import Messages from "./DbMessages.js";
import Pusher from "pusher";

const app = express();
const port = process.env.PORT || 5000;

const pusher = new Pusher({
  appId: "1120859",
  key: "f388c71f5112930a165b",
  secret: "b14bb5c602eef5680cfc",
  cluster: "us2",
  useTLS: true,
});

app.use(express.json);

const key =
  "mongodb+srv://ajaxCodes:GhostRecon1121@cluster0.pywev.mongodb.net/BoutChatApp?retryWrites=true&w=majority";

mongoose.connect(key, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB is connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change has occured", change);

    if (change.operationType === "insert") {
        const messageDetails = change.fullDocument;
        pusher.trigger("messages", "inserted", 
            {
                name: messageDetails.user,
                message: messageDetails.message,
            }
    );
    } else {
      console.log("Error triggering pusher");
    }
  });
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

app.listen(port, () => console.log(`listening on port 5000:${port}`));
