// import { useState } from "react";
// import "./sidebar.css";
// import { Link } from "lucide-react";

// export default function Sidebar(){
//    let[isopen,SetIsopen]=useState(false);

//    let OpenSidebar=()=>{
//     SetIsopen(!isopen)
//    }
//     return(
//         <div className="sidebar">
//             {isopen?
//             <div style={{display:"block"}} className="sidebar-dashboard">
//                 <div className="sidebar-logoDiv"><i class="fa-solid fa-bars"></i><span className="sidebar-logo">LOGO</span></div><hr></hr>
//                 <div className="sidebar-Content">
//                 <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">GOV. SCHEMES</span></div>
//                 <Link to='/weather'><div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">WEATHER</span></div></Link>
//                 <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">VIRTUAL ASSIT</span></div>
//                 <div className="sidebar-links"><i class="fa-solid fa-arrow-right"></i><span className="sidebar-linksText">CHAT BOX</span></div>
//                 </div>
//             </div>:<div style={{display:"none"}} className="sidebar-dashboard">
                
//             </div>
//             }
//             <div onClick={OpenSidebar} className="sidebar-button"></div>

//         </div>
//     )
// }




import { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom"; // Ensure correct import

export default function Sidebar() {
   const [isOpen, setIsOpen] = useState(false);

   const openSidebar = () => {
       setIsOpen(!isOpen);
   }

   return (
       <div className="sidebar">
           {isOpen && (
               <div className="sidebar-dashboard">
                   <div className="sidebar-logoDiv">
                       <i className="fa-solid fa-bars"></i>
                       <span className="sidebar-logo">LOGO</span>
                   </div>
                   <hr />
                   <div className="sidebar-Content">
                       <div className="sidebar-links">
                           <i className="fa-solid fa-arrow-right"></i>
                           <span className="sidebar-linksText">GOV. SCHEMES</span>
                       </div>
                       <Link to='/weather'>
                           <div className="sidebar-links">
                               <i className="fa-solid fa-arrow-right"></i>
                               <span className="sidebar-linksText">WEATHER</span>
                           </div>
                       </Link>
                       <div className="sidebar-links">
                           <i className="fa-solid fa-arrow-right"></i>
                           <span className="sidebar-linksText">VIRTUAL ASSIST</span>
                       </div>
                       <div className="sidebar-links">
                           <i className="fa-solid fa-arrow-right"></i>
                           <span className="sidebar-linksText">CHAT BOX</span>
                       </div>
                   </div>
               </div>
           )}
           <div onClick={openSidebar} className="sidebar-button"></div>
       </div>
   )
}
