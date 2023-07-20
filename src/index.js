import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: './src/.env' });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => { console.log('MongoDB connected'); })
  .catch((err) => { console.log('MongoDB error', err); });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});