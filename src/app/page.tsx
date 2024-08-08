import { requests } from "@/request";
console.log(requests);
import { Row } from "./components/row/Row";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
// import instance from "@/axios";

export default function App() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  console.log("API_KEY:", API_KEY); // ここで環境変数の値をログに出力
  console.log(requests);
//   console.log("rennding app page");

  return (
    <div className="App">
      <Header />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} isLargeRow={false} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} isLargeRow={false} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} isLargeRow={false} />
    </div>
  );
}
