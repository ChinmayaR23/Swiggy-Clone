import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import './styles/header.css';

const Header = () => {
    const [log, setLog] = useState("Login");
    const [flag, setFlag] = useState(true);

    return (
        <div className="nav-items">
            <div className="nav-logo">
                <img src={LOGO_URL} alt="food" />
            </div>
            <div className="nav-comp">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                <button onClick={() => {
                    setLog(flag ? "Logout" : "Login");
                    setFlag(!flag);
                }}>
                    {log}
                </button>
            </div>
        </div>
    );
}

export default Header;
