import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './components/Main';


const App = () => {
  
  const [address, setAddress] = useState('https://api.punkapi.com/v2/beers');


  const[beers, setBeers] = useState([]);

  useEffect(()=> { 
  fetch(address)
  .then(res => res.json())
  .then(data => setBeers(data))
 }, []);

  const [searchFilter, setSearchFilter] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isPhChecked, setIsPhChecked] = useState(false);
  const [dateFilter, setDateFilter] = useState(false);


  const searchHandler = (e) => { setSearchFilter(e.target.value) }
  const filteredBeers = beers.filter((beer)=>{
  
  if(isChecked){
    return beer.abv>6
  }
  if(isPhChecked){
    return beer.ph <= 4
  }
  if(dateFilter){
    //setAddress("https://api.punkapi.com/v2/beers?brewed_before=12-2010")
    return beer.first_brewed.split("/")[1] <= 2010;
  }
   return beer.name.toLowerCase().includes(searchFilter.toLowerCase().trim())
 })



  return (
    <div>
      {/* dont render main until beers exists */}    
      {beers &&  <Main beers={beers} 
      filteredBeers={filteredBeers}
      searchHandler={searchHandler}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      isPhChecked={isPhChecked}
      setIsPhChecked={setIsPhChecked}
      dateFilter={dateFilter}
      setDateFilter={setDateFilter}
      /> }
      
    </div>
  )
}

export default App
