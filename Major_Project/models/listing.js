const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1717023921~exp=1717027521~hmac=d3a621876203e50271ff83f30f1c84f53fd5ac73fbbb38d990e580f15680b1b5&w=1060",
    set: (v) =>
      v === ""
        ? "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1717023921~exp=1717027521~hmac=d3a621876203e50271ff83f30f1c84f53fd5ac73fbbb38d990e580f15680b1b5&w=1060"
        : v,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;
