import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;



app.get("/api/auth/signup", (req, res) => {
  res.send("Sign up route");
});
app.get("/api/auth/login", (req, res) => {
  res.send("login route");
});
app.get("/api/auth/logout", (req, res) => {
  res.send("Logout route");
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
