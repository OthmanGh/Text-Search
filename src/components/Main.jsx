import Article from './Article';

const Main = ({ articles }) => {
  if (articles.length === 0) return <h1>No Article found...</h1>;

  return (
    <div>
      <p>
        <strong>{articles.length} articles</strong> were found
      </p>
      {articles.map((article, i) => (
        <Article article={article} key={i} />
      ))}
    </div>
  );
};

export default Main;
