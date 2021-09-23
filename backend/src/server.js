import express from "express";

const articlesInfo = {
  "learn-react": {
    upvotes: 0,
  },
  "learn-node": {
    upvotes: 0,
  },
  "my-thoughts-on-resumes": {
    upvotes: 0,
  },
};

const app = express();

app.use(express.json());

app.post("/api/articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;

  res
    .status(200)
    .send(`${articleName} now has ${articlesInfo[articleName].upvotes} votes.`);
});

app.listen(5000, () => console.log("Listening on port 5000"));
