// Autocomplete.js
import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const searchBoxStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px",
  marginTop: "10px",
};

export default function AutocompleteSearchBox() {
  const [autoComplete, setAutoComplete] = useState(null);
  let onLoad = (text) => {
    console.log(text);
    setAutoComplete(text);
  };

  let onPlaceChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };
  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Search places..."
        style={searchBoxStyle}
      />
    </Autocomplete>
  );
}
