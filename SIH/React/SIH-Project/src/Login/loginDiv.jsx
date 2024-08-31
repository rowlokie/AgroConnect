import "./loginDiv.css";
import { Link } from "react-router-dom";

export default function LoginDiv() {
  return (

    <div className="LoginDiv">
      <div className="login-container">
        <h1>AgroConnect</h1>
        <h3>Welcome Back!!</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="stay-signed-in">
            <input type="checkbox" id="staySignedIn" />
            <label htmlFor="staySignedIn">Stay signed in</label>
          </div>
          <button type="submit" className="login-btn">
            Sign In
          </button>
          <div className="signup-in-login">
            <div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <div>
              <div className="signup-text">
                <p>
                  New User? <a href="signuppage.html"><Link to="/register">Sign Up</Link></a>
                </p>
              </div>
            </div>
          </div>
          <p className="terms-text">
            <label>
              By signing in, I agree to AgroConnect's{" "}
              <a href="#">Privacy statements</a> and{" "}
              <a href="#">Terms of service</a>.
            </label>
          </p>
        </form>
      </div>
      </div>
    
  );
}
