import RestrauntCard from "./RestrauntCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  const [filterRestraunt, setfilterRestraunt] = useState([]);


  const [searchText, setSearchText] = useState("");

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

    const jsonData = await data.json();
  //  console.log(jsonData);
   async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      // initialize checkData for Swiggy Restaurant data
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }
  const resData = await checkJsonData(jsonData);
    console.log(resData);
    setListOfRestraunt(resData); 
    setfilterRestraunt(resData); 
  };

  //conditional rendering
  if(listOfRestaurants.length === 0){
    return <Shimmer />
  }

    return (      
      <div className="body">
        <div className="filter">
          <div className="search">
            <input className="search-box" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={()=>{
              console.log(searchText);
              const filteredRestraunt = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

              setfilterRestraunt(filteredRestraunt);
            }}>Search</button>
          </div>
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
        {filterRestraunt.map((restaurant) => (
            <RestrauntCard key ={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    )
  };

  export default Body;