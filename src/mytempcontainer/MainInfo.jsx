import React from 'react'

const ShowInfo = () => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(1665497085*1000);
    var dayName = days[d.getDay()];
    // console.log(dayName); 



  return (
    <>
    <div className=" d-sm-flex text-center justify-content-center align-items-end ">
  <h1 className="temp " id="temp">0<sup>&#176;c</sup></h1> 
</div>


<h5 className="text-center text-white lead" id="city" > city -</h5> 
    
    </>
  )
}

export default ShowInfo