import "./SearchBar.css";
import { getIcon } from "../../util/icon";

const SearchBar = () => {
    return (
        <>
            <div className="searchBar">
                <input type="text" name="search" id="search" className="searchBarInput" placeholder="Search for members, events, ..." />
                                                                    <span className="searchIcon">{getIcon("FaSearch")}</span>
            </div>
        </>
    )
}

export default SearchBar;