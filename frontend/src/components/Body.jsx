
import { useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import TopRatedRestaurant from "./TopRatedRestaurant";

function Body(){

const [searchName,setSearchName]= useState([]);

// Function to update filtered restaurant data
function showFilteredRestaurant(data){
  console.log("show filteredREstaurant",data)
 setSearchName(data)
}

useEffect(()=>{
  console.log("use effect is called");
  fetchRestaurant();
},[]);

async function fetchRestaurant(){ 

const accessToken = localStorage.getItem("accessToken");
  const response = await fetch('http://localhost:3000/api/restaurants',{

    method: "GET",
    headers: {
     "Content-Type":"application/json",
     authorization: `JWT ${accessToken}`
    },
  
  });
  const result =await response.json();
  setSearchName(result);
};

   return(
        <div className="w-carouselwidth mx-auto">   
        <h2 className="text-headingColor font-extrabold text-2xl">Restaurants with online food delivery</h2> 
      
      <SearchBar
        restaurantData={searchName} // Pass the data for filtering
        showFilteredRestaurant={showFilteredRestaurant} // Function to update filtered data
      />

      <TopRatedRestaurant searchName={searchName} setSearchName={setSearchName}/>

  
<div className=" grid grid-cols-4 gap-3  cursor-pointer">
{
      searchName.map(values=>{
        return (
          <Link key={values._id} to={`/restaurant/${values._id}`}>
          <RestaurantCard information={values}/>
          </Link>
        )
      })
   }  
</div>
        </div>
    )
}

export default Body;
