import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./src/config/db.config.js";
import { userRoutes } from "./src/routes/userRoutes.js";

const app = express();
const PORT = 5000;

//function that will create database connection
connectDB();

//application/json  to parse body object of the request
app.use(bodyParser.json());

// just greeting message
app.get("/", (req, res) => {
  res.send("Hello world from the ");
});

// setting the headers that will mitigate CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS,GET,POST,PUT,DELETE,PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// routers
app.use("/api/users", userRoutes); // userroutes from the separate routes file

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
