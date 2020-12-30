const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I3HYtAtOXsh2jbL4PKXyi30bZZpPwqk3oh2TkKBBhx2n6C8rYkoUx4wusNZPQe8osLxnfqmRUhLtiyu6Wj60iac00lhw5LXpG"
);

// app config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// api health check call call *** tested in emulation
app.get("/", (request, response) => response.status(200).send("hello World"));

app.get("/AJ", (request, response) => response.status(200).send("AJ is Awesome"));

// actual api calls
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listener

exports.api = functions.https.onRequest(app);

//my endpoint
//(http://localhost:5001/bouy-af08d/us-central1/api)
