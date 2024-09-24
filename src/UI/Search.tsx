import React, { useState } from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query); // здесь передаем строку
    };

    return (
        <form onSubmit={handleSearch} className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск фильмов..."
                className="border rounded-lg px-4 py-2 w-full"
            />
            <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
                Искать
            </button>
        </form>
    );
};

export default Search;
