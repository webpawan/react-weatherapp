import React from 'react'

const InputData = ({search,countTime,countValue}) => {
  return (
    <>
    <div className="search w-75 mx-auto text-center my-3 p-4">
     <h3 className="text-capitalize "> <span id="day">thuesdat</span> <span id="time">10:00</span>  </h3> 
    <input type="text" className="myinput w-75  " id="inputTag" placeholder="search your location" onChange={(e) => search(e.target.value)}/>
    <label htmlFor="forecast">next day</label>
<select placeholder='day' name="forecast" value={countValue} onChange={e=>countTime(e.target.value)}> 
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
</select>

   </div>

    </>
  )
}

export default InputData