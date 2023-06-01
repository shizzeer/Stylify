import React from "react";

function ResultsInfo({category}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
            <div id="searchResults" className="cnt ">
                <h3>{category}</h3>
            </div>
        </nav>
    )
}

export default ResultsInfo;