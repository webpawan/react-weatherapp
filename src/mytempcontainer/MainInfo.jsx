import React from 'react'

const MainInfo = (Data) => {
  let data = Data.Data;
  

  return (
    <>
    <div className=" d-sm-flex text-center justify-content-center align-items-end ">
  <h1 className="temp " id="temp">{data.avgtemp_c}<sup>&#176;c</sup></h1> 
  <img src={data.condition.icon} alt="img"/>
  
</div>

<h6 className="text-center text-white "  > <span className='maxtemp'>max_tempature {data.maxtemp_c} </span> / <span className='mintemp'>min_tempature {data.mintemp_c} </span></h6> 
    
    </>
  )
}

export default MainInfo