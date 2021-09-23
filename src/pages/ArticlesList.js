import { Link } from "react-router-dom";
import articleContent from "../article-content";

export default function ArticleList() {
  return (
    <>
      <h1>Articles</h1>
      {articleContent.map((item, key) => (
        <Link
          to={`/article/${item.name}`}
          className="article-list-item"
          key={key}
        >
          <h3>{item.title}</h3>
          <p>{item.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
}
