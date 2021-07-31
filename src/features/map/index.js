import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import AutocompleteSearchBox from "../autocomplete";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 41.3851 /* Barcelona coords */,
  lng: 2.1734,
};

const defaultMapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={defaultMapOptions}
      >
        <AutocompleteSearchBox />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
