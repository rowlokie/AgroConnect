import RegisterDiv from "./RegisterDiv";
import Navbar from "../Homepage/Navbar";
import NavcloneLogin from "./NavCloneDiv";
export default function Register(){


    return(
        <div style={{backgroundColor:"#BDEEBD",height:"900px"}}>
             <Navbar/>
             <NavcloneLogin/>
             <RegisterDiv/>
        </div>
    )
}