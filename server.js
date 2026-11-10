// Load environment variables
require("dotenv").config();

// Import packages
const express = require("express");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/TransactionRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

// Create Express application
const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Expense Tracker API is running"
  });
});

// Transaction routes
app.use("/api/transactions",    transactionRoutes);

// Handle unknown routes
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
});

// Error handling middleware
app.use(errorMiddleware);

// Port
const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();