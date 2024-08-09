import axios from "../../../axios";
import { useEffect, useState } from "react";
import { Movie } from "../../type";
import { requests } from "@/request";

// ②データの整形

export const useProps = (fetchUrl: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [trialUrl, setTrialUrl] = useState<string | null>("");

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

    const handleClick = async (movie: Movie) => {
        if (trialUrl) {
            setTrialUrl("");
        } else {
            const moviePlayUrl = await axios.get(requests.fetchMovieVideos(movie.id));
            setTrialUrl(moviePlayUrl.data.results[0]?.key);
        }
    };

    return {
        movies,
        trialUrl,
        handleClick,
    }

}