import React, {useContext} from 'react';
import { ThemeContext } from '../../Main';
import styles from './Card.module.scss';



const Card = (props) => {

  const {beer } = props

  const themeContext = useContext(ThemeContext); 

  return (
    <div className={themeContext.isDarkTheme ? styles.dark : styles.cont}>
      <img src={beer.image_url} alt="beer picture" />

      <div className={styles.description}>
          <div className={styles.heading}>
            <h2>
              {beer.name}
            </h2>
            <p>{beer.tagline}</p>
          </div>

          <p>{beer.description}</p>

          <h4>First Brewed</h4>
          <p>{beer.first_brewed}</p>
      </div>
    </div>

  )
}

export default Card
