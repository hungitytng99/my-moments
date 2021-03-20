import { useState } from "react";
import "./SearchInput.scss"
function SearchInput() {
    const [ focusSearch, setFocusSearch ] = useState(false);

    return (
        <div className="search">
            {focusSearch?<input className="search__input" type="text" placeholder="Search" onBlur={()=> setFocusSearch(!focusSearch)} autoFocus={true}/>:""}
            <i className="search__icon fas fa-search"></i>
            <i className="close__icon far fa-times-circle" onClick={() => setFocusSearch(!focusSearch)}></i>
            {!focusSearch && <div className="search__text flex-center" onClick={() => setFocusSearch(!focusSearch)}>
                <i className="search__text-icon fas fa-search"></i>
                <span>Search</span>
            </div>}
        </div>

    )
}
export default SearchInput;