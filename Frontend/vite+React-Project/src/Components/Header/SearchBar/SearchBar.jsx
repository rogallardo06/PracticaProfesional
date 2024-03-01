function SearchBar() {
    return (
        <form className="flex">
            <input className="form-control me-2 bg-slate-100" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}
export default SearchBar