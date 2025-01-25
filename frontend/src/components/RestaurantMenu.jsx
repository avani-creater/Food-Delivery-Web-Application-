import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import restaurant from "../utils/mockData";
import { useDispatch } from "react-redux";
import  {addItem} from '../utils/cartSlice'
function RestaurantMenu(){

  const [menuItems,setMenuItems] =useState([]);
  const dispatch = useDispatch();
    const params = useParams();
console.log("params - ",params)
   useEffect(()=>{
    fetchMenuItems();
   })

   function handleAddItems(item){
    console.log('item',item)
dispatch(addItem(item));
   }

   async function fetchMenuItems() {
    const response = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66500&lng=77.44770&restaurantId=311388&submitAction=ENTER`)
    const data =response.json();
    console.log(data)
   }
    
   {restaurantMenuItems.map((res)=>{
    return (
      <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
  
       <div className="flex flex-col w-3/4">
        <h1>{res.card.info.name}</h1>
        <h1>{res.card.info.defaultPrice/100}</h1>
        <h1>{res.card.info.description}</h1>
       </div>
  <img
  className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
  src={'http:image'} alt=""
  />
  
  <button className="border bg-green-300 h-8 w-8 relative top-16 right-5"
   onClick={()=>handleAddItems(res)}>Add +</button>
      </div>
    );
   })}
  }


export default RestaurantMenu;