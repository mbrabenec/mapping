
import React, { useState, useEffect } from "react";
import Mapper from "./Mapper";
import Parser from "./Parser";




function App () {

  const [polycoords, setPolycoords] = useState(null);    //// WIP

  ////////// ////////// ////////// data from API/DB

  // const polycoords = [
  //   { lat: 25.774, lng: -80.19 },
  //   { lat: 18.466, lng: -66.118 },
  //   { lat: 32.321, lng: -64.757 },
  //   { lat: 25.774, lng: -80.19 },
  // ];


////////// ////////// ////////// pass as props to google maps


  return (
  <>

    <Parser setPolycoords={setPolycoords}/>
    {polycoords ? <Mapper polycoords={polycoords}/> : "no data" }
    {/*  */}
  </>
  )
  

}

export default App;



