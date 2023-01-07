import { motion } from "framer-motion";
import React from "react";

const Mymap = (city) => {

  let url = `https://maps.google.com/maps?q=${city.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  

  return (
    <motion.div animate={{opacity:1,x:0,transition:{delay:.5}}} initial={{opacity:0,x:10}}
      className="col-12 col-sm-10 col-lg-4 centerDiv p-2 py-5 d-flex justify-content-center mx-auto"
      id="mymap"
      style={{height:'100%'}}
    >
      {/* <h5 class="text-white lead">type the city name in the input ⬅️ and enter </h5> */}

      <iframe title="map" width="460" height="473" src={url}></iframe>
    </motion.div>
  );
};

export default Mymap;
