// import { useState } from "react";
import "./Movies.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import SimpleNavigation from "../../Components/Main-Nav/main-nav";

const Movies = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "c45a857c193f6302f2b5061c3b85e743",
              language: "en-US",
              page: pageCount,
              // If you want to limit the number of results, you can't use ?limit=1 here.
            },
          }
        );

        setFetchedData(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageCount]); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <Header />
      <span className="movies-header"> DISCOVER MOVIES</span>
      <div className="movies">
        {/* You can map over the fetchedData and display the information as needed */}
        {fetchedData?.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              className="poster-images"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="prev"
          disabled={pageCount === 1}
          onClick={() => setPageCount((prev) => prev - 1)}
        >
          Previous
        </button>
        <span className="page-no">{pageCount}</span>
        <button
          className="next"
          onClick={() => setPageCount((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      <SimpleNavigation />
    </div>
  );
};

export default Movies;
