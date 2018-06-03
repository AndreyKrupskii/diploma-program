import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      mapTypeId={"satellite"}
      defaultZoom={13}
      defaultCenter={{ lat: 49.699181, lng: 31.107601 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 49.699181, lng: 31.107601 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmhTSWdaYBHxOIHpk0_pcftebfBrdpuJA"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
