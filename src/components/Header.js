import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
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
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to ="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to ="/Contact">Contact</Link>
                </li>
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