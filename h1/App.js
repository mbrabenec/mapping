

import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Polyline,
  KmlLayer
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 41.9, lng: -87.624 }}>
      <KmlLayer
      url="https://raw.githubusercontent.com/mbrabenec/maps/main/testmap.kml"
      options={{ preserveViewport: true }}
    />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=k${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
