import articleContent from "../article-content";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";

export default function ArticlePage({ match }) {
  const name = match.params.name;
  const article = articleContent.find((item) => item.name === name);
  const otherArticles = articleContent.filter((item) => item.name !== name);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
}