require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const connectDB=require('./config/db');

const app=express(); //create an express instance
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 8000;

// Test Route
app.get("/", (req, res) => {
    res.send("AI Question Bank API is Running!");
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

