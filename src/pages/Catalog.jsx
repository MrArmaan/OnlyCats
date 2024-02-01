import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import "../styles/Catalog.css";

const Catalog = ({ onClick }) => {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.thecatapi.com/v1/images/search?limit=21";
      const api_key = "live_5oFkLgqzJlEQoqfSM9wGAxXNFmRO04OisLkOKupqH5gc2PLAurQ9nUASoiraLDKK";

      try {
        const response = await fetch(url, {
          headers: {
            "x-api-key": api_key,
          },
        });
        const data = await response.json();
        setImagesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="maincontent">
      <div className="imgrid" id="grid">
        {imagesData.map((imageData, index) => (
          <div className="card" key={index}>
            <img src={imageData.url} alt={`Cat ${index}`} onClick={() => onClick(imageData)} />
            <h1 className="name">{faker.person.fullName()}</h1>
            <p className="gender">{faker.person.sex()}</p>
            <p className="star">{faker.person.zodiacSign()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Catalog.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Catalog;
