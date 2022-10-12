import React from 'react'

const Showforcastdata = ({val,time}) => {
  return (
    <>

<div className="col-2 box-1 d-block  mx-1 my-3"> <h6 className="my-2">{time.toLocaleTimeString()}</h6>  <h6 className=""> <img src={val.condition.icon} alt="img"/></h6>
          <h5 className=" ">{val.temp_c}<sup>&#176;c</sup></h5> 
          </div>
          
    </>
  )
}

export default Showforcastdata