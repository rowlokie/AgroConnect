import "./page2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page2() {
  return (
    <div id="page2">
      <div id="page2-img"></div>
      <div id="page2-info">
        <h1 id="page2-title" className="page2-info">
          Communication System
        </h1>
        <p id="page2-Text" className="page2-info">
          A communication chat box between a farmer and merchant streamlines
          one-to-one direct communication, making it easier to discuss and
          finalize farming contracts. It allows for real-time price
          negotiations, helping both parties reach mutually beneficial
          agreements. Quick and easy access to each other promotes better
          understanding and trust. The chat box also simplifies coordination,
          reducing the need for lengthy meetings or phone calls. Overall, it
          enhances efficiency and strengthens the farmer-merchant relationship.
        </p>
        <button id="page2-Start" className="page2-info">
          Get Started
        </button>
      </div>
    </div>
  );
}
