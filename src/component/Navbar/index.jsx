import React, {useState} from "react";
import './navbar.css'
import { FaBars } from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

const Navbar = () => {

    const [sidebar,setSidebar] = useState(false)
    const [toggleIcon, setToggleIcon] = useState(false)
    return (
        <div className="navbar">
            <h2 className="logo">Kawa Space</h2>

            <ul className={sidebar ? "sidebarView" : "rightside"}>
                <li><a href="/" className="product active">Product</a></li>  
                <li><a href="/" className="download">Download</a></li>  
                <li><a href="/" className="pricing">Pricing</a></li>  
            </ul>
            
            <div 
            className={sidebar ? "sidebarBlack" : "sidebarWhite"}
            onClick={()=>
                {
                    setSidebar(!sidebar)
                    setToggleIcon(!toggleIcon)
                }}  
            >
                {toggleIcon ?<ImCross />:<FaBars />}
            </div>
        </div>
    )
}

export default Navbar
