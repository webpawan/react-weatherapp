import React from "react";
import { useState } from "react";


const WeatherApp = () => {

    const [city, setcity] = useState();
  const [search , setSearch ] = useState('bhopal')

    useState(() => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=036a46d9e5211ce035a3d1bbf62b4341`
            const response = await fetch(url);
            const resjson =await response.json();
            console.log(resjson.main);
            setcity(resjson.main);
    }

        fetchapi();
},[setSearch])

    return (
        <>
            <h1>{search}</h1>
            <input type="search" value={search} onChange={(event) => {setSearch(event.target.value)} } />
            <div className="city">
                {!city ? (
                    <p>data ni mila</p>
                ) : (
                        <>
                            <h2 className="temp">
                                
                                { city.temp}</h2>
                            <h3 className="tempmin_max"> {city.temp_min} </h3>
                        </>

                )
        }
            </div>
           
         </>
)
}


export default WeatherApp;