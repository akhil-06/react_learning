import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  //  console.log("hello");
  useEffect(() => {
    // console.log("Use effect Rendered!!!");
    fetchData();
  },[]);

  // console.log("Body is Rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  };

    return (
      
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            // console.log("hello")
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}>
            Top rated Restraunts
            </button>
        </div>
        <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
            <RestrauntCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    )
  };

  export default Body;