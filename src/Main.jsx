import React from "react";
import  InputData  from "./container/TemperatureData/InputData";


const Main = () => {
  return (
    <>
      <div className="container-fluid bg">
        <div className="row d-flex justify-content-center align-items-center  min-vh-100">
          <InputData/>
        </div>
      </div>
    </>
  );
};

export default Main;