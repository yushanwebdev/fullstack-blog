import express from "express";

const app = express();

app.get("/hello", (req, res) => res.send("Hello!"));

app.listen(5000, () => console.log("Listening on port 5000"));
