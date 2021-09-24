// Refer this Guide to setup the MongoDB latest version in the app (https://github.com/mongodb/node-mongodb-native)
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

const uri = "mongodb+srv://yushan:tWf42UXt8VFQwYk@cluster0.o861a.mongodb.net";
const client = new MongoClient(uri);
const dbName = "fullstack-blog";

const withDB = async (operations, res) => {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const collection = client.db(dbName).collection("articles");

    await operations(collection);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;

  withDB(async (collection) => {
    const articleInfo = await collection.findOne({ name: articleName });

    res.status(200).json(articleInfo);
  }, res);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const articleName = req.params.name;

  withDB(async (collection) => {
    await collection.updateOne({ name: articleName }, { $inc: { upvotes: 1 } });

    const updatedArticleInfo = await collection.findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (collection) => {
    await collection.updateOne(
      { name: articleName },
      { $push: { comments: { username, text } } }
    );

    const updatedArticleInfo = await collection.findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  });
});

app.listen(5000, () => console.log("Listening on port 5000"));
