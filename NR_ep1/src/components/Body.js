import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn">Top rated Restraunts</button>
        </div>
        <div className="res-container">
        {resList.map((restaurant) => (
            <RestrauntCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    )
  };

  export default Body;