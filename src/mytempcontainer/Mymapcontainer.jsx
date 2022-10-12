import React  from 'react'

const Mymap = (city) => {



let url = `https://maps.google.com/maps?q=${city.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="col-12 col-sm-10 col-lg-4 centerDiv p-2 py-5 d-flex justify-content-center align-items-center" id="mymap">
  

    {/* <h5 class="text-white lead">type the city name in the input ⬅️ and enter </h5> */}
    
   
    <iframe title="map" width="460" height="473" src={url}></iframe>
     
    </div>
  )
}

export default Mymap