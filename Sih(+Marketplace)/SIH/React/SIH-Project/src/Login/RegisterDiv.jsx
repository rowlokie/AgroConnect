import "./RegisterDiv.css";


export default function RegisterDiv(){
    
    return(
        <div className="RegisterDiv">
     
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form>
            <div class="form-group">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Enter your full name" required></input>
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required></input>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required></input>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required></input>
            </div>
            <div class="form-group">
                <label for="role">Role</label>
                <select id="role" required>
                    <option value="" disabled selected>Select your role</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Merchant">Merchant</option>
                   
                   
                </select>
            </div>
            <div class="form-group">
                <label for="aadhaar">Aadhaar Number</label>
                <input type="text" id="aadhaar" placeholder="Enter your Aadhaar number" required></input>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" placeholder="Enter your age" required></input>
            </div>
            <button type="submit" class="signup-btn">Sign Up</button>
            <p class="terms-text">
                By signing up, I agree to the AGRO-CONNECTS <a href="#">Privacy statements</a> and <a href="#">Terms of service</a>.
            </p>
        </form>
    </div>
        </div>
    )
}