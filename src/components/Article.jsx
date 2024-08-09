import formatDate from '../utils/helper';

const Article = ({ article }) => {
  return (
    <div className="  border-b-slate-500 border-2 py-4 mb-10 max-w-[50%] flex flex-col gap-5">
      <h2 className="text-3xl font-bold">{article.title}</h2>
      <p>
        <em>{formatDate(article.date)}</em>
      </p>
      <p className="text-gray-600 text-xl font-semibold">{article.content}</p>
    </div>
  );
};

export default Article;
