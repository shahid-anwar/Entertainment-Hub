import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./Details.css";
import SimpleNavigation from "../../Components/Main-Nav/main-nav";
const Details = () => {
  const { id } = useParams();

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "ead4f54597cceb47f04c834ccc207840",
              language: "en-US",
              //   page: 1,
              // If you want to limit the number of results, you can't use ?limit=1 here.
            },
          }
        );
        setFetchedData([response.data]);
        console.log("Data", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="main-container">
      <Header />
      <div className="details-container">
        {fetchedData.map((details) => (
          <div key={details.id} className="details-card">
            <div className="poster">
              <img
                className="image-poster"
                alt="poster-image"
                src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
              />
            </div>
            <div className="other-details">
              <span className="title">{details.title}</span>
              <span className="tagline">{details.tagline}</span>
              <span className="overview">{details.overview}</span>
            </div>
          </div>
        ))}
      </div>
      <SimpleNavigation />
    </div>
  );
};
export default Details;
