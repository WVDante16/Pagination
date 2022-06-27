import React from 'react';

function Pagination({nextPage, prevPage, goToPage, pages, goToPrevPage, goToNextPage}) {
    let pageButtons = [];
    
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button 
                            key={i} 
                            onClick={() => goToPage(i)}>
                            {i}
                        </button>)
    }
    return (
        <div>
            {prevPage && (<button onClick={goToPrevPage}>◄</button>)}
            {pageButtons}
            {nextPage && (<button onClick={goToNextPage}>►</button>)}
        </div>
    );
}

export default Pagination;