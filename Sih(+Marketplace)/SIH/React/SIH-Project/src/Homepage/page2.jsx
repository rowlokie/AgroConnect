import "./page2.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page2(){


    return(
        <div id="page2">
            <div id="page2-img"></div>
            <div id="page2-info">
                <h1 id="page2-title" className="page2-info">Sample Title</h1>
                <p id="page2-Text" className="page2-info">jsknsj nk kjns lndjds m kjnks </p>
                <button id="page2-Start" className="page2-info">Get Started</button>
            </div>
        </div>
    )
}