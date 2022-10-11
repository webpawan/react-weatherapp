import React from 'react'

const MainInfo = (Data) => {
  let data = Data.Data;
  // console.log(data);

  const cTof = () =>{
    console.log('bhia');
  }

  return (
    <>
    <div className=" d-sm-flex text-center justify-content-center align-items-end ">
  <h1 className="temp " id="temp">{data.avgtemp_c}<button type='button' className='convert' onClick={cTof()}><sup>&#176;c</sup></button></h1> 
  <img src={data.condition.icon} alt="img"/>
  
</div>


{/* <h5 className="text-center text-white lead" id="city" > city -</h5>  */}
    
    </>
  )
}

export default MainInfo