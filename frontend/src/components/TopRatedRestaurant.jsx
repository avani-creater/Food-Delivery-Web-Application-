import restaurant from "../utils/mockData";


function TopRatedRestaurent(props){

function handleClick(){
    const ratingMoreThan4 = props.searchName.filter((values)=>{
        return(
            values.rating>=4.0
        )
    })
    props.setSearchName(ratingMoreThan4);
}

    return(
        <>
        <button onClick={handleClick}>Top Rated Restaurant </button>
        </>
    )
}


export default TopRatedRestaurent;