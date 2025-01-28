
function TopRatedRestaurent(props){

function handleClick(){
    const ratingMoreThan4 = props.searchName.filter((values)=>{
        return(
            values.rating>4.0
        )
    })
    props.setSearchName(ratingMoreThan4);
}

    return(
        <div className="bg-orange-500 w-72 h-10 rounded-2xl my-6 text-white text-center py-1 cursor-pointer hover:bg-cyan-500">
        <button onClick={handleClick} className=" font-semibold text-lg ">Filter 👉 Ratings 4.0+ </button>
        </div>
    )
}

export default TopRatedRestaurent;
