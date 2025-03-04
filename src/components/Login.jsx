import React from "react"


let Login=()=>{
    return(
<div>
    
    <div className="container">
        <div className="form-box">
            <div className="toggle-buttons">
                <button className="toggle active" id="loginToggle">Login</button>
                <button className="toggle" id="signupToggle">Sign Up</button>
            </div>
            <form className="form" id="loginForm">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="example@email.com" required />
                
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="********" required/>

                <a href="#" className="forgot-password">Forgot password?</a>
                <button type="submit" className="btn">Continue</button>
            </form>
          <div class="divider">OR</div>
            <div class="social-login">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google"/></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="Apple"/></a>
            </div>
          </div>
    </div>
    </div>

)
}  
export default Login
