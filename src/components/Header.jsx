import SearchInput from './SearchInput';
import { FaSearch } from 'react-icons/fa';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <h1>Search</h1>

      <div>
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
};

export default Header;
