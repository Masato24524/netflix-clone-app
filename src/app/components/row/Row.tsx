'use client';

import axios from "../../../axios";
import { UseProps } from "./useProps";
import { Layout } from "./Layout";

interface RowProps {
    title: string;
    fetchUrl: string;
    isLargeRow: boolean;
}

export const Row = ({ title, fetchUrl, isLargeRow }: RowProps) => {
    console.log("rennding row component");
    console.log("Fetched URL:", fetchUrl); // この行が出力するURLを確認

    // async function fetchData() {
    //     const request = await axios.get(fetchUrl);
    //     console.log(request.data.results);
    // }

    // fetchData();

    const movies = UseProps(fetchUrl);

    return (    
        <div className="Row">
            {/* <h2>Row</h2> */}
            <Layout title={title} movies={movies} isLargeRow={isLargeRow} />
        </div>
    )

}