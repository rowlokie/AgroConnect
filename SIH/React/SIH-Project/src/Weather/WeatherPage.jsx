import WeatherDiv from "./WeatherDiv";
import Navbar from "../Homepage/Navbar";
import NavCloneDiv from "../Homepage/NavCloneDiv";

export default function WeatherPage(){


    return(
        <div >
            <Navbar/>
            <NavCloneDiv/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",transform:"scale(0.85)",height:"600px",marginTop:"-60px"}}>
            <WeatherDiv/>
            </div>
        </div>
    )
}