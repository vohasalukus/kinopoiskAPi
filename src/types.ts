export interface Movie {
    id: number;
    name: string | undefined;
    alternativeName: string | null;
    type: string;
    year: number | null;
    description: string | null;
    shortDescription: string | null;
    movieLength: number | null;
    ageRating: number | null;
    poster: {
        url: string;
        previewUrl: string;
    } | null;
    countries: {
        name: string;
    }[];
    genres: {
        name: string;
    }[];
}

export interface MoviesResponse {
    docs: Movie[];
}
