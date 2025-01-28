import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faCircleQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import { useState } from "react";


function Header(){

    // we can replace appstore <-> state
    const items = useSelector((state) => state.cart.items);

    const onlineStatus = useOnlineStatus();

const [isVisible, setIsVisible] = useState(false);

function openModal(){
    setIsVisible(true);
}

function closeModal(){
    setIsVisible(false);
}

    return(
        <>
       <header className="flex justify-between px-5 h-16 border  shadow-lg shadow-slate-400 ">
        <div>
            <img src="/website-logo.jpg" className=" h-full"/>
        </div>

       <ul className="flex flex-wrap items-center justify-around w-3/5">

       <li className="font-medium text-headerColor">
           {onlineStatus?"online 🟢":"ofline 🔴"}
            </li>
            <li className="font-medium text-headerColor">
             <Link to="/">Home</Link>
            </li>

            <li className="font-medium text-headerColor">
            <FontAwesomeIcon icon={faSearch} className="px-3"/>
             <Link to="/search">Search</Link>
            </li>

            <li className=" font-medium text-headerColor">
            <FontAwesomeIcon icon={faCircleQuestion} className="px-3"/>
                <Link to="/offer">Help</Link>
            </li>

            <li className="font-medium text-headerColor">
             <FontAwesomeIcon icon={faUser} className="px-3"/>
                 <Link onClick={openModal}>Sign in</Link>
             </li>

            <SignIn isVisible={isVisible} onClose={closeModal}></SignIn>

            <li className="font-medium text-headerColor">

          <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="px-3"/>
                <Link to="/cart">Cart</Link>
                {items.length}

          </Link>
            </li>
        </ul>
       </header>
        </>
    )
}
export default Header;