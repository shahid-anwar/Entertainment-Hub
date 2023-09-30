import "./Search.css";
import Header from "../../Components/Header/Header";
import SimpleNavigation from "../../Components/Main-Nav/main-nav";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

export default function Searches() {
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchData.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "c45a857c193f6302f2b5061c3b85e743",
            language: "en-US",
            query: searchData,
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  console.log({ searchResults });

  return (
    <div className="main-container">
      <Header />
      <div className="search-div">
        <div className="search-header">
          <h2 className="search-movie">SEARCH MOVIES </h2>
        </div>
        <div className="box-btn">
          <div>
            <input
              type="text"
              className="search-box"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="Search movies..."
            />
          </div>
          <div className="btn">
            <button className="search-btn" onClick={handleSearch}>
              SEARCH
            </button>
          </div>
        </div>
        <div>
          <div className="all-searched-data">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                style={{ listStyleType: "none" }}
                className="searched-data"
              >
                <img
                  className="poster-search-image"
                  alt="IMAGE"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <h2 className="title">{movie.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SimpleNavigation />
    </div>
  );
}
