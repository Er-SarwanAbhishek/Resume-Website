import React from "react";
import "./SignupFormPopup.css";

const LoginFormPopup = () => {
  return (
    <div className="signup-main-container">
      <div className="signup-container">
        <div className="signup-plans">
          <h2>Career Gennie</h2>
          <ul>
            <li> <i class="fa-solid fa-check"></i>Option 1</li>
            <li> <i class="fa-solid fa-check"></i>Option 1</li>
            <li> <i class="fa-solid fa-check"></i>Option 1</li>
            <li> <i class="fa-solid fa-check"></i>Option 1</li>
            <li> <i class="fa-solid fa-check"></i>Option 1</li>
          </ul>
        </div>
        <div className="signup-steps">
          <h2>Signup</h2>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Not a member of career gennie? <a href="/">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFormPopup;
