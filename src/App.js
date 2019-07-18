import React from 'react';

import Header from './components/Header'
import Search from './components/Search'
import './App.css';

function App() {
  const list = [ "Durban,SA" , "Cape Town,SA" ,"PE,SA" , "Johannesburg,SA", "Pretoria,SA", "Delhi,India", "Gujarat,India", "Big Ben,UK" , "California,USA" , "London,UK" ];
  
  return (
    <div className="App">
      <Header />
      <Search list={list}/>
    </div>
  );
}

export default App;
