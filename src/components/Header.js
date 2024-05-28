import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
    let[log,out] = useState("Login");
    let[flag , setFlag] = useState(true)
    return (
    <div className="nav-items">
        <div className="nav-logo">
        <img src=  {LOGO_URL} alt="food"></img>

        </div>
        <div className="nav-comp">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            <button onClick={()=>{
                if(flag){
                
                out("Logout")
                } else{
                    out("Login")
                }
                flag = ! flag;
                setFlag(false)
            }
            }>{log}</button>
        </div>
    </div>
)
}
export default Header;