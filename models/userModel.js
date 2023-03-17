const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    mobileNumber: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    carrierObjective: {
      type: String,
      default: "",
    },
    education: {
      type: Array,
      default: [],
    },
    skills: {
      type: Array,
      default: [],
    },
    experience: {
      type: Array,
      default: [],
    },
    projects: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
