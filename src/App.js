import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Polyline,
  Marker,
  MarkerWithLabel,
  InfoWindow,
  Point
} from "react-google-maps";

const polycoords = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 25.774, lng: -80.19 },
];

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 25.774, lng: -80.19 }}>
      <Polyline
        path={polycoords}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
      <Marker position={{ lat: 25.397, lng: -72.644 }}></Marker>

      <InfoWindow position={{ lat: 20.397, lng: -68.644 }}>
        <div>Some info here, can take props</div>
      </InfoWindow>

      <Marker
        position={{ lat: 28.397, lng: -76.644 }} />

    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
