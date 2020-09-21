import { shallow } from "enzyme";
import SearchBox from "./SearchBox";
import React from "react";

describe("Search Box Component", () => {
  it("Should render Searc hBox component", () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
