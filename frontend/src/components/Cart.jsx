
import { useDispatch } from "react-redux";
import  {addItem, removeItem} from '../utils/cartSlice'
import { useSelector } from "react-redux";
function Cart(){

    const cartItems = useSelector(state=>state.cart.items);
        const dispatch= useDispatch();

   function handleAddItems(item){
    console.log('item',item)
dispatch(addItem(item));
   }

function handleRemoveItems(item){
    dispatch(removeItem(item))
}
    
   return(
    <div calssName ="flex flex-wrap m-4">
         {cartItems.map((res)=>{
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
   onClick={()=>handleAddItems(res)}>Add items
   <b> {res.quantity}</b>
   </button>

   <button className="border bg-green-300 h-8 w-8 relative top-16 right-5"
   onClick={()=>handleRemoveItems(res)}>Remove item
   </button>

      </div>
    );
   })}
    </div>
  
)
}


export default Cart;