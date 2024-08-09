import { formatDate } from '../utils/helper';
import { highlightText } from '../utils/highlightText';
const Article = ({ article, searchQuery }) => {
  const highlightedTitle = highlightText(article.title, searchQuery);
  const highlightedContent = highlightText(article.content, searchQuery);

  return (
    <div className="border-b-slate-500 border-2 py-4 mb-10 max-w-[50%] flex flex-col gap-5">
      <h2 className="text-3xl font-bold">{highlightedTitle}</h2>
      <p>
        <em>{formatDate(article.date)}</em>
      </p>
      <p className="text-gray-600 text-xl font-semibold">{highlightedContent}</p>
    </div>
  );
};

export default Article;
