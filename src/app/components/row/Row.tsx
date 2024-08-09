'use client';

import axios from "../../../axios";
import { useProps } from "./useProps";
import { Layout } from "./Layout";

interface RowProps {
    title: string;
    fetchUrl: string;
    isLargeRow: boolean;
}

export const Row = ({ title, fetchUrl, isLargeRow }: RowProps) => {
    console.log("rennding row component");
    console.log("Fetched URL:", fetchUrl); // この行が出力するURLを確認

    const movies = useProps(fetchUrl);

    return (    
        <div className="Row">
            {/* <h2>Row</h2> */}
            <Layout title={title} isLargeRow={isLargeRow} {...useProps(fetchUrl)} />
        </div>
    )

}