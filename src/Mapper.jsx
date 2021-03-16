////////// ////////// ////////// NOTE API key in needs to be in .env as REACT_APP_GOOGLE_KEY='KeyGoesHere'. And gitIgnore.

import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Polyline,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Mapper(props) {

  ////////// ////////// ////////// deterine start, end, zero

  let polycoords = props.polycoords;
  polycoords.pop()      /// BUT WHY????

  console.log(polycoords);

  function getStart() {
    let start = polycoords[0];
    console.log(start);
    return start;
  }

  function getEnd() {
    const length = polycoords.length;
    let end = polycoords[length-1];    ////// WHY is the last one different?
    console.log(end);
    return end;
  }

  function getZero() {
    let zero = { lat: 0, lng: 0 };
    const length = polycoords.length;
    for (let i = 0; i < polycoords.length; i++)
    {
      zero["lat"] += polycoords[i]["lat"] / length;
      zero["lng"] += polycoords[i]["lng"] / length;
    };
    console.log(zero);
    return zero;
  }

  ////////// ////////// ////////// google code

  function Map() {
    return (

      <GoogleMap defaultZoom={10} defaultCenter={getZero()}>
        <Polyline
          path={polycoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
        <Marker position={getStart()}></Marker>

        <InfoWindow position={getEnd()}>
          <div>zero here</div>
        </InfoWindow>

        <Marker position={getEnd()} />
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <>
      <div className="Mapper" style={{ width: "80vw", height: "80vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}

export default Mapper;
