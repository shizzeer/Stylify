import React from "react";

function ResultsInfo({category}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
            <div id="searchResults" className="cnt ">
                <h3>{category}</h3>
                <span className="info">  8 results.</span>
            </div>
        </nav>
    )
}

export default ResultsInfo;