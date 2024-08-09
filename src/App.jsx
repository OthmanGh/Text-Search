import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { articles as dummyArticles } from './constants';
import './index.css';

const App = () => {
  const [articles, setArticles] = useState(dummyArticles);
  const [searchQuery, setSearchQuery] = useState('');

  const searchedArticle =
    searchQuery.length > 0 ? articles.filter((article) => `${article.title}`.toLowerCase().includes(searchQuery.toLowerCase())) : articles;

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main articles={searchedArticle} />
    </div>
  );
};

export default App;
