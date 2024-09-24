import {API_TOKEN, API_URL} from "../config.ts";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Movie, MoviesResponse} from '../types.ts'
import MovieCard from "../UI/MovieCard.tsx";
import Pagination from "../UI/Pagination.tsx";


const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState<number>(1)

    const getMovies = async (page: number = 1) => {
        const response = await axios.get<MoviesResponse>(`${API_URL}/movie`, {
            headers:{
                'X-API-KEY': API_TOKEN
            },
            params:{
                limit: 15,
                page: page
            }
        })
        console.log(response)
        setMovies(response.data.docs)
    }

    useEffect(() => {
        getMovies(page)
    }, [page])

    const handleNextPage = () => setPage(prevPage => prevPage + 1)
    const handlePrevPage = () => setPage(prevPage => Math.max(prevPage - 1, 1))

    return(
        <>
            <section className="movies">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {movies.map( (movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>

            <Pagination currentPage={page} onNext={handleNextPage} onPrev={handlePrevPage}/>
        </>
    )

}

export default Movies
