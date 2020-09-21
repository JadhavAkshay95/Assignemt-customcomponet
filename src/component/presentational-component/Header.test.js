import { shallow } from "enzyme";
import Header from "./Header";
import React from "react";

describe("Header Component", () => {
  it("Should render header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
