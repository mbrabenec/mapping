import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Polyline,
  Marker,
  InfoWindow
} from "react-google-maps";

   ////////// ////////// ////////// NOTE API key in needs to be in .env as REACT_APP_GOOGLE_KEY='KeyGoesHere'. And gitIgnore.

  function Mapper(props) {

    const {polycoords, zero, start, end} = props

      function Map() {
        return (
          // <GoogleMap defaultZoom={10} defaultCenter={{ lat: 25.774, lng: -80.19 }}>
          <GoogleMap defaultZoom={5} defaultCenter={zero}>
            <Polyline
              path={polycoords}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
            />
            <Marker position={start}></Marker>
      
            <InfoWindow position={zero}>
              <div>zero here</div>
            </InfoWindow>
      
            <Marker position={end} />
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