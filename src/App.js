
import React from "react";
import Mapper from "./Mapper";



function App () {

  ////////// ////////// ////////// data from API/DB

  const polycoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

 

 ////////// ////////// ////////// deterine start, end, zero

 const length = polycoords.length;

  let zero={lat: 0, lng: 0};

  let start = polycoords[0];
  let end = polycoords[length-1];

  polycoords.forEach(e => {
    zero['lat'] += e['lat']/length;
    zero['lng'] += e['lng']/length;

  });

  ////////// ////////// ////////// pass as props to google maps


  return (
  <>
    <Mapper polycoords={polycoords} zero={zero} start={start} end={end}/>
  </>
  )
  

}

export default App;



