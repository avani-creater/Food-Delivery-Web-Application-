import Body from "./Body";
function RestaurantCard(props){
//    console.log("value",props.information);
const {name,rating,cuisine,Address,imageId}=props.information;

// 186 -90
   return(
    <div className="w-52 h-60">
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} className="w-full h-36 object-cover rounded-lg"/>
      <div className="w-full h-24">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-green-700 font-medium ">Rating - {rating}</p>
      <p className="font-normal text-base text-cuisineColor">{cuisine}</p>
      <p className="font-normal text-base text-cuisineColor" >{Address}</p>
      </div>
    </div>
   ) 
}

export default RestaurantCard;