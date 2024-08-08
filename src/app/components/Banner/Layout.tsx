'use client';

import React from 'react'
import { Movie } from "../../type";


interface LayoutProps {
    movie: Movie | undefined;
    truncate: (str: string, n: number) => string;
}

export const Layout = ({ movie, truncate }: LayoutProps) => {
    const image_url = "https://image.tmdb.org/t/p/original/";

    return (
        <header 
            className='text-white object-contain'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("http://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className='ml-8 pt-36'>
                <h1 className='text-6xl font-extrabold pb-1'>{movie?.name}</h1>
                    <div className='W-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]'>
                        {movie && truncate(movie?.overview, 150)}
                    </div>

            </div>
            {/* ① Tailwindのグラデーション */}
            <div className='h-[7.4rem] bg-gradual-gradient' />
        </header>
    );
};