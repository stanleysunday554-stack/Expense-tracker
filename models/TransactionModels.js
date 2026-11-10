const mongoose = require("mongoose");

// Create transaction schema
const transactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Transaction title is required"],
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0.01, "Amount must be greater than zero"]
    },

    type: {
      type: String,
      required: [true, "Transaction type is required"],
      enum: ["income", "expense"]
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    },

    date: {
      type: Date,
      required: true,
      default: Date.now
    },

    paymentMethod: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// Create Transaction model
const Transaction = mongoose.model(
  "Transaction",
  transactionSchema
);

module.exports = Transaction;