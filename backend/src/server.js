import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => res.send("Hello!"));

app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(5000, () => console.log("Listening on port 5000"));
