import Navbar from "../Homepage/Navbar";

import LoginDiv from "./loginDiv";
import NavcloneLogin from "./NavCloneDiv";

export default function LoginPage(){
    return(
        <div style={{backgroundColor:"white",height:"580px"}}>
            <Navbar/>
            <NavcloneLogin/>
            <LoginDiv/>
        </div>
    )
}