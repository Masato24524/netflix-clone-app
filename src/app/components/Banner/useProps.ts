'use client';

import axios from "../../../axios";
import { useEffect, useState } from "react";
import { Movie } from "../../type";
import { requests } from "@/request";

export const useProps = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request.data.results);
    
                // ① 取得した映像データからランダムでmovieに格納
                if (request.data.results && request.data.results.length > 0) {
                    setMovie(
                        request.data.results[
                            Math.floor(Math.random() * request.data.results.length)
                    ],
                );
            } else {
                setError("No movies found");
            }
        } catch(err) {
                setError("Failed to fetch movie data");
                console.error(err);
            }

        }
        fetchData();
    }, []);

    // ② descriptionの切り捨て用の関数
    const truncate = (str: string | undefined, n: number): string => {
        if (!str) {
            return "";
        }
        return str.length > n ? str.substring(0, n - 1) + "..." : str;
    };

    return {
        movie,
        truncate,
        error
    };
};