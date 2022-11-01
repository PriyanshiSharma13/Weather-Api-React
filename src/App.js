import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city,setCity] = useState(null);
  const [search,setSearch] = useState("Mumbai");

  useEffect(() => {
    const apifetch = async() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=79c67a9242851ab0ba3751d7429c15fc`;
      const storeData = await fetch(url);
      // console.log(storeData);
      const apiData = await storeData.json();
      console.log(apiData);
      setCity(apiData.main);
    };
    apifetch();
  },[search]);

  return (
    <>
      <div className="box">
        <center><h1>WEATHER APP</h1></center>
        <div className="head" id="weathercon">
          <div className="flex">
          <input 
            type="search"
            placeholder='type city name'
            className='searchInput'
            onChange={(e) => setSearch(e.target.value)}
          />
          </div>
          <center><i className="fas fa-sun"></i></center>
        </div>
        <div className="bottom">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
          <div className="city" >
            <p><i className="fas fa-street-view" ></i>{search}</p>
            <p id="date"></p>
          </div>
          {!city ? 
            <p>Data Not Found !!</p>
            : <>
              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="tempmin_max">Min {city.temp_min} °Cel | Max {city.temp_max} °Cel</h3>
            </>}
        </div>
      </div>
    </>
  )
}

export default App;