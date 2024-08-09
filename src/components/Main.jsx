import Article from './Article';

const Main = ({ articles, searchQuery }) => {
  if (articles.length === 0) return <h1 className="text-red-900 font-bold text-xl">No Post found...</h1>;

  return (
    <div className="h-full w-full ">
      <p className="mb-10 text-xl">
        <strong>{articles.length} posts</strong> were found
      </p>
      {articles.map((article, i) => (
        <Article article={article} key={i} searchQuery={searchQuery} />
      ))}
    </div>
  );
};

export default Main;
