import axios from "../../../axios";
import { useEffect, useState } from "react";
import { Movie } from "../../type";

// ②データの整形

export const UseProps = (fetchUrl: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    // ①APIの取得はuseEffectを使う
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);

            const movies = request.data.results.map((movie: Movie) => ({
                id: movie.id,
                name: movie.name,
                poster_path: movie.poster_path,
                backdrop_path: movie.backdrop_path,
            }));
            setMovies(movies);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return movies;
}