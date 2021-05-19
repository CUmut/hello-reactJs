import React from "react";

const SearchForm = props => {
    return (
     <form>
        <input
           name="search"
           placeholder="search user"
           value = {props.search}
           onChange={props.onSearchChange}
        />
     </form>
    );
};
export default SearchForm;