import { useState } from "react";
import "./sidebar.css";

export default function Sidebar(){
   let[isopen,SetIsopen]=useState(false);

   let OpenSidebar=()=>{
    SetIsopen(!isopen)
   }
    return(
        <div className="sidebar">
            {isopen?
            <div style={{display:"block"}} className="sidebar-dashboard">
                <div className="sidebar-logoDiv"><i class="fa-solid fa-bars"></i><span className="sidebar-logo">LOGO</span></div><hr></hr>
                <div className="sidebar-Content">
                <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">GOV. SCHEMES</span></div>
                <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">WEATHER</span></div>
                <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">VIRTUAL ASSIT</span></div>
                <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">CHAT BOX</span></div>
                </div>
            </div>:<div style={{display:"none"}} className="sidebar-dashboard">
                <div>Gov. Schemes</div>
                <div>Weather</div>
                <div>Virtual Assistance</div>
                <div>Chat box</div>
            </div>
            }
            <div onClick={OpenSidebar} className="sidebar-button"></div>

        </div>
    )
}