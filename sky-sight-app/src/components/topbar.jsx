import React from "react";
import { ReactDOM } from "react";
import DateBar from "./DateBar/Datebar ";
import SearchBar from "./SearchBar/searchBar";

const Topbar=()=>{
    return(
        <>
        <div className=" flex justify-between items-center m-5">
        <SearchBar />
        <DateBar />
        </div>
        </>
    );

};

export default Topbar;