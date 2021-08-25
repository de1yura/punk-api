import React, {useState, useContext} from 'react'
import { ThemeContext } from '../Main';
import styles from './Filters.module.scss'

const Filters = (props) => {

const { filteredBeers, isChecked, setIsChecked, isPhChecked, setIsPhChecked, dateFilter, setDateFilter} = props;
const themeContext = useContext(ThemeContext);

  const handleChecked = () =>{
    setIsChecked(!isChecked);
  }
  const handlePhChecked = () =>{
    setIsPhChecked(!isPhChecked);
  }
  const handleDateChecked = () => {
    setDateFilter(!dateFilter)
  }

  return (
    
    <div className={themeContext.isDarkTheme ? styles.dark : styles.filters}>

      <div className={styles.filter}>
        <h2>Filters</h2>
      </div>
      
      <div className={styles.abv}>
        <label htmlFor="abv"> ABV greater than 6%</label>
        <input id="check6" type="checkbox" onChange={handleChecked}/>
      </div>

      <div className={styles.abv}>
        <label htmlFor="abv"> Ph less than 4</label>
        <input id="checkPh" type="checkbox" onChange={handlePhChecked}/>
      </div>

      <div className={styles.abv}>
        <label > Brewed before 2010</label>
        <input id="checkPh" type="checkbox" onChange={handleDateChecked}/>
      </div>

    </div>
  )
}

export default Filters
