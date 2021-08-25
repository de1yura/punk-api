import React, {useState, createContext, useEffect} from 'react'
import CardList from './CardList'
import Navbar from '../Navbar'
import Filters from './Filters'
import styles from './Main.module.scss';
import fire from '../../fire';
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export const ThemeContext = createContext({});

const Main = (props) => {

  const {beers, filteredBeers, searchHandler, isChecked, setIsChecked, isPhChecked, setIsPhChecked, dateFilter, setDateFilter} = props


  // FIREBASE AUTH

  const [user, setUser]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('test');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearLogin = () => {
    setPassword('');
  }

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
    };

    const handleSignup = () => {
      clearError();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
        }
      })
    }

    const handleSignout = () => {
      fire.auth().signOut().then(window.location.reload());

    }

    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if(user){
          clearLogin();
          setUser(user)
        } else {
          setUser("");
        }
      })
    }

    useEffect(() => {
      authListener();
    }, [])

    //---------------------------------------------------------//
  //THEME
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const themeData = {
    isDarkTheme: isDarkTheme,
    toggleTheme: toggleTheme 
  }

  


  return (
    <ThemeContext.Provider value={themeData}>
    <Router>
      <Switch>
      <Route path="/login">   
      <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={setEmailError}
      passwordError={setPasswordError}
      />
      </Route>
      
      <Route path="/">
        <Navbar
        user={user}
        handleSignout={handleSignout}
        email={email}
        toggleTheme={toggleTheme}
        />
        <div className={isDarkTheme ?  styles.darkSearch : styles.searchbar} >
          <input type="text" placeholder="search..." onChange={searchHandler}/>
        </div>
        <div className={isDarkTheme ?  styles.dark : styles.dashboard}>

        <Filters 
        beers={beers} 
        filteredBeers={filteredBeers}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isPhChecked={isPhChecked}
        setIsPhChecked={setIsPhChecked}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}

        />
        <CardList 
        beers={beers} 
        filteredBeers={filteredBeers} 
        searchHandler={searchHandler}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        />
        
        </div>       
       </Route>
       </Switch>
    </Router>
    </ThemeContext.Provider>
  )
}

export default Main
