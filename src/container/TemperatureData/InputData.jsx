import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyTempData, TempData } from "../Features/TempSlice";
import loder from "../../img/loader_gif_1.gif";
import MainInfo from "./MainInfo";
import { motion } from "framer-motion";
import Forcast from "./Forcast";
import Mymap from "./Mymapcontainer";
const InputData = () => {
  const dispatch = useDispatch();
  const forcastData = useSelector(MyTempData);
  const [count, setcount] = useState(0);
  const [search, setSearch] = useState("sagar");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(TempData(search));
  }, [dispatch, search]);

  let Data = forcastData;

  let date = "";
  if (Data[count] !== undefined) {
    var d = new Date(Data[count].date_epoch * 1000);
    date = d.toDateString();
  }

  if (forcastData.length === 0) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <div className="row mx-auto text-center">
        <motion.div
        animate={{opacity:1,x:0,transition:{delay:.4,duration:.6}}} initial={{opacity:0,x:-10}}
          className="col-12 col-sm-10 col-lg-7 centerDiv p-2 my-4 text-center mx-auto "
          style={{ height: "100%" }}
        >
          <div className="search w-75 mx-auto text-center my-3 p-4 text-center">
            <h5 className="text-capitalize ">
              {" "}
              <span id="day">
                {date === "" ? (
                  <img src={loder} alt="showloader" className="smallloder" />
                ) : (
                  date
                )}{" "}
              </span>
            </h5>
            <input
              type="text"
              className="myinput w-75  "
              id="inputTag"
              placeholder="search your location"
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              placeholder="day"
              name="forecast"
              className="m-2 "
              value={count}
              onChange={(e) => setcount(e.target.value)}
            >
              {
                // map alway work in array that by i am using
                // https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
                // The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
                // The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
                Object.values(Data).map((val, ind) => {
                  return (
                    <option val={ind} key={val.date}>
                      {ind}
                    </option>
                  );
                })
              }
            </select>
          </div>
          <MainInfo Data={Data[count].day} />
          <motion.div>
            {toggle ? (
              <Forcast
                Data={Data[count].hour}
                Myclass="height-100"
                none="block"
                
              />
            ) : (
              <Forcast none="none" Myclass="height-0" />
            )}
          </motion.div>
          <motion.button
            className="my-3 btn btn-outline-danger mybtn text-white mybtn"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "show less" : `show more`}
          </motion.button>
        </motion.div>
        <Mymap city={search} />
      </div>
    </>
  );
};

export default InputData;
