import React, {useState, useContext} from 'react'
import { ThemeContext } from '../Main'
import Card from './Card'
import styles from './CardList.module.scss'

const CardList = (props) => {

  const {beers, filteredBeers} = props
  
const themeContext = useContext(ThemeContext);


const beersJSX = filteredBeers.map((beer) => {
  return <Card 
  beer={beer}/>
})


  return (
    <div className= {themeContext.isDarkTheme ? styles.container : styles.container}>
      {beersJSX}
    </div>
  )
}

export default CardList
