import React from "react";
import { SearchContext } from './App';
const Header = () => {
    const {state, reload} = React.useContext(SearchContext);
    return (
        <header className="App-header" onClick={reload}>
            <h1>{state.text}</h1>
        </header>
    );
};

export default Header;