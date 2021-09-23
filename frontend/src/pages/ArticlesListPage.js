import ArticleList from "../components/ArticleList";
import articleContent from "../article-content";

export default function ArticleListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articleContent} />
    </>
  );
}
