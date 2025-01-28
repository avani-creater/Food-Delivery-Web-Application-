
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function SearchBar({ restaurantData, showFilteredRestaurant }){
    let text = ""; // Local variable for search input

    function handleChange(e){
        text=e.target.value;
        console.log(text);

    }

    function handleClick(){
console.log("on sumiting",text);

const filteredRestaurant = restaurantData.filter((items)=>
items.name.toLowerCase().includes(text.toLowerCase())
);
console.log("after filter",filteredRestaurant);

showFilteredRestaurant(filteredRestaurant);
    }

    return(
        <div className='h-12 flex justify-center my-8'>
        <input type="text" placeholder="Search for restaurant, item or more" className="border border-cyan-800 h-10 w-96 rounded-lg mr-1 pl-2"   onChange={handleChange}/>
        <button onClick={handleClick}><FontAwesomeIcon icon={faSearch} className="bg-black rounded-full p-2 text-white "/></button>
        </div>

    )
}
export default SearchBar;


