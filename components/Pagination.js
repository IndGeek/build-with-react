import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
            <span
            key={i}
            className={`cursor-pointer select-none px-3 py-1 mx-2 rounded-md text-white ${
                currentPage === i ? 'bg-gray-500' : 'bg-black'
            }`}
            onClick={() => setCurrentPage(i)}
            >
            {i}
            </span>
        );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination fixed bottom-10 flex justify-center w-full">

        <button
            disabled={currentPage <= 1}
            className={`cursor-pointer select-none px-3 py-1 mx-2 rounded-md text-white ${
                currentPage <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-black'
            }`}
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            >
        {'<'}
        </button>


        {renderPageNumbers()}

        <button
        disabled={currentPage >= totalPages}
        className={`cursor-pointer select-none px-3 py-1 mx-2 rounded-md text-white ${
            currentPage >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-black'
        }`}
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
        {'>'}
        </button>
    </div>
  );
};

export default Pagination;
