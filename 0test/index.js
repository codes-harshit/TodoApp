import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(cookieParser());
app.get("/", (req, res) => {
  res.cookie("name", "harshit");
  res.json({ message: "Cookie Done" });
});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.json({ message: "Cookie Done" });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
