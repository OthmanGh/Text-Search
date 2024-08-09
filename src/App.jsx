import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { articles as dummyArticles } from './constants';
import Author from './components/Author';

const App = () => {
  const [articles, setArticles] = useState(dummyArticles);
  const [searchQuery, setSearchQuery] = useState('');

  const searchedArticle =
    searchQuery.length > 0 ? articles.filter((article) => `${article.title}`.toLowerCase().includes(searchQuery.toLowerCase())) : articles;

  return (
    <div className="h-[100%] bg-zinc-200 py-8 px-10">
      <div className="flex items-center justify-around">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Author />
      </div>
      <Main articles={searchedArticle} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
