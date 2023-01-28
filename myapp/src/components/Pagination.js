import React from 'react'

const Pagination = ({currentPage,totalPages,handlePreviousPage,handleNextPage}) => {
  return (
    <div className="btn-group">
    <button
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
    >
      ⬅ Prev
    </button>
    <span>{`Page ${currentPage}`}</span>
    <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      
    >
      Next ➡
    </button>
  </div>
  )
}

export default Pagination