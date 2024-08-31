import Servicesdiv from "./servicesdiv";
//images
import securePaymentIcon from './Images/SecurePaymentIcon.png';
import ContractIcon from './Images/ContractIcon.jpg';
import GovernmentSchemesIcon from './Images/GovernmentSchemesIcon.png';
import MarketPlaceIcon from './Images/MarketPlaceIcon.jpeg';
import WeatherIcon from './Images/WeatherIcon.jpeg';
import VirtualAssitant from './Images/SupportBotIcon.jpeg';
import ChatBox from './Images/4742d635ccbae64af1f9e67890df8d4f.png';


import "./ServicesBackground.css";

export default function ServicesBackground(){
    return(
        <div id="ServicesBackground">
            
            <h1 id="ServicesBackground-title">SERVICES</h1>
            
            <div id="ServicesBackground-Service-divs">
            <Servicesdiv 
            img={ContractIcon}
            title="CONTRACT"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={MarketPlaceIcon}
            title="MARKETPLACE"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={securePaymentIcon}
            title="SECURE PAYMENT"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={ChatBox}
            title="CHAT BOX"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={WeatherIcon}
            title="WEATHER"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={VirtualAssitant}
            title="VIRTUAL ASSITANT"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={GovernmentSchemesIcon}
            title="GOVT. SCHEMES"
            info= "Service  Info"
            />
            <Servicesdiv 
            img={securePaymentIcon}
            title="MULTI LANG"
            info= "Service  Info"
            />
            </div>
    
          </div>
    )
}