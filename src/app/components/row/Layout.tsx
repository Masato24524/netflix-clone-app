import React from 'react'
import { Movie } from "../../type";
import YouTube from 'react-youtube';


interface LayoutProps {
    title: string;
    movies: Movie[];
    isLargeRow: boolean;
    trialUrl?: string | null;
    handleClick: (movie: Movie) => void;
}

interface Options {
    height: string;
    width: string;
    playerVars: {
        autoplay: 0 | 1 | number;
    };
}

export const Layout = ({ 
    title, 
    movies, 
    isLargeRow,
    trialUrl,
    handleClick, 
}: LayoutProps) => {
    const image_url = "https://image.tmdb.org/t/p/original/";

    const opts: Options = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='ml-5 text-white'>
            <h2>{title}</h2>
            <div className='flex overflow-y-hidden overflow-x-scroll p-5 hidden-scrollbar'>
                {movies.map((movie) => (
                    // ①DOM表示にmapを使う際はkeyを必ず設定する
                    <img 
                        key={movie.id}
                        className={
                            `object-contain w-full max-h-24 m-2 transform transition-transform duration-450 ${
                            isLargeRow ? "max-h-60 hover:scale-110" : "hover:scale-108" 
                        }`}
                        // ②使用する画像を使い分ける
                        src={`${image_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}

                        onClick={() => handleClick(movie)}
                        alt={movie.name} 
                    />
                ))}
            </div>

            {trialUrl && <YouTube videoId={trialUrl} opts={opts} />}
        </div>
    );
};