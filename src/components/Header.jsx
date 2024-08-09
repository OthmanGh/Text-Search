import SearchInput from './SearchInput';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-10">Search</h1>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default Header;
