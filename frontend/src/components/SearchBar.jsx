import restaurant from '../utils/mockData'

function SearchBar(props){
 let text;

    function handleChange(e){
        text=e.target.value;
        console.log(text);

    }

    function handleClick(){
console.log("on sumiting",text);
const filteredRestaurant = restaurant.filter((items)=>{
    return items.name.toLowerCase().includes(text.toLowerCase());
})
console.log("after filter",filteredRestaurant);

props.showFilteredRestaurant(filteredRestaurant);
    }

    return(
        <>
        <input type="text" placeholder="enter food name" className="bg-slate-600" onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
        </>

    )
}
export default SearchBar;
