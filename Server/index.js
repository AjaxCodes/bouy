import express from "express";
import mongoose from "mongoose";
import Messages from "./DbMessages.js";


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json)

const key = 
"mongodb+srv://ajaxCodes:GhostRecon1121@cluster0.pywev.mongodb.net/BoutChatApp?retryWrites=true&w=majority";

mongoose.connect(key, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("hello world"));


app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(`new message created: \n ${data}`)
        }
    })
})


app.listen(port, () => console.log(`listening on port 5000:${port}`));