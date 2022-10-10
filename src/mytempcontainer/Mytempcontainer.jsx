import React from 'react'
import Forcast from './Forcast'


const Mytempcontainer = () => {


// const fatchdata = async (city,cnt) =>{
// let url =  `https://api.weatherapi.com/v1/forecast.json?key=bf0c1deadade48fbb5e132904221010&q=${city}&days=${cnt}&aqi=no&alerts=no`
// // let getdata = fetch(url);

// }

// fatchdata();


  return (
    <div className="col-12 col-sm-10 col-lg-7 centerDiv p-2 mx-4 my-4" id="show">


   <div className="search w-75 mx-auto text-center my-3 p-4">
     <h3 className="text-capitalize "> <span id="day">thuesdat</span> <span id="time">10:00</span>  </h3> 
    <input type="text" className="myinput w-75  " id="inputTag" placeholder="search your location"/>
   </div>


<div className=" d-sm-flex text-center justify-content-center align-items-end ">
  <h1 className="temp " id="temp">0<sup>&#176;c</sup></h1> 
</div>


<h5 className="text-center text-white lead" id="city" >| city - name |</h5> 

 <p className="text-center my-2 d-flex justify-content-center align-items-center flex-wrap"> <span className="box p-2"> <i className="fa-solid fa-sun"></i> sun</span>  <span className="box p-2"> <i className="fa-solid fa-wind"></i>wind</span>  <span className="box p-2"><i className="fa-solid fa-cloud"></i> cloud</span>  <span className="box p-2"> <i className="fa-solid fa-cloud-rain"></i> rain</span>  </p> 


<Forcast/>

  </div> 
  
  )
}

export default Mytempcontainer