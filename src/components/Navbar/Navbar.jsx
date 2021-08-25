import React, {useContext} from 'react';
import styles from './Navbar.module.scss';
import logo from '../../data/brewdog.jpeg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ThemeContext } from '../Main/Main';

const Navbar = (props) => {

  const{user, handleSignout, email, toggleTheme} =props;
  const themeProvider = useContext(ThemeContext);

  return (
    <div className={themeProvider.isDarkTheme ? styles.darkContainer : styles.container}>
    <nav className={themeProvider.isDarkTheme ? styles.dark : styles.nav}>
      <section className={styles.logo}>
        <img src={logo} alt="logo" />
      </section>

     <label className={styles.switch}>
     Toggle theme
       <input type="checkbox" onClick={toggleTheme}/>
       <span className={styles.slider & styles.round}></span> 
     </label>
      

      {email ? (<p>user: {email}</p>): (<p></p>)}
      <section className={styles.signIn}>
        {user ? (<p onClick={handleSignout}>Sign Out</p>):(<Link to="/login"><p>Sign In</p></Link>)}   
      </section>
    </nav>
    </div>
  )
}

export default Navbar
