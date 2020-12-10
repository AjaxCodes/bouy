import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default mongoose.model("messageContent", messagesSchema);
