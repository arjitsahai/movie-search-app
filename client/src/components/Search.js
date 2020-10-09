import React, { useState} from "react";
import { SearchContext } from './App';

const MOVIE_API_URL ="http://www.omdbapi.com/?i=tt3896198&apikey=24df75e3";


const Search = () => {
    const {dispatch} = React.useContext(SearchContext);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }
    const resetInputField = () => {
        setSearchValue("");
    }
    
    const callSearchFunction =(e) => {
        e.preventDefault();
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        fetch(MOVIE_API_URL)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.Search
                    });
                    resetInputField();
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        error: jsonResponse.Error
                    })
                }
            });
    };
    
    return (
        <form className="search">
            <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}
export default Search;