import styles from "./login.module.css"


function Login(){

return(
    <div className={styles["form-container"]}>
    <div className={styles["form-card"]}>
        <div>      
            <h1 className={styles["form-sign-up"]}>Log In</h1>
        <div>
            <p>Email</p>
            <input type="email" name="email"/>
        </div>
        <div>
            <p>Password</p>
            <input type="password" name="password"/>
        </div>
        <button className={styles["form-login-button"]}>Log in</button>
        <div className={styles["form-forgot-password"]}>
        <a href="#" >Forgot Password?</a>
        </div>
        
        </div>
    </div>
    <span className={styles["form-need-an-account"]}>Need an account?  <a>Sign Up</a> </span>
   
 </div>
    
)
    

}

export default Login