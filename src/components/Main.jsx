import Article from './Article';

const Main = ({ articles }) => {
  if (articles.length === 0) return <h1>No Article found...</h1>;

  return (
    <div className="h-full w-full ">
      <p className="mb-10 text-xl">
        <strong>{articles.length} posts</strong> were found
      </p>
      {articles.map((article, i) => (
        <Article article={article} key={i} />
      ))}
    </div>
  );
};

export default Main;
