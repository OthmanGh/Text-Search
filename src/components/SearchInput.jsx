const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return <input type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search articles..." />;
};

export default SearchInput;
