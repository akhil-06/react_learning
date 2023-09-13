import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
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