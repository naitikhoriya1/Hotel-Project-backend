import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/bookingsite");

const connect = mongoose.connection;

connect.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});
connect.on("error", (err) => {
  console.log("Error connecting to MongoDB: ", err);
});

const formSchema = new mongoose.Schema({
  "hotel name": String,
  email: String,
  "Mobile No ": String,
  rent: String,
  Location: String,
  hotelimage: String,
});

const Form = mongoose.model("Form", formSchema);

export { Form };
