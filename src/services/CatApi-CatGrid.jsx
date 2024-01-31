import React, { useState, useEffect } from 'react';


const CatGrid = () => {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.thecatapi.com/v1/images/search?limit=21';
      const api_key = 'live_5oFkLgqzJlEQoqfSM9wGAxXNFmRO04OisLkOKupqH5gc2PLAurQ9nUASoiraLDKK';

      try {
        const response = await fetch(url, {
          headers: {
            'x-api-key': api_key,
          },
        });
        const data = await response.json();
        setImagesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="maincontent">
    <div className="imgrid" id="grid"> 
      {imagesData.map((imageData, index) => (
        <div className="col col-lg" key={index}>
          <img src={imageData.url} alt={`Cat ${index}`} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CatGrid;