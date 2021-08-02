import React from "react";
import * as reactRedux from "react-redux";
import ShallowRenderer from "react-test-renderer/shallow";
import MapMarker from "./features/marker";

const mockLocation = {
  name: "Barcelona",
  position: {
    lat: 41.3851 /* Barcelona coords */,
    lng: 2.1734,
  },
};

describe("<Markers />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("Add & render <Markers /> correctly", () => {
    useSelectorMock.mockReturnValue([mockLocation]);

    const renderer = new ShallowRenderer();
    renderer.render(<MapMarker />);

    const result = renderer.getRenderOutput();
    expect(result.props.children).toHaveLength(1);
  });
});
