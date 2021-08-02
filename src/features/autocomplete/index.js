import React, { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { addMarker } from "../marker/markerSlice";
import { useDispatch } from "react-redux";

export default function AutocompleteSearchBox() {
  const [autoComplete, setAutoComplete] = useState(null);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onLoad = (text) => {
    setAutoComplete(text);
  };

  const onPlaceChanged = () => {
    if (autoComplete !== null && autoComplete.getPlace().geometry) {
      const location = {
        name: autoComplete.getPlace().name,
        position: {
          lat: autoComplete.getPlace().geometry.location.lat(),
          lng: autoComplete.getPlace().geometry.location.lng(),
        },
      };
      dispatch(addMarker(location));
      /* Clearing the autocomplete input to improve UX */
      setTimeout(() => {
        inputRef.current.value = "";
      }, 1000);
    }
  };

  return (
    /* Currently the autocomplete api it's been called after each key pressed, 
      that could be optimized, if required with a debounce. */
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
          ref={inputRef}
        />
      </Autocomplete>
    </div>
  );
}
