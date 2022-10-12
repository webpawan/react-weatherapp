import React from 'react'
import Mymap from './mymapcontainer/Mymapcontainer'
import Mytempcontainer from './mytempcontainer/Mytempcontainer'
const Main = () => {
  return (
    <>
   {/* https://api.weatherapi.com/v1/forecast.json?key=bf0c1deadade48fbb5e132904221010&q=sagar&days=10&aqi=no&alerts=no */}
<div className="container-fluid bg">
<div className="row d-flex justify-content-center align-items-center  ">
<Mytempcontainer/>
<Mymap/>

</div>
</div>
    </>
  )
}

export default Main