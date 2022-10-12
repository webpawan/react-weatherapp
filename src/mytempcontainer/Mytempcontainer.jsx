import React,{useState,useEffect} from 'react'
import InputData from './InputData';
import Mymap from './Mymapcontainer'

const Mytempcontainer = () => {

  const [search, setsearch] = useState('sagar');
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState({});

  useEffect(() => {
  
    try {
      const fatchdata = async () =>{
        let url =  `https://api.weatherapi.com/v1/forecast.json?key=bf0c1deadade48fbb5e132904221010&q=${search}&days=14&aqi=no&alerts=no`;
        let getdata = await fetch(url);
        let realdata = await getdata.json();
        
       if(realdata.forecast !== undefined){
        setForecast(realdata.forecast.forecastday);
       }
       setReady(true);
        };
        fatchdata();
    } catch (error) {
      alert('try again')
      setReady(true);
      console.log(error);
     
    }
  
  },[search]);

if(ready){
  return (
    <>
    <div className="col-12 col-sm-10 col-lg-7 centerDiv p-2 mx-4 my-4 text-center " id="show" >
 <InputData search={setsearch} MyData={forecast}  city={search}/>
  </div> 
  <Mymap city={search} />
    </>
  )
}
return <div className="loading"></div>

}
export default Mytempcontainer;