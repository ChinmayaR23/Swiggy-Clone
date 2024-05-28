import React, { useEffect, useState } from "react";
import Restaurant from "./RestaurantCard";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const api_call = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await api_call.json();
        const LIVE_API = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRest(LIVE_API);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = () => {
    const searchRes = listOfRest.filter((res) => res.info.name.toLowerCase().includes(inputText.toLowerCase()));
    setListOfRest(searchRes);
  };

  const handleFilter = () => {
    const filtered = listOfRest.filter((res) => res.info.avgRating > 4.2);
    setListOfRest(filtered);
  };

  return (
    <div className="Body">
      <div className="features">
        <div className="search">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <button className="flt-btn" onClick={handleFilter}>Top Restaurants</button>
      </div>
      <div className="cards">
        {listOfRest.map((rest) => (
          <Restaurant key={rest.info.id} obj={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
