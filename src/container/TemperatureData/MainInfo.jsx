import React from "react";

const MainInfo = ({ Data }) => {
  let data = Data;

  return (
    <>
      <div className=" d-sm-flex text-center justify-content-center align-items-end ">
        <h1 className="temp " id="temp">
          {data.avgtemp_c}
          <sup>&#176;c</sup>
        </h1>
        <img src={data.condition.icon} alt="img" />
        <h6 className="avg text-white">(average temperature)</h6>
      </div>
    </>
  );
};

export default MainInfo;
