const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      className="w-[80%] p-4 rounded placeholder:text-gray-400 placeholder:font-bold mb-10 outline-slate-500"
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      placeholder="Search articles..."
    />
  );
};

export default SearchInput;
