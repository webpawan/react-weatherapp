import React,{useState} from 'react'
import loder from '../img/Search.gif';
import ShowInfo from './MainInfo';
import {Animated} from "react-animated-css";
import Forcast from './Forcast'
const InputData = ({city,search,MyData}) => {
const [count, setcount] = useState(0);
const [toggle, setToggle] = useState(false);


   let Data = MyData;
 let date = '';
  if(Data[count] !==undefined ){
    var d = new Date(Data[count].date_epoch*1000);
   date = d.toDateString();
  }
  return (
    <>
    <div className="search w-75 mx-auto text-center my-3 p-4 text-center">
     <h5 className="text-capitalize "> <span id="day">{date === '' ? <img src={loder} alt="showloader" className='smallloder' /> : date}  </span> 
     </h5> 
    <input type="text" className="myinput w-75  " id="inputTag" placeholder="search your location" onChange={(e) => search(e.target.value)}/>
    <label htmlFor="forecast">Next Days </label>
<select placeholder='day' name="forecast" value={count} onChange={e=>setcount(e.target.value)}> 
{
  // map alway work in array that by i am using 
  // https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
  // The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
  // The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
  Object.values(Data).map((val,ind)=>{
return (
  <option val={ind} key={val.date}>{ind}</option>
)
  })
}
</select>

   </div>
<ShowInfo Data ={Data[count].day}/>

<Animated animationIn="fadeInLeftBig" animationOut="flipInY" isVisible={toggle}>
{toggle && <Forcast Data={Data[count].hour} />}
</Animated>
{/* {toggle && <Forcast Data={Data[count].hour} />} */}
<button className='my-3 btn btn-outline-danger text-white' onClick={()=>setToggle(!toggle)}>{toggle ? "show less" : "show more"}</button>
    </>
  )
}

export default InputData