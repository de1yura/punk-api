import React, {useContext} from 'react'
import styles from './Login.module.scss'
import { BrowserRouter as Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Login = (props) => {

  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

  let history = useHistory();
  const handleHome = () => {
    history.push("/");
  }

  const handleCombined = () => {
    handleLogin();
    handleHome();
  }

  

  return (
    <section className={styles.login}>
      <div className={styles.loginContainer}>
        <label>Email</label>
        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p className={styles.errorMsg}>{emailError}</p>

        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <p className={styles.errorMsg}>{passwordError}</p>

          <div className={styles.btnContainer}>
            {hasAccount ? (
              <>
              <button onClick={handleCombined}>Sign in</button>
              <p>Don't have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
              </>
            ): 
            ( <>
              <button onClick={handleSignup}>Sign up</button>
              <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
              </>)}
          </div>
      </div>
    </section>
  )
}

export default Login
