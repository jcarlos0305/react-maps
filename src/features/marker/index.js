// Autocomplete.js
import React from "react";
import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { selectMarkers } from "../marker/markerSlice";

export default function MapMarker() {
  const markers = useSelector(selectMarkers);
  return (
    <>
      {markers &&
        markers.map((marker, index) => (
          <Marker
            key={index}
            animation={2}
            position={marker.position}
            title={marker.name}
          />
        ))}
    </>
  );
}
