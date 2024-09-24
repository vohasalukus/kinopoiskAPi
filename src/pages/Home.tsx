import React from 'react';
import Movies from '../components/Movies';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Популярные фильмы</h1>
            <Movies />
        </div>
    );
};

export default Home;


