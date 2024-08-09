const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.date}</p>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
