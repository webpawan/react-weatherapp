import React,{useState,useEffect} from 'react'
import Basicinfo from './BasicInfo';
import Forcast from './Forcast'
import InputData from './InputData';
import ShowInfo from './MainInfo';

const Mytempcontainer = () => {

  const [search, setsearch] = useState('indore');
  const [count, setCount] = useState(0);
 
  const [location, setlocation] = useState([]);
  const [forecast, setForecast] = useState([]);


  useEffect(() => {
  const fatchdata = async () =>{
    let url =  `https://api.weatherapi.com/v1/forecast.json?key=bf0c1deadade48fbb5e132904221010&q=${search}&days=${count}&aqi=no&alerts=no`;
    let getdata = await fetch(url);
    let realdata = await getdata.json();
    setlocation(realdata.location);
    setForecast(realdata.forecast);
    };
    fatchdata();
  },[search,count]);

  return (
    <div className="col-12 col-sm-10 col-lg-7 centerDiv p-2 mx-4 my-4" id="show">
 <InputData search={setsearch} countTime={setCount} countValue={count}/>
<ShowInfo/>
<Basicinfo/>
<Forcast/>
  </div> 
  )
}
export default Mytempcontainer;