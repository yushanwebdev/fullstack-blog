// Refer this Guide to setup the MongoDB in the app (https://github.com/mongodb/node-mongodb-native)
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

const uri = "mongodb+srv://yushan:tWf42UXt8VFQwYk@cluster0.o861a.mongodb.net";
const client = new MongoClient(uri);
const dbName = "fullstack-blog";

app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;

  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    const articleInfo = await db
      .collection("articles")
      .find({ name: articleName })
      .toArray();

    res.status(200).json(articleInfo);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
});

app.post("/api/articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;

  res
    .status(200)
    .send(`${articleName} now has ${articlesInfo[articleName].upvotes} votes.`);
});

app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({
    username,
    text,
  });

  res.status(200).send(articlesInfo[articleName]);
});

app.listen(5000, () => console.log("Listening on port 5000"));
