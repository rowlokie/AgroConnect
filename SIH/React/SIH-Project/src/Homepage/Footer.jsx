import "./Footer.css";

//images
import facebook from "./Images/SocialMediaIcon/Facebook.png";
import instagram from "./Images/SocialMediaIcon/Instagram.png";
import linkedin from "./Images/SocialMediaIcon/linkedin.png";
import twitter from "./Images/SocialMediaIcon/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h2>Need Help?</h2>
      </div>
      <div className="upperFooter">
        <div className="links1">
          <ul>
            <li>
              <h4>Support</h4>
            </li>
            <li className="list">Terms & Conditions</li>
            <br></br>
            <li className="list">Privacy Policy</li>
            <br></br>
            <li className="list">FAQ</li>
          </ul>
        </div>
        <div className="links2">
          <ul>
            <li>
              <h4>Contact Us</h4>
            </li>
            <li className="list">Email: Sample@Support.com</li>
            <br></br>
            <li className="list">Mobile: 9120939292/ 9391010222</li>
            <li></li>
          </ul>
        </div>
        <div className="footer-logo"></div>
      </div>
      <div
        style={{
          display: "inline-block",
          textAlign: "center",
          marginLeft: "300px",
          marginRight: "300px",
        }}
      >
        <hr></hr>
      </div>
      <div className="SocialMedia">
        <div
          className="icon"
          id="facebook"
          style={{ backgroundImage: `url(${facebook})` }}
        ></div>
        <div
          className="icon"
          id="twitter"
          style={{ backgroundImage: `url(${twitter})` }}
        ></div>
        <div
          className="icon"
          id="linkedin"
          style={{ backgroundImage: `url(${linkedin})` }}
        ></div>
        <div
          className="icon"
          id="Instagram"
          style={{ backgroundImage: `url(${instagram})` }}
        ></div>
      </div>

      <div className="lowerFooter">
        Copyright Notice: © 2024 [Marketplace Name]. All rights reserved.
      </div>
    </div>
  );
}
