import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req, res) => {
//   res.send("API is running...!");
// });
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server started on port ${PORT}`);
});
