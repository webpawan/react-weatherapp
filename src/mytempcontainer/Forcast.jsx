import React from 'react'
import Showforcastdata from './Showforcastdata';

const Forcast = (Data) => {
let data = Data.Data;

   


  return (
  <div className="row text-center d-flex justify-content-center align-items-center flex-wrap">
  {
      Object.values(data).map((val,ind)=>{
       let rawtime = val.time_epoch
       let time = new Date(rawtime*1000);

        return <Showforcastdata key={ind} val={val} time={time}/>
})
   
  }
     


</div> 

  )

}
export default Forcast;