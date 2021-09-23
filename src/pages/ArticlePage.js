import ArticleContent from "../article-content";

export default function ArticlePage({ match }) {
  const name = match.params.name;
  const article = ArticleContent.find((item) => item.name === name);

  if (!article) {
    return <h1>Article does not exist!</h1>;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
    </>
  );
}
