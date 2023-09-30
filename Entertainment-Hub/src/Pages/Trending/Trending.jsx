// import { useState } from "react";
import "./Trending.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Trending = () => {
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
              limit: 5,
              // If you want to limit the number of results, you can't use ?limit=1 here.
            },
          }
        );
        console.log("Count", response.headers["x-total-count"]);
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
      <span className="trending-header">TRENDING TODAY</span>
      <div className="trending-movies">
        {/* You can map over the fetchedData and display the information as needed */}
        {fetchedData &&
          fetchedData.map((movie) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/details/${movie.id}`}
              key={movie.id}
            >
              <div key={movie.id} className="movie-card">
                <img
                  className="poster-image"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <h2>{movie.title}</h2>
              </div>
            </Link>
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
        <div className="page-no">{pageCount}</div>
        <button
          className="next"
          onClick={() => setPageCount((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Trending;
