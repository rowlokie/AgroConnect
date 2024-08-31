
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){


 <div className="NavElements" id="SearchBar"><input type="text" id="search"></input></div>

    return(
        <div className="Navbar w-[1350px]">
            <div className="NavElements" id="Navbar-logo"></div>
            
            <div className="NavElements" id="sample1"><button className="navdiv" id="Navbar-Home"><Link to="/">HOME</Link></button></div>
            <div className="NavElements" id="sample2"><button className="navdiv"><Link to="/marketplace">MARKET PLACE</Link></button></div>
            <div className="NavElements" id="sample3"><button className="navdiv">CONTRACTS</button></div>
            <div className="NavElements" id="sample4"><button className="navdiv">SUPPORT</button></div>
            
            <div className="NavElements" id="SearchBar"><div><input type="search" id="search" placeholder="SEARCH"></input></div><i class="fa-solid fa-magnifying-glass"></i><div></div></div>
            <div className="NavElements" id="Login"><button id="loginbtn"><Link to="/login">LOGIN</Link></button></div>

        </div>
    )
}