'use client';

import React from 'react'
import { Layout } from './Layout'
import { useProps } from './useProps'

const Banner = () => {
    // ①propsをスプレッド構文で渡す
    const { movie, truncate, error } = useProps();
    if (!movie) return null; // データがロードされるまで何も表示しない

    if (error) return <div>Error: {error}</div>;
    if (!movie) return <div>Loading...</div>;
    return (
        <>
            <Layout movie={movie} truncate={truncate} />
        </>
    )
}

export default Banner
