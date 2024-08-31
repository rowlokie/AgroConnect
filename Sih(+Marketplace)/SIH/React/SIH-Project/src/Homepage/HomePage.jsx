
import Navbar from './Navbar';
import BackgroundDiv from './BackgroundDiv';
import ServicesBackground from './ServicesBackground';
import Page1 from './Page1';
import Page2 from './page2';
import Page3 from './page3';
import Footer from './Footer';
import "./HomePage.css";
import Sidebar from './sidebar';


export default function HomePage(){
    return(
        <div className='homepage'>
            <Navbar/>
            <Sidebar/>
            <BackgroundDiv/>
            <ServicesBackground/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Footer/>
        </div>
    )
}