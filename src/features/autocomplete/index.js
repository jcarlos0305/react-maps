import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { addMarker } from "../marker/markerSlice";
import { useDispatch } from "react-redux";

export default function AutocompleteSearchBox() {
  const [autoComplete, setAutoComplete] = useState(null);
  const dispatch = useDispatch();

  let onLoad = (text) => {
    setAutoComplete(text);
  };

  let onPlaceChanged = () => {
    if (autoComplete !== null && autoComplete.getPlace().geometry) {
      const location = {
        name: autoComplete.getPlace().name,
        position: {
          lat: autoComplete.getPlace().geometry.location.lat(),
          lng: autoComplete.getPlace().geometry.location.lng(),
        },
      };
      dispatch(addMarker(location));
    }
  };

  return (
    <div className="Autocomplete-wrapper">
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
        /* Optimize the request only getting the required data */
        fields={["name", "geometry"]}
      >
        <input
          type="text"
          placeholder="Search places..."
          className="Autocomplete"
        />
      </Autocomplete>
    </div>
  );
}
