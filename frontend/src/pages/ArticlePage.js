import { useEffect, useState } from "react";
import articleContent from "../article-content";
import AddCommentForm from "../components/AddCommentForm";
import ArticleList from "../components/ArticleList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import NotFoundPage from "./NotFoundPage";

export default function ArticlePage({ match }) {
  const name = match.params.name;
  const article = articleContent.find((item) => item.name === name);
  const otherArticles = articleContent.filter((item) => item.name !== name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };

    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
}
