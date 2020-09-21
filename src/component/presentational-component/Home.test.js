import { shallow } from "enzyme";
import Home from "./Home";
import React from "react";

describe("Home Component", () => {
  it("Should render Home component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
