import Body from "./Body";
function RestaurantCard(props){

//    console.log("value",props.information);

const {name,rating,cuisines,deliveryTime,imageUrl} = props.information;

// 186 -90

   return(
    <div className="w-56 h-72">
    <img src={imageUrl} alt="img" className="w-full h-2/3 rounded-lg" />
      <div className="w-full h-24">
      <p className="font-bold text-lg text-slate-900 font-sans">{name}</p>
      <p className="font-semibold text-base text-gray-500">{rating} ⭐</p>
      <p className="font-semibold text-base text-gray-500">{cuisines}</p>
      <p className="font-semibold text-base text-gray-500" >{deliveryTime}</p>
      </div>
    </div>
   ) 
}

export default RestaurantCard;