export default function SearchFilter({searchTerm, setSearchTerm}) {
  return (
    <div className="filter-container">
        <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input" 
            autoComplete="off"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  );
}