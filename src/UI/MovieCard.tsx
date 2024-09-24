import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <div className="relative w-full h-80 bg-gray-200 flex items-center justify-center">
                <img
                    src={movie.poster?.previewUrl || '/static/img/templa.jpg'}
                    alt={movie.name}
                    className="max-w-full max-h-full object-cover rounded-md"
                />
            </div>
            <h2 className="text-xl font-bold mt-4 mb-2">
                {movie.name || movie.alternativeName || 'Название не указано'}
            </h2>
            <p className="text-gray-600 mb-2">
                Год: {movie.year || 'Неизвестно'}
            </p>
            <p className="text-gray-800">
                {movie.description || movie.shortDescription || 'Описание недоступно'}
            </p>
            <p className="text-sm text-gray-500 mt-4">
                Длительность: {movie.movieLength ? `${movie.movieLength} мин` : 'Неизвестно'}
            </p>
            <p className="text-sm text-gray-500">
                Страна: {movie.countries?.map(country => country.name).join(', ') || 'Неизвестно'}
            </p>
            <p className="text-sm text-gray-500">
                Рейтинг возрастной категории: {movie.ageRating ? `${movie.ageRating}+` : 'Не указано'}
            </p>
        </div>
    );
};

export default MovieCard;
