import React from 'react'

const Main = () => {
  return (
    <>
    
    <div class="container-fluid bg">

<div class="row d-flex justify-content-center align-items-center vh-100 ">


  
  <div class="col-12 col-sm-10 col-lg-7 centerDiv p-2 mx-4 my-4" id="show">
  
   <div class="search w-75 mx-auto text-center my-3 p-4">
     <h3 class="text-capitalize "> <span id="day">thuesdat</span> <span id="time">10:00</span>  </h3> 
    <input type="text" class="myinput w-75  " id="inputTag" placeholder="search your location"/>
   </div>
    
    
<div class=" d-sm-flex text-center justify-content-center align-items-end ">

  <h1 class="temp " id="temp">0<sup>&#176;c</sup></h1>  
 <p class=""><h5 class="mx-2 text-white lead" id="max">  </h5>  <h5 class="mx-1 lead text-white" id="min">min</h5> </p>
 
</div>
<h5 class="text-center text-white lead" id="city" >| city - name |</h5> 
 <p class="text-center my-3 d-flex justify-content-center align-items-center flex-wrap"> <span class="box p-2"> <i class="fa-solid fa-sun"></i> sun</span>  <span class="box p-2"> <i class="fa-solid fa-wind"></i>wind</span>  <span class="box p-2"><i class="fa-solid fa-cloud"></i> cloud</span>  <span class="box p-2"> <i class="fa-solid fa-cloud-rain"></i> rain</span>  </p> 








 <div class="row text-center d-flex justify-content-center align-items-center flex-wrap">
  
  <div class="box-1 col-2  d-block mx-1 my-2 "> <h4 class="py-1">jh</h4> 
   <h3 class="mt-2"><i class="fa-solid fa-cloud"></i></h3>
    <h5 class="">15<sup>&#176;c</sup></h5>  
  </div>

  <div class="col-2 box-1 d-block mx-1 my-2"> <h4 class="py-1">jh</h4>  <h4 class="mt-2"><i class="fa-solid fa-cloud"></i></h4>
    <h5 class=" ">15<sup>&#176;c</sup></h5>  
  </div>

  <div class="col-2 box-1 d-block mx-1 my-2"> <h4 class="py-1">jh</h4>  <h4 class="mt-2"><i class="fa-solid fa-cloud"></i></h4>
    <h5 class=" ">15<sup>&#176;c</sup></h5>  
  </div>

  <div class="col-2 box-1 d-block mx-1 my-2"> <h4 class="py-1">jh</h4>  <h4 class="mt-2"><i class="fa-solid fa-cloud"></i></h4>
    <h5 class=" ">15<sup>&#176;c</sup></h5>  
  </div>

  <div class="col-2 box-1 d-block mx-1 my-2"> <h4 class="py-1">jh</h4>  <h4 class="mt-2"><i class="fa-solid fa-cloud"></i></h4>
    <h5 class=" ">15<sup>&#176;c</sup></h5>  
  </div>

  <div class="col-2 box-1 d-block  mx-1 my-2"> <h4 class="py-1">jh</h4>  <h4 class="mt-2"><i class="fa-solid fa-cloud"></i></h4>
    <h5 class=" ">15<sup>&#176;c</sup></h5>  
  </div>
  
</div>



 

  </div> 
  
  


  <div class="col-12 col-sm-10 col-lg-4 centerDiv p-2 py-5 d-flex justify-content-center align-items-center " id="mymap">
  

  {/* <h5 class="text-white lead">type the city name in the input ⬅️ and enter </h5> */}
  
  {/* <iframe class="px-2" style='height: 50vh; width: 100%;' frameborder="0" scrolling="no" src="https://maps.google.com/maps?q=${weatherdata.name}&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe> */}
  <iframe width="460" height="473" src="https://maps.google.com/maps?q=sagar&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
   
  </div>
</div>

</div>
    
    
    </>
  )
}

export default Main