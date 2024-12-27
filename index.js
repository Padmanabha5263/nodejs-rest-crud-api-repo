import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./src/config/db.config.js";
import { userRoutes } from "./src/routes/userRoutes.js";

const app = express();
const PORT = 5000;

connectDB();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world from the ");
});

app.use("/api/users", userRoutes);
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
