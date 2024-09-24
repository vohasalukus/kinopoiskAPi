import React from 'react';

interface PaginationProps {
    currentPage: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onNext, onPrev }) => {
    return (
        <div className="pagination flex justify-center items-center space-x-4 py-4">
            <button
                onClick={onPrev}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:bg-gray-400"
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <span className="text-lg font-medium">{currentPage}</span>

            <button
                onClick={onNext}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
