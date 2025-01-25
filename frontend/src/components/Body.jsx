
import { useState, useEffect} from "react";
import restaurant from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import TopRatedRestaurent from "./TopRatedRestaurant";

function Body(){

const [searchName,setSearchName]= useState([]);

function showFilteredRestaurant(data){
  console.log("show filteredREstaurant",data)
 setSearchName(data)
}

useEffect(()=>{
  console.log("use effect is called");
  fetchRestaurant();
},[]);

async function fetchRestaurant(){ 
  const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28 6126255&Ing=77.04108959999999&page_type=DESKTOP_WEB_LISTING');
  const result =await response.json();
  setSearchName(result?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  console.log(result);
};


    return(
        <div className="w-carouselwidth mx-auto">   
        <h2 className="text-headingColor font-extrabold text-2xl">Restaurants with online food delivery</h2> 
      <SearchBar showFilteredRestaurant={showFilteredRestaurant}/>
      <TopRatedRestaurent searchName={searchName} setSearchName={setSearchName}/>

<div className=" grid grid-cols-4 gap-3  cursor-pointer">
{
      searchName.map(values=>{
        return (
          <>
          <Link to={`/restaurant/${values.id}`}>
          <RestaurantCard key={values.info.id} information={values.info.id}/>
          </Link>
          </>
        )
      })
   }  
</div>
        </div>
    )
}

export default Body;