import React from "react";
import { ReactDOM } from "react";
import "../../components/SearchBar/searchBar.css"

const SearchBar=()=>{
    return(
        <div class="container m-10">
  <input placeholder='Search...' class='js-search' type="text" />
  <i class="fa fa-search"></i>
</div>
    );
};

export default SearchBar;