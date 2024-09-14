const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => /^[0-9]{10}$/.test(value), // Validate as a 10-digit number
        message: "Phone number must be a 10-digit number",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6, // Adjust the minimum length as needed
    },
  },
  { timestamps: true }
);

const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;
