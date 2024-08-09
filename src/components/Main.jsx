import Article from './Article';

const Main = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <Article article={article} key={i} />
      ))}
    </div>
  );
};

export default Main;
