import { motion } from "framer-motion";
import React from "react";

const boxVariant = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listVariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};

const Forcast = (Data) => {
  let data = Data.Data;
  return (
    <motion.div
      variants={boxVariant}
      animate="visible"
      initial="hidden"
      className="row text-center d-flex justify-content-center align-items-center flex-wrap"
    >
      {Object.values(data).map((val, ind) => {
        let rawtime = val.time_epoch;
        let time = new Date(rawtime * 1000);

        return (
          <motion.div
            className="col-2 box-1 d-block  mx-1 my-3"
            key={ind}
            variants={listVariant}
          >
            {" "}
            <h6 className="my-2">{time.toLocaleTimeString()}</h6>{" "}
            <h6 className="">
              {" "}
              <img src={val.condition.icon} alt="img" />
            </h6>
            <h5 className=" ">
              {val.temp_c}
              <sup>&#176;c</sup>
            </h5>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
export default Forcast;
