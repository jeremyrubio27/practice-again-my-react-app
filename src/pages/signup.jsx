import styles from "./signup.module.css"

function signup(){

return(
<div className={styles["form-container"]}>
    <div className={styles["form-card"]}>
        <div>      
            <h1 className={styles["form-sign-up"]}>Sign Up</h1>
        <div>
            <p>Email</p>
            <input type="email" name="email"/>
        </div>
        <div>
            <p>Password</p>
            <input type="password" name="password"/>
        </div>
        <div>
            <p>Password Confirmation</p>
            <input type="password" name="passwordConfirm"/>
        </div>
        <button className={styles["form-login-button"]}>Sign Up</button>
        <div className={styles["form-forgot-password"]}>
        </div>
        </div>
        <span className={styles["form-need-an-account"]}>Already have an account?  <a href="#">Log In</a></span>  
    </div>
    
 </div>
)


}

export default signup