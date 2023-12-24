import React from "react";
import "./Navbar.css";

type NavbarProps = {
    items?: {
        text: string;
        action: () =>void; 
    }[]
    
}
const Navbar = ({items}: NavbarProps) => {

return (
<nav className="background background-blue">
    <div className="navbar-content">
   <div style={{display:"flex",paddingTop:20,paddingBottom: 20, flexDirection:"row",}}>
        {items?.map(item => (
            <li onClick={item.action}>
                {item.text}
            </li>
        ))}
    </div>
    </div>
</nav>
)

}

export default Navbar;